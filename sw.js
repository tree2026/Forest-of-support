// Simple Service Worker for Forest of Support
const CACHE_NAME = 'forest-support-v1';

self.addEventListener('install', event => {
  console.log('🌳 Service Worker installing...');
  // Skip waiting so it activates immediately
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('🌳 Service Worker activating...');
  // Claim clients so it takes control immediately
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Optional: Add caching strategies here if needed
  // For now, just pass through all requests
  event.respondWith(fetch(event.request));
});
