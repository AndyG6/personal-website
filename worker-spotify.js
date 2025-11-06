export default {
  async fetch(request, env) {
    const basic = (clientId, clientSecret) =>
      btoa(`${clientId}:${clientSecret}`);

    const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
    const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
    const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

    const getAccessToken = async () => {
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

      return response.json();
    };

    const getNowPlaying = async (accessToken) => {
      return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };

    const getRecentlyPlayed = async (accessToken) => {
      return fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    };

    const { access_token } = await getAccessToken();
    const nowPlayingResponse = await getNowPlaying(access_token);

    let currentTrack = null;
    let lastPlayed = null;

    console.log('Now Playing Status:', nowPlayingResponse.status);

    // Get currently playing
    if (nowPlayingResponse.status === 200) {
      const song = await nowPlayingResponse.json();
      if (song.item) {
        currentTrack = {
          isPlaying: song.is_playing,
          title: song.item.name,
          artist: song.item.artists.map((artist) => artist.name).join(', '),
          album: song.item.album.name,
          albumImageUrl: song.item.album.images[0].url,
          songUrl: song.item.external_urls.spotify,
        };
      }
    }

    // Get recently played
    const recentlyPlayedResponse = await getRecentlyPlayed(access_token);
    console.log('Recently Played Status:', recentlyPlayedResponse.status);
    if (recentlyPlayedResponse.status === 200) {
      const recent = await recentlyPlayedResponse.json();
      if (recent.items && recent.items.length > 0) {
        const track = recent.items[0].track;
        lastPlayed = {
          title: track.name,
          artist: track.artists.map((artist) => artist.name).join(', '),
          album: track.album.name,
          albumImageUrl: track.album.images[0].url,
          songUrl: track.external_urls.spotify,
          playedAt: recent.items[0].played_at,
        };
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
  },
};
