# Spotify Widget Setup

## KV Namespace Setup

The Spotify widget now caches the last played track using Cloudflare KV. To set this up:

### 1. Create a KV Namespace

```bash
# Using Wrangler CLI
npx wrangler kv:namespace create "SPOTIFY_CACHE"
```

This will output something like:
```
🌀 Creating namespace with title "personal-website-SPOTIFY_CACHE"
✨ Success!
Add the following to your wrangler.jsonc:
{ binding = "SPOTIFY_CACHE", id = "abc123..." }
```

### 2. Update wrangler.jsonc

Replace the `"id": "placeholder"` in `wrangler.jsonc` with the actual KV namespace ID from step 1:

```jsonc
{
  "kv_namespaces": [
    {
      "binding": "SPOTIFY_CACHE",
      "id": "your-actual-kv-namespace-id-here"
    }
  ]
}
```

### 3. Bind to Cloudflare Pages (if using Cloudflare dashboard)

If you're deploying via the Cloudflare dashboard:
1. Go to your Pages project settings
2. Navigate to "Functions" → "KV namespace bindings"
3. Add a new binding:
   - Variable name: `SPOTIFY_CACHE`
   - KV namespace: Select the namespace you created

## How It Works

- When you're **actively playing** a song, the widget displays it and caches the track data
- When you're **not playing** anything, the widget shows "last played" with the cached track
- The cache is updated every time a new song is detected playing
