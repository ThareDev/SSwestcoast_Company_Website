import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SS West Coast Cleaning Services',
    short_name: 'SS West Coast',
    description: 'Professional cleaning services in Perth, Western Australia',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#84cc16',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}