interface Env {
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    SPOTIFY_REFRESH_TOKEN: string;
    SPOTIFY_CACHE: KVNamespace;
  }
  
  const basic = (clientId: string, clientSecret: string) =>
    btoa(`${clientId}:${clientSecret}`);
  
  const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
  const CACHE_KEY = 'last_played_track';
  
  const getAccessToken = async (env: Env) => {
    console.log('🔑 Fetching access token...');
    
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic(env.SPOTIFY_CLIENT_ID, env.SPOTIFY_CLIENT_SECRET)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: env.SPOTIFY_REFRESH_TOKEN,
      }),
    });
  
    const data = await response.json();
    console.log('✅ Access token received');
    
    return data;
  };
  
  const getNowPlaying = async (accessToken: string) => {
    console.log('🎵 Fetching now playing...');

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
  
  export const onRequest: PagesFunction<Env> = async (context) => {
    console.log('📨 Request received');

    const { access_token } = await getAccessToken(context.env);
    const nowPlayingResponse = await getNowPlaying(access_token);

    console.log(`📊 Now Playing status: ${nowPlayingResponse.status}`);

    let currentTrack = null;
    let lastPlayed = null;

    // Get currently playing or paused
    if (nowPlayingResponse.status === 200) {
      const song = await nowPlayingResponse.json();
      if (song.item) {
        const trackData = {
          title: song.item.name,
          artist: song.item.artists.map((artist: any) => artist.name).join(', '),
          album: song.item.album.name,
          albumImageUrl: song.item.album.images[0].url,
          songUrl: song.item.external_urls.spotify,
        };

        if (song.is_playing) {
          // Actively playing - show as current track and cache it
          console.log('🎶 Currently playing:', trackData.title);
          currentTrack = { ...trackData, isPlaying: true };

          // Cache the currently playing track
          await context.env.SPOTIFY_CACHE.put(CACHE_KEY, JSON.stringify(trackData));
          console.log('💾 Cached track:', trackData.title);
        } else {
          // Paused - show as last played
          console.log('⏸️  Paused:', trackData.title);
          lastPlayed = trackData;
        }
      }
    }

    // If nothing is playing/paused, get from cache
    if (!currentTrack && !lastPlayed) {
      const cachedTrack = await context.env.SPOTIFY_CACHE.get(CACHE_KEY);
      if (cachedTrack) {
        lastPlayed = JSON.parse(cachedTrack);
        console.log('📦 Retrieved from cache:', lastPlayed.title);
      }
    }

    return new Response(
      JSON.stringify({
        isPlaying: currentTrack?.isPlaying || false,
        currentTrack: currentTrack,
        lastPlayed: lastPlayed,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      }
    );
  };