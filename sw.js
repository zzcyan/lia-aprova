/* Service worker do Lia Aprova. Versão: 20260906-232712
   App e conteúdo: rede primeiro (pega a versão nova ao abrir), cache como reserva offline.
   Figuras e PDFs: cache primeiro. A API do servidor local nunca passa pelo cache. */
const VERSAO = '20260906-232712';
const CACHE = 'lia-aprova-' + VERSAO;
const APP = ["./", "index.html", "app.css", "app.js", "manifest.json", "conteudo/00-config.js", "conteudo/d00-estrategia.js", "conteudo/d01-redacao.js", "conteudo/d02-literatura.js", "conteudo/d03-portugues.js", "conteudo/d04-ingles.js", "conteudo/d05-artes.js", "conteudo/d06-biologia.js", "conteudo/d07-quimica.js", "conteudo/d08-fisica.js", "conteudo/d09-matematica.js", "conteudo/d10-historia.js", "conteudo/d11-geografia.js", "conteudo/d12-filosofia.js", "conteudo/d13-sociologia.js", "conteudo/d14-prova-parana.js", "conteudo/missoes/artes.js", "conteudo/missoes/biologia.js", "conteudo/missoes/estrategia.js", "conteudo/missoes/filosofia.js", "conteudo/missoes/fisica.js", "conteudo/missoes/geografia.js", "conteudo/missoes/historia.js", "conteudo/missoes/ingles.js", "conteudo/missoes/literatura.js", "conteudo/missoes/matematica.js", "conteudo/missoes/portugues.js", "conteudo/missoes/prova-parana.js", "conteudo/missoes/quimica.js", "conteudo/missoes/redacao.js", "conteudo/missoes/sociologia.js", "conteudo/pratica/artes.js", "conteudo/pratica/biologia.js", "conteudo/pratica/estrategia.js", "conteudo/pratica/filosofia.js", "conteudo/pratica/fisica.js", "conteudo/pratica/geografia.js", "conteudo/pratica/historia.js", "conteudo/pratica/ingles.js", "conteudo/pratica/literatura.js", "conteudo/pratica/matematica.js", "conteudo/pratica/portugues.js", "conteudo/pratica/prova-parana.js", "conteudo/pratica/quimica.js", "conteudo/pratica/redacao.js", "conteudo/pratica/sociologia.js", "icones/icone-180.png", "icones/icone-192.png", "icones/icone-512.png", "icones/icone-maskable-512.png"];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(APP.map(function (u) { return c.add(u).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.indexOf('/api/') !== -1) return;
  const estatico = /\.(jpg|jpeg|png|webp|gif|svg|pdf|woff2?)$/i.test(url.pathname);
  if (estatico) {
    e.respondWith(caches.match(req).then(function (r) {
      return r || fetch(req).then(function (resp) {
        if (resp.ok) { const copia = resp.clone(); caches.open(CACHE).then(function (c) { c.put(req, copia); }); }
        return resp;
      });
    }));
    return;
  }
  // app e conteúdo: revalida com o servidor (ignora o cache HTTP de 10 minutos do GitHub Pages) e guarda a versão nova
  e.respondWith(fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).then(function (resp) {
    if (resp.ok) { const copia = resp.clone(); caches.open(CACHE).then(function (c) { c.put(req, copia); }); return resp; }
    // resposta ruim (por exemplo 404 no meio de uma publicação): usa a cópia guardada se existir
    return caches.match(req).then(function (r) { return r || resp; });
  }).catch(function () {
    return caches.match(req).then(function (r) { return r || caches.match('index.html'); });
  }));
});
