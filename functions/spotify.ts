interface Env {
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    SPOTIFY_REFRESH_TOKEN: string;
  }
  
  const basic = (clientId: string, clientSecret: string) =>
    btoa(`${clientId}:${clientSecret}`);
  
  const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
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
  
  const getNowPlaying = async (env: Env) => {
    const { access_token } = await getAccessToken(env);
    
    console.log('🎵 Fetching now playing...');
  
    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };
  
  export const onRequest: PagesFunction<Env> = async (context) => {
    console.log('📨 Request received');
    
    const response = await getNowPlaying(context.env);
    
    console.log(`📊 Response status: ${response.status}`);
  
    if (response.status === 204 || response.status > 400) {
      console.log('⏸️  Not playing or error status');
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  
    const song = await response.json();
  
    if (song.item === null) {
      console.log('⏸️  No song item found');
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((artist: any) => artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;
  
    console.log('🎶 Now playing:', {
      title,
      artist,
      album,
      isPlaying,
    });
  
    return new Response(
      JSON.stringify({
        isPlaying,
        title,
        artist,
        album,
        albumImageUrl,
        songUrl,
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