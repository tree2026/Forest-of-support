// Service Worker for Forest of Support
const CACHE_NAME = 'forest-support-2024';
const APP_URL = '/Forest-of-support/forest05.html';

self.addEventListener('install', function(event) {
    console.log('🌳 Service Worker installing...');
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    console.log('🌳 Service Worker activating...');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
});
