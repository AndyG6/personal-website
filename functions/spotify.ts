interface Env {
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    SPOTIFY_REFRESH_TOKEN: string;
  }
  
  const basic = (clientId: string, clientSecret: string) =>
    btoa(`${clientId}:${clientSecret}`);
  
  const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
  const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
  const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
  
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

  const getRecentlyPlayed = async (accessToken: string) => {
    console.log('🕒 Fetching recently played...');

    return fetch(RECENTLY_PLAYED_ENDPOINT, {
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
          // Actively playing - show as current track
          console.log('🎶 Currently playing:', trackData.title);
          currentTrack = { ...trackData, isPlaying: true };
        } else {
          // Paused - show as last played
          console.log('⏸️  Paused:', trackData.title);
          lastPlayed = trackData;
        }
      }
    }

    // If no paused track, get recently played
    if (!lastPlayed) {
      const recentlyPlayedResponse = await getRecentlyPlayed(access_token);
      console.log(`📊 Recently Played status: ${recentlyPlayedResponse.status}`);

      if (recentlyPlayedResponse.status === 200) {
        const recent = await recentlyPlayedResponse.json();
        if (recent.items && recent.items.length > 0) {
          const track = recent.items[0].track;
          lastPlayed = {
            title: track.name,
            artist: track.artists.map((artist: any) => artist.name).join(', '),
            album: track.album.name,
            albumImageUrl: track.album.images[0].url,
            songUrl: track.external_urls.spotify,
            playedAt: recent.items[0].played_at,
          };
          console.log('🕒 Last played:', lastPlayed.title);
        }
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