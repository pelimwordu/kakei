// 何もしないサービスワーカー（ホーム画面にアプリとして追加できるようにするためだけのもの）
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
