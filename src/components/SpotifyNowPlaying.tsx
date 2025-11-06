import { useState, useEffect } from 'react';
import { Music } from 'lucide-react';

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  album?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

const SpotifyNowPlaying = () => {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('https://spotify-personal-website.zeyuguo2006.workers.dev');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    // Refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold font-heading mb-3">currently listening to</h3>
        <div className="bg-dark-lighter rounded-lg p-6 border border-gray-border">
          <p className="text-gray-text text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!data?.isPlaying) {
    return (
      <div className="card">
        <h3 className="text-lg font-semibold font-heading mb-3">currently listening to</h3>
        <div className="bg-dark-lighter rounded-lg p-6 border border-gray-border flex items-center gap-4">
          <Music className="w-8 h-8 text-gray-text" />
          <p className="text-gray-text text-sm">Not playing anything right now</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold font-heading mb-3">currently listening to</h3>
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-dark-lighter rounded-lg p-4 border border-gray-border hover:border-primary transition-colors"
      >
        <div className="flex items-center gap-4">
          {data.albumImageUrl && (
            <img
              src={data.albumImageUrl}
              alt={data.album}
              className="w-16 h-16 rounded-md"
            />
          )}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white truncate">{data.title}</p>
            <p className="text-sm text-gray-text truncate">{data.artist}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-text">Now Playing</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SpotifyNowPlaying;