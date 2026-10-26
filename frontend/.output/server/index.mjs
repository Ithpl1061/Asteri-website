globalThis.__nitro_main__ = import.meta.url;
import { n as serve, t as NodeResponse } from "./_libs/srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/3.webp": {
		"type": "image/webp",
		"etag": "\"54aa-T48Ju5IjHFGkBt0KY8Hzcw3A10c\"",
		"mtime": "2026-08-17T09:34:40.356Z",
		"size": 21674,
		"path": "../public/3.webp"
	},
	"/4.webp": {
		"type": "image/webp",
		"etag": "\"8438-1YDW+7wym5Ato/8k6/EbFq3wPpU\"",
		"mtime": "2026-08-17T09:34:40.955Z",
		"size": 33848,
		"path": "../public/4.webp"
	},
	"/5.webp": {
		"type": "image/webp",
		"etag": "\"3e26-41f2KH3HSrmYaaUbmDpzuG0MCyQ\"",
		"mtime": "2026-08-17T09:34:41.597Z",
		"size": 15910,
		"path": "../public/5.webp"
	},
	"/anydesk.png": {
		"type": "image/png",
		"etag": "\"8496-0gmXobyOiHHwNax99cj+tOSTUs4\"",
		"mtime": "2026-07-31T05:48:43.297Z",
		"size": 33942,
		"path": "../public/anydesk.png"
	},
	"/1dox.ai 1.png": {
		"type": "image/png",
		"etag": "\"18b94-kquPfdjKhKHUMIQE7+BCAed+HdY\"",
		"mtime": "2026-07-31T05:48:43.201Z",
		"size": 101268,
		"path": "../public/1dox.ai 1.png"
	},
	"/asteri logo footer.jpeg": {
		"type": "image/jpeg",
		"etag": "\"40ee-tx3VhuTZcs1koo86oC3lHphGjnk\"",
		"mtime": "2026-09-29T12:09:29.889Z",
		"size": 16622,
		"path": "../public/asteri logo footer.jpeg"
	},
	"/Asteri logo.png": {
		"type": "image/png",
		"etag": "\"6aa8-pijoXt961fGekrNzz3K5l9QRXuM\"",
		"mtime": "2026-07-31T05:48:43.355Z",
		"size": 27304,
		"path": "../public/Asteri logo.png"
	},
	"/Asteri logo for footer.svg": {
		"type": "image/svg+xml",
		"etag": "\"638-3vx3gbkoIPjLEroCcxmTsqNXUT4\"",
		"mtime": "2026-07-31T05:48:43.336Z",
		"size": 1592,
		"path": "../public/Asteri logo for footer.svg"
	},
	"/aws logo.png": {
		"type": "image/png",
		"etag": "\"3b4a-3uaZLwyWWDjf5AebYSREvOcFsvQ\"",
		"mtime": "2026-07-31T05:48:43.443Z",
		"size": 15178,
		"path": "../public/aws logo.png"
	},
	"/Asteri Animated Logo.mp4": {
		"type": "video/mp4",
		"etag": "\"23df6-spNvHUofaWdFV1l2LG6utY41Ddk\"",
		"mtime": "2026-07-31T05:48:43.313Z",
		"size": 146934,
		"path": "../public/Asteri Animated Logo.mp4"
	},
	"/hero-orb.svg": {
		"type": "image/svg+xml",
		"etag": "\"b1c-xMvkbnkkq5VuSPlZqNpBTy3y2KM\"",
		"mtime": "2026-09-23T09:41:52.806Z",
		"size": 2844,
		"path": "../public/hero-orb.svg"
	},
	"/Container.jpg": {
		"type": "image/jpeg",
		"etag": "\"18d93-aFbGvzq8l0e5AuIic9LSfPie7ig\"",
		"mtime": "2026-07-31T05:48:43.464Z",
		"size": 101779,
		"path": "../public/Container.jpg"
	},
	"/hero-line.svg": {
		"type": "image/svg+xml",
		"etag": "\"fa-aNCycD/UMLxhjhW5ryW1YUxg1wE\"",
		"mtime": "2026-09-23T09:41:53.191Z",
		"size": 250,
		"path": "../public/hero-line.svg"
	},
	"/Image Placeholder (1).jpg": {
		"type": "image/jpeg",
		"etag": "\"16738-2C8M3u6S5zO0zreuCYPQXl+sisE\"",
		"mtime": "2026-07-31T05:48:44.136Z",
		"size": 91960,
		"path": "../public/Image Placeholder (1).jpg"
	},
	"/Automation.jpg": {
		"type": "image/jpeg",
		"etag": "\"17063-8iFLp0w+vVZpsZ/yj4Azugz0U5A\"",
		"mtime": "2026-07-31T05:48:43.377Z",
		"size": 94307,
		"path": "../public/Automation.jpg"
	},
	"/Geist-SemiBold.otf": {
		"type": "font/otf",
		"etag": "\"283ac-T8+oO4vwnCG1szZpASDYuOEgqoY\"",
		"mtime": "2026-07-31T05:48:43.736Z",
		"size": 164780,
		"path": "../public/Geist-SemiBold.otf"
	},
	"/ManageEngine logo.png": {
		"type": "image/png",
		"etag": "\"5084-TCdtQZuv2EsZuVU5NbdV7WkMgTo\"",
		"mtime": "2026-07-31T05:48:44.203Z",
		"size": 20612,
		"path": "../public/ManageEngine logo.png"
	},
	"/Image Placeholder (2).jpg": {
		"type": "image/jpeg",
		"etag": "\"264be-VMTKp2jTYKQg3zAIbGq88mQbbw4\"",
		"mtime": "2026-07-31T05:48:44.160Z",
		"size": 156862,
		"path": "../public/Image Placeholder (2).jpg"
	},
	"/Image Placeholder.jpg": {
		"type": "image/jpeg",
		"etag": "\"30bda-qrOAgbOBUqtiWpuJgT1ZoWvfRmE\"",
		"mtime": "2026-07-31T05:48:44.183Z",
		"size": 199642,
		"path": "../public/Image Placeholder.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-10-26T09:30:10.795Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/Salesforce.png": {
		"type": "image/png",
		"etag": "\"558d-knDgWppIGTxAR9Q4RTYtlWe07uU\"",
		"mtime": "2026-07-31T05:48:44.244Z",
		"size": 21901,
		"path": "../public/Salesforce.png"
	},
	"/plsql.png": {
		"type": "image/png",
		"etag": "\"bae8-p5N0TMVM/P4K6vph4A1lSDiioao\"",
		"mtime": "2026-07-31T05:48:44.223Z",
		"size": 47848,
		"path": "../public/plsql.png"
	},
	"/AishwariaMam.png": {
		"type": "image/png",
		"etag": "\"ba1dc-mzHjd1S6E5hrBBiXt1EUTWrv7A8\"",
		"mtime": "2026-07-31T05:48:43.242Z",
		"size": 762332,
		"path": "../public/AishwariaMam.png"
	},
	"/AnurajSir.png": {
		"type": "image/png",
		"etag": "\"d6e85-I84b/bvJjLA1XnqlqGGpJO7X5Rc\"",
		"mtime": "2026-07-31T05:48:43.276Z",
		"size": 880261,
		"path": "../public/AnurajSir.png"
	},
	"/AvinashSir.png": {
		"type": "image/png",
		"etag": "\"dca42-YGYOKf8uMQmmcmTnFOHhoyg3gvQ\"",
		"mtime": "2026-07-31T05:48:43.423Z",
		"size": 903746,
		"path": "../public/AvinashSir.png"
	},
	"/Shipsy_Logo 1.png": {
		"type": "image/png",
		"etag": "\"f880-zcPXEWby1GkY+mwdd1V24zrOues\"",
		"mtime": "2026-07-31T05:48:44.309Z",
		"size": 63616,
		"path": "../public/Shipsy_Logo 1.png"
	},
	"/sap logo.png": {
		"type": "image/png",
		"etag": "\"3148-Dk3+tcGrZEaOpMfemp4/RQoDRr4\"",
		"mtime": "2026-07-31T05:48:44.265Z",
		"size": 12616,
		"path": "../public/sap logo.png"
	},
	"/savex.png": {
		"type": "image/png",
		"etag": "\"1cb00-g1tgWRPg9f52KkO/fpb4LkxB+vQ\"",
		"mtime": "2026-07-31T05:48:44.287Z",
		"size": 117504,
		"path": "../public/savex.png"
	},
	"/System Architecture.jpg": {
		"type": "image/jpeg",
		"etag": "\"17e9f-W4mn4x19NTFQ2jNJvLT47vIwnAU\"",
		"mtime": "2026-07-31T05:48:44.330Z",
		"size": 97951,
		"path": "../public/System Architecture.jpg"
	},
	"/thinkcell.png": {
		"type": "image/png",
		"etag": "\"6783-iWiotWwggxXg1gnauPjrmuIgt8w\"",
		"mtime": "2026-07-31T05:48:44.349Z",
		"size": 26499,
		"path": "../public/thinkcell.png"
	},
	"/zionit.png": {
		"type": "image/png",
		"etag": "\"a9df-avxiCUoYx7LKUhJYftF2QY/vQzE\"",
		"mtime": "2026-07-31T05:48:44.436Z",
		"size": 43487,
		"path": "../public/zionit.png"
	},
	"/Vector.png": {
		"type": "image/png",
		"etag": "\"135cf-NCg2sZ6LOO82Nj1bfh8UXCCtcB8\"",
		"mtime": "2026-07-31T05:48:44.369Z",
		"size": 79311,
		"path": "../public/Vector.png"
	},
	"/zoho logo.png": {
		"type": "image/png",
		"etag": "\"36bb-4JQkIFfmjFot4qWd/0d5552HarY\"",
		"mtime": "2026-07-31T05:48:44.454Z",
		"size": 14011,
		"path": "../public/zoho logo.png"
	},
	"/about/approach-agile.png": {
		"type": "image/png",
		"etag": "\"1f59-YytOe2PiFWg2ZhCxrNMe1SmZ5cw\"",
		"mtime": "2026-08-04T06:38:23.353Z",
		"size": 8025,
		"path": "../public/about/approach-agile.png"
	},
	"/about/approach-discovery.svg": {
		"type": "image/svg+xml",
		"etag": "\"589-X0f0qnKM2lgFQQ8dxxPvhRUh3LE\"",
		"mtime": "2026-09-15T08:03:43.804Z",
		"size": 1417,
		"path": "../public/about/approach-discovery.svg"
	},
	"/about/approach-discovery.png": {
		"type": "image/png",
		"etag": "\"1dd2-/K9podNwZ7zbweIIzej/6uITANY\"",
		"mtime": "2026-08-04T06:38:21.419Z",
		"size": 7634,
		"path": "../public/about/approach-discovery.png"
	},
	"/about/approach-support.png": {
		"type": "image/png",
		"etag": "\"1dd1-e3H52HjvA9uACcpYWXfSr0uxUAE\"",
		"mtime": "2026-08-04T06:38:22.963Z",
		"size": 7633,
		"path": "../public/about/approach-support.png"
	},
	"/about/final-glow.svg": {
		"type": "image/svg+xml",
		"etag": "\"3ca-cBzJPIkyoC5Ex2U3zZ7K1+4obXc\"",
		"mtime": "2026-08-04T06:38:22.547Z",
		"size": 970,
		"path": "../public/about/final-glow.svg"
	},
	"/about/cta-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"3d4-F2MIVjjs7o+FdoRLoKInry/Uagc\"",
		"mtime": "2026-08-04T06:38:22.171Z",
		"size": 980,
		"path": "../public/about/cta-arrow.svg"
	},
	"/about/hero-path.svg": {
		"type": "image/svg+xml",
		"etag": "\"348-eJPYqLVch49R1WjVJiRlb90ogOs\"",
		"mtime": "2026-08-04T06:38:18.525Z",
		"size": 840,
		"path": "../public/about/hero-path.svg"
	},
	"/about/mission-goal.png": {
		"type": "image/png",
		"etag": "\"34f0-ELXpAk8shMlMIlvehPhM8PTtsG0\"",
		"mtime": "2026-08-04T06:38:23.776Z",
		"size": 13552,
		"path": "../public/about/mission-goal.png"
	},
	"/about/orb.svg": {
		"type": "image/svg+xml",
		"etag": "\"824-pPtv+Y12ZtOzyLh4anJHCZEJVEA\"",
		"mtime": "2026-08-04T06:38:21.799Z",
		"size": 2084,
		"path": "../public/about/orb.svg"
	},
	"/about/visionary-circle.svg": {
		"type": "image/svg+xml",
		"etag": "\"1d3-gRa1LWRH/m+somX6NHvmsh/DkzU\"",
		"mtime": "2026-08-04T06:38:24.151Z",
		"size": 467,
		"path": "../public/about/visionary-circle.svg"
	},
	"/about/vision.png": {
		"type": "image/png",
		"etag": "\"230b-yzLoQJDENgV709byEHLxBXj2bv8\"",
		"mtime": "2026-08-04T06:38:19.058Z",
		"size": 8971,
		"path": "../public/about/vision.png"
	},
	"/assets/about-C-Ucvlos.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8060-CEYPBwVq5v06BLbcyTMYwo634a8\"",
		"mtime": "2026-10-26T10:15:25.705Z",
		"size": 32864,
		"path": "../public/assets/about-C-Ucvlos.js"
	},
	"/about/approach-team.png": {
		"type": "image/png",
		"etag": "\"18f5-ZVoESLVebr4d2NO/u2TYgPkcuUc\"",
		"mtime": "2026-08-04T06:38:20.976Z",
		"size": 6389,
		"path": "../public/about/approach-team.png"
	},
	"/assets/arrow-left-CO9OZnWw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-PW/c67Z+uzp5qUD/OKZvgbTDM7E\"",
		"mtime": "2026-10-26T10:15:25.705Z",
		"size": 155,
		"path": "../public/assets/arrow-left-CO9OZnWw.js"
	},
	"/about/visionary-avinash.png": {
		"type": "image/png",
		"etag": "\"63597-+qxILIfvyP84ye+WPaNUK4XSG7Y\"",
		"mtime": "2026-08-04T06:38:20.567Z",
		"size": 406935,
		"path": "../public/about/visionary-avinash.png"
	},
	"/assets/arrow-up-right-Dgps1aOs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-xfIxsVg7ZFpdd7fPtEGNiklg0QE\"",
		"mtime": "2026-10-26T10:15:25.706Z",
		"size": 157,
		"path": "../public/assets/arrow-up-right-Dgps1aOs.js"
	},
	"/assets/blog-De53b7vL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2168-/mjID1JlEGjoYNitNQNgkBTZ4eM\"",
		"mtime": "2026-10-26T10:15:25.706Z",
		"size": 8552,
		"path": "../public/assets/blog-De53b7vL.js"
	},
	"/assets/case-studies-DVNSGCBU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17fc-el//Pf/WnFuAlSKAj2U1An58Av8\"",
		"mtime": "2026-10-26T10:15:25.706Z",
		"size": 6140,
		"path": "../public/assets/case-studies-DVNSGCBU.js"
	},
	"/assets/cloud-solutions-B00_aWpc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bd-9w9fQ4OwCGdjRRzLObA9hfWIgk0\"",
		"mtime": "2026-10-26T10:15:25.707Z",
		"size": 445,
		"path": "../public/assets/cloud-solutions-B00_aWpc.js"
	},
	"/assets/contact-CCYhAVl_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17da-VSDLvDGNtCaJx9tjCk6tEn0kygU\"",
		"mtime": "2026-10-26T10:15:25.707Z",
		"size": 6106,
		"path": "../public/assets/contact-CCYhAVl_.js"
	},
	"/assets/contact-DC01BY_q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7e-ng832aeYoZ6mOqVnVJ9Wss5ohKc\"",
		"mtime": "2026-10-26T10:15:25.707Z",
		"size": 2686,
		"path": "../public/assets/contact-DC01BY_q.js"
	},
	"/assets/data-science-BKuGENh8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bd-YxbNjpudo1ml/9pmCv/ox639n/s\"",
		"mtime": "2026-10-26T10:15:25.708Z",
		"size": 445,
		"path": "../public/assets/data-science-BKuGENh8.js"
	},
	"/What we do.png": {
		"type": "image/png",
		"etag": "\"1ad1d4-d08+zL9xspdZA2W9fwcmaCp/QE0\"",
		"mtime": "2026-07-31T05:48:44.415Z",
		"size": 1757652,
		"path": "../public/What we do.png"
	},
	"/assets/Footer-1mJ2K6_H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ce1-O6IVJOcEqs29Co1MLXnfGEwqACM\"",
		"mtime": "2026-10-26T10:15:25.697Z",
		"size": 15585,
		"path": "../public/assets/Footer-1mJ2K6_H.js"
	},
	"/assets/heart-handshake-CbclNae_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c0-UglTGKSiq2UpWGgMMmB3ApmjbsY\"",
		"mtime": "2026-10-26T10:15:25.708Z",
		"size": 448,
		"path": "../public/assets/heart-handshake-CbclNae_.js"
	},
	"/assets/geist-sans-latin-600-normal-CA1yjETN.woff": {
		"type": "font/woff",
		"etag": "\"a0f4-w6YmFho8VLjQDd/wDVi5ErjS+5Q\"",
		"mtime": "2026-10-26T10:15:25.714Z",
		"size": 41204,
		"path": "../public/assets/geist-sans-latin-600-normal-CA1yjETN.woff"
	},
	"/assets/industries-MwilYejy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34e1-lWTFaDVIkT1oqgFFm1LM5Mei1nA\"",
		"mtime": "2026-10-26T10:15:25.708Z",
		"size": 13537,
		"path": "../public/assets/industries-MwilYejy.js"
	},
	"/assets/geist-sans-latin-600-normal-DFOURf8L.woff2": {
		"type": "font/woff2",
		"etag": "\"89dc-kV6faIqiry/+WygSKW3lfDcID2s\"",
		"mtime": "2026-10-26T10:15:25.715Z",
		"size": 35292,
		"path": "../public/assets/geist-sans-latin-600-normal-DFOURf8L.woff2"
	},
	"/assets/matchContext-BhIUsCE9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cb-K1XIxHjlkC/+KhNyVd3ciVlqgjs\"",
		"mtime": "2026-10-26T10:15:25.709Z",
		"size": 715,
		"path": "../public/assets/matchContext-BhIUsCE9.js"
	},
	"/assets/jsx-runtime-BF6S49EV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20d8-0DiQPxmyjzLJ1Ha5htG0u3y17bQ\"",
		"mtime": "2026-10-26T10:15:25.709Z",
		"size": 8408,
		"path": "../public/assets/jsx-runtime-BF6S49EV.js"
	},
	"/assets/index-D2XVlgto.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1651e-CIy05nmFtkCduZWNoaQ2FLz/Ea4\"",
		"mtime": "2026-10-26T10:15:25.715Z",
		"size": 91422,
		"path": "../public/assets/index-D2XVlgto.css"
	},
	"/assets/index-Mjl4-IiI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e845-uVz0glA59XeA0DXqRhUVsa1jwEc\"",
		"mtime": "2026-10-26T10:15:25.696Z",
		"size": 452677,
		"path": "../public/assets/index-Mjl4-IiI.js"
	},
	"/assets/motion-B19heWVH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-6n+rX/AC7x8Exoal+xywt7feqEA\"",
		"mtime": "2026-10-26T10:15:25.709Z",
		"size": 121,
		"path": "../public/assets/motion-B19heWVH.js"
	},
	"/assets/PageShell-BCVahWG5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"109e-IuWR+HwUU1hhQVe8d7tQqnIJ3cs\"",
		"mtime": "2026-10-26T10:15:25.697Z",
		"size": 4254,
		"path": "../public/assets/PageShell-BCVahWG5.js"
	},
	"/assets/partnership-BjIOQTyA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2524-5c1bMEJ+1+Wys2d1N37dagTeJdI\"",
		"mtime": "2026-10-26T10:15:25.710Z",
		"size": 9508,
		"path": "../public/assets/partnership-BjIOQTyA.js"
	},
	"/assets/products-Bn1wbce9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6725-3k2YMhKo9FI4AOczRwbSDSlR1YQ\"",
		"mtime": "2026-10-26T10:15:25.710Z",
		"size": 26405,
		"path": "../public/assets/products-Bn1wbce9.js"
	},
	"/assets/routes-B0JJsZ8S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87bb-gWUuxwfBGMzH2oFnuQwAP5Wwnfs\"",
		"mtime": "2026-10-26T10:15:25.711Z",
		"size": 34747,
		"path": "../public/assets/routes-B0JJsZ8S.js"
	},
	"/assets/salesforce-BeuueDU7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bdc-D7kt5TadBPbCrjz5x/nnZ6OOV/Y\"",
		"mtime": "2026-10-26T10:15:25.711Z",
		"size": 11228,
		"path": "../public/assets/salesforce-BeuueDU7.js"
	},
	"/assets/sap-consulting-CtR9dkWe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-rfrlRzaCjN8QZtimajZBv5rfCTg\"",
		"mtime": "2026-10-26T10:15:25.711Z",
		"size": 500,
		"path": "../public/assets/sap-consulting-CtR9dkWe.js"
	},
	"/assets/ServiceDetailPage-COjMt2Ii.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45b-G/Maw0GN/saBwob26xyRJ8mm8os\"",
		"mtime": "2026-10-26T10:15:25.704Z",
		"size": 1115,
		"path": "../public/assets/ServiceDetailPage-COjMt2Ii.js"
	},
	"/assets/ServiceDetailPage-BsaIxYuM.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"410-vIS+jnP1snA+ZEW/tB1aUuyP2Ac\"",
		"mtime": "2026-10-26T10:15:25.714Z",
		"size": 1040,
		"path": "../public/assets/ServiceDetailPage-BsaIxYuM.css"
	},
	"/assets/services-BfRy1SMF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-hH08iq/2pAM5mr6QpOo/25qSeS4\"",
		"mtime": "2026-10-26T10:15:25.712Z",
		"size": 154,
		"path": "../public/assets/services-BfRy1SMF.js"
	},
	"/assets/site-vlt-JcT3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22992-3yXHqWNCTQ0HL4T4M1+xsCjoKrg\"",
		"mtime": "2026-10-26T10:15:25.713Z",
		"size": 141714,
		"path": "../public/assets/site-vlt-JcT3.js"
	},
	"/assets/services-D7RW-9Cl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4293-iyNHyGbvsH5QG1zL3I3+shfV85E\"",
		"mtime": "2026-10-26T10:15:25.712Z",
		"size": 17043,
		"path": "../public/assets/services-D7RW-9Cl.js"
	},
	"/assets/solutions-ChaBuwzO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3747-JRkeC4WVl4bLdGXXnGgblBrGqlw\"",
		"mtime": "2026-10-26T10:15:25.713Z",
		"size": 14151,
		"path": "../public/assets/solutions-ChaBuwzO.js"
	},
	"/assets/software-development-BRow4CNR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-Go0Nptya6uCAUHyHk+98xRlPR50\"",
		"mtime": "2026-10-26T10:15:25.713Z",
		"size": 494,
		"path": "../public/assets/software-development-BRow4CNR.js"
	},
	"/assets/styles-bTLIeODl.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1393a-iMhtBNv688+EwdIvvzlaCF3sqJU\"",
		"mtime": "2026-10-26T10:15:25.716Z",
		"size": 80186,
		"path": "../public/assets/styles-bTLIeODl.css"
	},
	"/assets/Turnstile-0_s21h2M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-w/eWpmTEVL3LQfHx9AdobmvtHFc\"",
		"mtime": "2026-10-26T10:15:25.705Z",
		"size": 250,
		"path": "../public/assets/Turnstile-0_s21h2M.js"
	},
	"/assets/useStore-vgF-sAQR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a1f-5hy9p/ObM/xFPMQgz8IMuDAvLZo\"",
		"mtime": "2026-10-26T10:15:25.714Z",
		"size": 18975,
		"path": "../public/assets/useStore-vgF-sAQR.js"
	},
	"/figma/about/agile-base.svg": {
		"type": "image/svg+xml",
		"etag": "\"1335-Y/F4mxGWazV8+DKY/bFjGOoBbf8\"",
		"mtime": "2026-08-04T05:46:33.449Z",
		"size": 4917,
		"path": "../public/figma/about/agile-base.svg"
	},
	"/figma/about/agile-overlay.svg": {
		"type": "image/svg+xml",
		"etag": "\"2a84-F4ryJTe6O+RsJFDT6RKqfoDhqjI\"",
		"mtime": "2026-08-04T05:46:31.120Z",
		"size": 10884,
		"path": "../public/figma/about/agile-overlay.svg"
	},
	"/figma/about/agile-trolley.svg": {
		"type": "image/svg+xml",
		"etag": "\"1925-k58Tj2hR8R+l1AwLr+fjzAmiUYs\"",
		"mtime": "2026-08-04T05:46:32.109Z",
		"size": 6437,
		"path": "../public/figma/about/agile-trolley.svg"
	},
	"/figma/about/arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"31b-EfQmZldFeGUkvGytaEiaGJzLvxI\"",
		"mtime": "2026-08-04T05:46:31.702Z",
		"size": 795,
		"path": "../public/figma/about/arrow.svg"
	},
	"/figma/about/cta-glow.svg": {
		"type": "image/svg+xml",
		"etag": "\"36e-iiBOjT+lrdHzWX+JsRGXnhkJrGQ\"",
		"mtime": "2026-08-04T05:46:35.792Z",
		"size": 878,
		"path": "../public/figma/about/cta-glow.svg"
	},
	"/figma/about/discovery-goal.svg": {
		"type": "image/svg+xml",
		"etag": "\"1424-0BDa35JJ3rSxxJvmA6HWLZChYWE\"",
		"mtime": "2026-08-04T05:46:33.864Z",
		"size": 5156,
		"path": "../public/figma/about/discovery-goal.svg"
	},
	"/figma/about/discovery-search.svg": {
		"type": "image/svg+xml",
		"etag": "\"589-X0f0qnKM2lgFQQ8dxxPvhRUh3LE\"",
		"mtime": "2026-08-04T05:46:34.879Z",
		"size": 1417,
		"path": "../public/figma/about/discovery-search.svg"
	},
	"/figma/about/hero-orb.svg": {
		"type": "image/svg+xml",
		"etag": "\"af2-ptkJTUYd9fprnGTS0ioUIvQJO5E\"",
		"mtime": "2026-08-04T05:46:30.688Z",
		"size": 2802,
		"path": "../public/figma/about/hero-orb.svg"
	},
	"/figma/about/hero-path.svg": {
		"type": "image/svg+xml",
		"etag": "\"204-gs4jZlmjmSpp1QM4IiICg2tzEF4\"",
		"mtime": "2026-08-04T05:46:34.224Z",
		"size": 516,
		"path": "../public/figma/about/hero-path.svg"
	},
	"/figma/about/mission-goal.png": {
		"type": "image/png",
		"etag": "\"be5-+lFxg86ZMyV2wfrZRuF0fWoQh74\"",
		"mtime": "2026-08-04T05:46:33.033Z",
		"size": 3045,
		"path": "../public/figma/about/mission-goal.png"
	},
	"/figma/about/support-scale.png": {
		"type": "image/png",
		"etag": "\"773-1YmrY0IE+iglh2U34gGyP1veWio\"",
		"mtime": "2026-08-04T05:46:30.299Z",
		"size": 1907,
		"path": "../public/figma/about/support-scale.png"
	},
	"/figma/about/team-assembly.png": {
		"type": "image/png",
		"etag": "\"4a3-aW+RytcIqYGiqgjAaqKRaPcu418\"",
		"mtime": "2026-08-04T05:46:35.379Z",
		"size": 1187,
		"path": "../public/figma/about/team-assembly.png"
	},
	"/figma/about/vision.png": {
		"type": "image/png",
		"etag": "\"74c-XFh8O7Me1Yqma0osLt6/hZBUj64\"",
		"mtime": "2026-08-04T05:46:36.311Z",
		"size": 1868,
		"path": "../public/figma/about/vision.png"
	},
	"/figma/about/visionary-circle.svg": {
		"type": "image/svg+xml",
		"etag": "\"fd-pd1D4eQHQqiCrJvx2Xof9/27B2Y\"",
		"mtime": "2026-08-04T05:46:32.559Z",
		"size": 253,
		"path": "../public/figma/about/visionary-circle.svg"
	},
	"/figma/blog/down-button.png": {
		"type": "image/png",
		"etag": "\"360-CWNEK3tOw5IOrTrbzdqVqupEPuE\"",
		"mtime": "2026-08-13T09:41:56.418Z",
		"size": 864,
		"path": "../public/figma/blog/down-button.png"
	},
	"/figma/blog/featured-ai-data.png": {
		"type": "image/png",
		"etag": "\"21404-KQMy3lVBfQO00uYW2TpAWPH6s00\"",
		"mtime": "2026-08-13T09:40:29.804Z",
		"size": 136196,
		"path": "../public/figma/blog/featured-ai-data.png"
	},
	"/figma/blog/featured-cloud.png": {
		"type": "image/png",
		"etag": "\"248fb-UD4zq0g+0nzsVDT91koMxVGfsOM\"",
		"mtime": "2026-08-13T09:40:29.180Z",
		"size": 149755,
		"path": "../public/figma/blog/featured-cloud.png"
	},
	"/figma/blog/read-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"38e-OI5VOxBpmn//CpMdA+ru8U3OJ9s\"",
		"mtime": "2026-08-13T09:41:54.576Z",
		"size": 910,
		"path": "../public/figma/blog/read-arrow.svg"
	},
	"/figma/blog/newsletter-glow.png": {
		"type": "image/png",
		"etag": "\"621df-InMr8LCI6DWkI2dEs1Gw2TUA/3s\"",
		"mtime": "2026-08-13T09:41:58.203Z",
		"size": 401887,
		"path": "../public/figma/blog/newsletter-glow.png"
	},
	"/figma/blog/featured-sap-erp.png": {
		"type": "image/png",
		"etag": "\"3d901-aiPlc0Vwls84rWYERTn4knT+ax0\"",
		"mtime": "2026-08-13T09:40:30.428Z",
		"size": 252161,
		"path": "../public/figma/blog/featured-sap-erp.png"
	},
	"/figma/blog/recent-automation.png": {
		"type": "image/png",
		"etag": "\"28cd9-ADkqRcTkEUTxgbIHJllNrCf0fNA\"",
		"mtime": "2026-08-13T09:40:34.960Z",
		"size": 167129,
		"path": "../public/figma/blog/recent-automation.png"
	},
	"/figma/blog/recent-cloud.png": {
		"type": "image/png",
		"etag": "\"4c334-Wae7dH56j1hfaB24ZblR/3XZQQY\"",
		"mtime": "2026-08-13T09:40:32.535Z",
		"size": 312116,
		"path": "../public/figma/blog/recent-cloud.png"
	},
	"/figma/blog/recent-ai.png": {
		"type": "image/png",
		"etag": "\"4474f-IPvOu1NLodnMUxuFBYgZ+so7A8E\"",
		"mtime": "2026-08-13T09:40:31.812Z",
		"size": 280399,
		"path": "../public/figma/blog/recent-ai.png"
	},
	"/figma/blog/recent-crm.png": {
		"type": "image/png",
		"etag": "\"24ca7-3VYjOnb1OMvkK2+ClaRKRtpGqYk\"",
		"mtime": "2026-08-13T09:40:34.310Z",
		"size": 150695,
		"path": "../public/figma/blog/recent-crm.png"
	},
	"/figma/blog/recent-system-architecture.png": {
		"type": "image/png",
		"etag": "\"2d7b8-IR28cl2aIJbUiVXXVLByxf3LZ/c\"",
		"mtime": "2026-08-13T09:40:33.174Z",
		"size": 186296,
		"path": "../public/figma/blog/recent-system-architecture.png"
	},
	"/figma/blog/search-more.png": {
		"type": "image/png",
		"etag": "\"378-2CpraHrBtOWR1cP9Fcb4LA4CZkY\"",
		"mtime": "2026-08-13T09:41:55.419Z",
		"size": 888,
		"path": "../public/figma/blog/search-more.png"
	},
	"/figma/case-studies/case-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"364-F6U5UvSlZPIKKkVKt2HvLYuKvQw\"",
		"mtime": "2026-08-13T10:12:33.470Z",
		"size": 868,
		"path": "../public/figma/case-studies/case-arrow.svg"
	},
	"/figma/case-studies/contact-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"31b-EfQmZldFeGUkvGytaEiaGJzLvxI\"",
		"mtime": "2026-08-13T10:12:32.722Z",
		"size": 795,
		"path": "../public/figma/case-studies/contact-arrow.svg"
	},
	"/figma/blog/recent-productivity.png": {
		"type": "image/png",
		"etag": "\"42358-evvE3oFbgt2boOXwpzIynWVA8gY\"",
		"mtime": "2026-08-13T09:40:35.744Z",
		"size": 271192,
		"path": "../public/figma/blog/recent-productivity.png"
	},
	"/figma/case-studies/talk-to-us.png": {
		"type": "image/png",
		"etag": "\"121b-o57xM9fsFAqxt1LJNKHgghxj+qs\"",
		"mtime": "2026-08-13T10:12:34.264Z",
		"size": 4635,
		"path": "../public/figma/case-studies/talk-to-us.png"
	},
	"/figma/contact/email.png": {
		"type": "image/png",
		"etag": "\"5ad-HMZJCeBEys5Ji+URYK6h+BBbpss\"",
		"mtime": "2026-08-13T09:08:24.944Z",
		"size": 1453,
		"path": "../public/figma/contact/email.png"
	},
	"/figma/contact/footer-art.png": {
		"type": "image/png",
		"etag": "\"4197-5PaSDdSPmsI8bZuUFrbsNKLEhlM\"",
		"mtime": "2026-08-13T09:08:25.468Z",
		"size": 16791,
		"path": "../public/figma/contact/footer-art.png"
	},
	"/figma/contact/footer-location-text.svg": {
		"type": "image/svg+xml",
		"etag": "\"3e6e-jDisthsIwttP9HHJjdpFNFsc3Ss\"",
		"mtime": "2026-08-13T09:08:28.638Z",
		"size": 15982,
		"path": "../public/figma/contact/footer-location-text.svg"
	},
	"/figma/contact/footer-mask.svg": {
		"type": "image/svg+xml",
		"etag": "\"786-DcLkxldz0AXdaw3PqFnmiPPS75w\"",
		"mtime": "2026-08-13T09:08:27.712Z",
		"size": 1926,
		"path": "../public/figma/contact/footer-mask.svg"
	},
	"/figma/contact/footer-logo.png": {
		"type": "image/png",
		"etag": "\"f84c-sZlQsnM/Yd1bt21VxmKbqYMMnP4\"",
		"mtime": "2026-08-13T09:08:26.498Z",
		"size": 63564,
		"path": "../public/figma/contact/footer-logo.png"
	},
	"/figma/contact/footer-email-text.svg": {
		"type": "image/svg+xml",
		"etag": "\"643c-MJ3jfRfGQU8hxZc4GoHjH3eyjow\"",
		"mtime": "2026-08-13T09:08:29.187Z",
		"size": 25660,
		"path": "../public/figma/contact/footer-email-text.svg"
	},
	"/figma/case-studies/cta-glow.png": {
		"type": "image/png",
		"etag": "\"62032-qr4bVCa1ShMERWZRoS21Hjzo1IY\"",
		"mtime": "2026-08-13T10:12:32.055Z",
		"size": 401458,
		"path": "../public/figma/case-studies/cta-glow.png"
	},
	"/figma/contact/footer-phone-text.svg": {
		"type": "image/svg+xml",
		"etag": "\"7e42-Xx9O7FvbVw1tdcdjoWVvJTRolHM\"",
		"mtime": "2026-08-13T09:08:28.159Z",
		"size": 32322,
		"path": "../public/figma/contact/footer-phone-text.svg"
	},
	"/images/figma-raw-13.png": {
		"type": "image/png",
		"etag": "\"27f2ce-nEgJZ/KPB8tGnTSaGLE5a7Mo7s8\"",
		"mtime": "2026-08-13T06:50:57.062Z",
		"size": 2618062,
		"path": "../public/images/figma-raw-13.png"
	},
	"/figma/contact/footer-stripe.png": {
		"type": "image/png",
		"etag": "\"132f-ZrJjDkZnO9zck2bYt8HxSyXu7SI\"",
		"mtime": "2026-08-13T09:08:25.909Z",
		"size": 4911,
		"path": "../public/figma/contact/footer-stripe.png"
	},
	"/figma/contact/location.png": {
		"type": "image/png",
		"etag": "\"a4e-2ZJOidzYlykjbA1l1h98mREucTk\"",
		"mtime": "2026-08-13T09:08:27.365Z",
		"size": 2638,
		"path": "../public/figma/contact/location.png"
	},
	"/figma/contact/logo-nav.png": {
		"type": "image/png",
		"etag": "\"2736-xu7ORYY1HkCWKGgnS97ubn406tg\"",
		"mtime": "2026-08-13T09:08:21.046Z",
		"size": 10038,
		"path": "../public/figma/contact/logo-nav.png"
	},
	"/figma/contact/menu.png": {
		"type": "image/png",
		"etag": "\"1bf-hos5AXGAmtE+3tUJ2hT1ZmPvm2M\"",
		"mtime": "2026-08-13T09:08:21.647Z",
		"size": 447,
		"path": "../public/figma/contact/menu.png"
	},
	"/figma/contact/nav-instagram.png": {
		"type": "image/png",
		"etag": "\"ce4-g9qk7Yz3Z1cmmsMgqNdpB9bJzus\"",
		"mtime": "2026-08-13T09:08:22.497Z",
		"size": 3300,
		"path": "../public/figma/contact/nav-instagram.png"
	},
	"/figma/contact/nav-youtube.png": {
		"type": "image/png",
		"etag": "\"905-3a5387Fm1+ZOmh/IWWqCDmKjOIY\"",
		"mtime": "2026-08-13T09:08:22.872Z",
		"size": 2309,
		"path": "../public/figma/contact/nav-youtube.png"
	},
	"/figma/contact/nav-linkedin.png": {
		"type": "image/png",
		"etag": "\"802-MG5Cs8NhbwhkW75h+vY4RMEVZ6w\"",
		"mtime": "2026-08-13T09:08:22.057Z",
		"size": 2050,
		"path": "../public/figma/contact/nav-linkedin.png"
	},
	"/figma/contact/phone.png": {
		"type": "image/png",
		"etag": "\"92c-XoC0QljYXMit2vh5IuCVHSyfnZI\"",
		"mtime": "2026-08-13T09:08:26.973Z",
		"size": 2348,
		"path": "../public/figma/contact/phone.png"
	},
	"/figma/contact/social-instagram.png": {
		"type": "image/png",
		"etag": "\"7bd-XzRPCTEk9OrXKI+VmyvjGtEhLoU\"",
		"mtime": "2026-08-13T09:08:23.720Z",
		"size": 1981,
		"path": "../public/figma/contact/social-instagram.png"
	},
	"/figma/contact/social-linkedin.png": {
		"type": "image/png",
		"etag": "\"489-IAAj02lbpyzRm6aCku6Qc1VI2xw\"",
		"mtime": "2026-08-13T09:08:23.341Z",
		"size": 1161,
		"path": "../public/figma/contact/social-linkedin.png"
	},
	"/figma/contact/social-youtube.png": {
		"type": "image/png",
		"etag": "\"6d5-7gCQ05M208jTje0+U8c79sX+hvk\"",
		"mtime": "2026-08-13T09:08:24.277Z",
		"size": 1749,
		"path": "../public/figma/contact/social-youtube.png"
	},
	"/figma/home/hero-about-orb.svg": {
		"type": "image/svg+xml",
		"etag": "\"ad6-tH1f7LI13IlDLli5kSHWfiwesGw\"",
		"mtime": "2026-08-03T07:29:34.845Z",
		"size": 2774,
		"path": "../public/figma/home/hero-about-orb.svg"
	},
	"/figma/home/hero-about-path.svg": {
		"type": "image/svg+xml",
		"etag": "\"202-E1BHPCG83DOvS5BsilW9fEfMLbA\"",
		"mtime": "2026-08-03T07:29:34.480Z",
		"size": 514,
		"path": "../public/figma/home/hero-about-path.svg"
	},
	"/figma/home/hero-ambition.svg": {
		"type": "image/svg+xml",
		"etag": "\"191d-Y7lsppawvNc1wT/M2Np2DQSU0NA\"",
		"mtime": "2026-08-03T06:58:31.360Z",
		"size": 6429,
		"path": "../public/figma/home/hero-ambition.svg"
	},
	"/figma/home/hero-engineering.svg": {
		"type": "image/svg+xml",
		"etag": "\"2656-MCFrwai/ROvO3kjzLY8FDCYGI8o\"",
		"mtime": "2026-08-03T06:58:29.937Z",
		"size": 9814,
		"path": "../public/figma/home/hero-engineering.svg"
	},
	"/figma/home/hero-digital-scale.svg": {
		"type": "image/svg+xml",
		"etag": "\"978b-WP1NrlPfVFo4s485T2TZzmAznqk\"",
		"mtime": "2026-08-03T06:58:30.479Z",
		"size": 38795,
		"path": "../public/figma/home/hero-digital-scale.svg"
	},
	"/figma/home/partners-arrows.svg": {
		"type": "image/svg+xml",
		"etag": "\"7ad-R5rmFex3Tnm+aYGMYMlnwBTVcAk\"",
		"mtime": "2026-10-12T10:45:25.820Z",
		"size": 1965,
		"path": "../public/figma/home/partners-arrows.svg"
	},
	"/figma/home/hero-systems.svg": {
		"type": "image/svg+xml",
		"etag": "\"1fe1-1oU1vTGcgKXqcz5F8AVhC/HhCfc\"",
		"mtime": "2026-08-03T06:58:30.933Z",
		"size": 8161,
		"path": "../public/figma/home/hero-systems.svg"
	},
	"/figma/home/partners-logo2.png": {
		"type": "image/png",
		"etag": "\"9d3d-1WLY9VIuTvziwe5vvV8dYqAooZQ\"",
		"mtime": "2026-10-12T10:45:25.282Z",
		"size": 40253,
		"path": "../public/figma/home/partners-logo2.png"
	},
	"/figma/industries/carousel-button.svg": {
		"type": "image/svg+xml",
		"etag": "\"799-QW5zVy/zHpYm09D0uYGLGbr5psY\"",
		"mtime": "2026-08-13T11:22:26.781Z",
		"size": 1945,
		"path": "../public/figma/industries/carousel-button.svg"
	},
	"/figma/industries/case-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"448-nW2bsSSliOgt6uusHfWJByE/6Kw\"",
		"mtime": "2026-08-13T11:22:25.866Z",
		"size": 1096,
		"path": "../public/figma/industries/case-arrow.svg"
	},
	"/figma/industries/corner-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"418-Nc2qqA234ZG7Qs6P3w1ik8BGnic\"",
		"mtime": "2026-08-13T11:27:33.073Z",
		"size": 1048,
		"path": "../public/figma/industries/corner-arrow.svg"
	},
	"/figma/industries/banking.png": {
		"type": "image/png",
		"etag": "\"6d56c-nxfXpCvsylH9bGTppACwJmkRPFM\"",
		"mtime": "2026-08-13T11:22:22.858Z",
		"size": 447852,
		"path": "../public/figma/industries/banking.png"
	},
	"/figma/industries/down-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"3d5-J4sqkIf8P9NdFuyfEkO649Chpvw\"",
		"mtime": "2026-08-13T11:27:34.103Z",
		"size": 981,
		"path": "../public/figma/industries/down-arrow.svg"
	},
	"/figma/partnership/asset-01.svg": {
		"type": "image/svg+xml",
		"etag": "\"31b-EfQmZldFeGUkvGytaEiaGJzLvxI\"",
		"mtime": "2026-08-21T06:56:00.424Z",
		"size": 795,
		"path": "../public/figma/partnership/asset-01.svg"
	},
	"/figma/partnership/asset-02.svg": {
		"type": "image/svg+xml",
		"etag": "\"368-qpRctM+Si1ZxIAike5DUFEiLfp8\"",
		"mtime": "2026-08-21T06:56:00.832Z",
		"size": 872,
		"path": "../public/figma/partnership/asset-02.svg"
	},
	"/figma/partnership/asset-04.svg": {
		"type": "image/svg+xml",
		"etag": "\"1e4a-kNZNX3L7y0NXh3jb7jD/MqdeT0Y\"",
		"mtime": "2026-08-21T06:56:01.561Z",
		"size": 7754,
		"path": "../public/figma/partnership/asset-04.svg"
	},
	"/figma/partnership/asset-03.svg": {
		"type": "image/svg+xml",
		"etag": "\"3e73-XvxI8kqL9Vp0cSO21PkldCbKuM4\"",
		"mtime": "2026-08-21T06:56:01.241Z",
		"size": 15987,
		"path": "../public/figma/partnership/asset-03.svg"
	},
	"/figma/partnership/asset-05.svg": {
		"type": "image/svg+xml",
		"etag": "\"36b-L3Nf+iBcbhiu2NCkdO0hnZwdRn4\"",
		"mtime": "2026-08-21T06:56:02.056Z",
		"size": 875,
		"path": "../public/figma/partnership/asset-05.svg"
	},
	"/figma/partnership/asset-07.svg": {
		"type": "image/svg+xml",
		"etag": "\"147-LdPdB5EMXrHeyI4BPmIEIH2jWrM\"",
		"mtime": "2026-08-21T06:56:02.791Z",
		"size": 327,
		"path": "../public/figma/partnership/asset-07.svg"
	},
	"/figma/home/collaborations-logos.png": {
		"type": "image/png",
		"etag": "\"122c41-M2Lm+aqM7nNDifSLIdQkze21pNQ\"",
		"mtime": "2026-10-12T10:51:30.004Z",
		"size": 1190977,
		"path": "../public/figma/home/collaborations-logos.png"
	},
	"/figma/partnership/asset-08.svg": {
		"type": "image/svg+xml",
		"etag": "\"364-Kv7TLIjUmc+iJ9WeoeMT4UXj7sY\"",
		"mtime": "2026-08-21T06:56:03.107Z",
		"size": 868,
		"path": "../public/figma/partnership/asset-08.svg"
	},
	"/figma/partnership/asset-06.svg": {
		"type": "image/svg+xml",
		"etag": "\"16f-qZfqE57uK9SuPzZWboMN2/Ygi/k\"",
		"mtime": "2026-08-21T06:56:02.373Z",
		"size": 367,
		"path": "../public/figma/partnership/asset-06.svg"
	},
	"/figma/partnership/asset-10.svg": {
		"type": "image/svg+xml",
		"etag": "\"293-iMGUWO/BmccV8SeZXhyKqHN3caU\"",
		"mtime": "2026-08-21T06:56:04.323Z",
		"size": 659,
		"path": "../public/figma/partnership/asset-10.svg"
	},
	"/figma/partnership/asset-11.svg": {
		"type": "image/svg+xml",
		"etag": "\"108-zbE9+OoDImJqM0P2VIi5EbirpA4\"",
		"mtime": "2026-08-21T06:56:04.639Z",
		"size": 264,
		"path": "../public/figma/partnership/asset-11.svg"
	},
	"/figma/partnership/asset-09.svg": {
		"type": "image/svg+xml",
		"etag": "\"7e65-FaCKyQbVDjDnRcjcDtYTcW4Pwc0\"",
		"mtime": "2026-08-21T06:56:03.706Z",
		"size": 32357,
		"path": "../public/figma/partnership/asset-09.svg"
	},
	"/figma/partnership/asset-13.svg": {
		"type": "image/svg+xml",
		"etag": "\"784-T1Jw4pWIEHQy8uSXQYCsRgcKFMI\"",
		"mtime": "2026-08-21T06:56:05.641Z",
		"size": 1924,
		"path": "../public/figma/partnership/asset-13.svg"
	},
	"/figma/partnership/asset-12.svg": {
		"type": "image/svg+xml",
		"etag": "\"390-oqdscysr7t4xyiLTZGe+BtVQv/Q\"",
		"mtime": "2026-08-21T06:56:05.005Z",
		"size": 912,
		"path": "../public/figma/partnership/asset-12.svg"
	},
	"/figma/partnership/asset-14.svg": {
		"type": "image/svg+xml",
		"etag": "\"642f-ZAZO8Nl9CAU/Obg76ijAFLCZyjo\"",
		"mtime": "2026-08-21T06:56:06.238Z",
		"size": 25647,
		"path": "../public/figma/partnership/asset-14.svg"
	},
	"/figma/partnership/raw-01.png": {
		"type": "image/png",
		"etag": "\"a4e-2ZJOidzYlykjbA1l1h98mREucTk\"",
		"mtime": "2026-08-21T06:55:09.599Z",
		"size": 2638,
		"path": "../public/figma/partnership/raw-01.png"
	},
	"/figma/partnership/raw-02.png": {
		"type": "image/png",
		"etag": "\"3c85-v6dGd25YC0/s82cP9YZh4va2YCs\"",
		"mtime": "2026-08-21T06:55:10.065Z",
		"size": 15493,
		"path": "../public/figma/partnership/raw-02.png"
	},
	"/figma/partnership/raw-03.png": {
		"type": "image/png",
		"etag": "\"700-PVSS/OEp8EftUS4yWRq7RsyavQw\"",
		"mtime": "2026-08-21T06:55:10.453Z",
		"size": 1792,
		"path": "../public/figma/partnership/raw-03.png"
	},
	"/figma/partnership/raw-04.png": {
		"type": "image/png",
		"etag": "\"499-o92QakEimrqO6/JLGg1Q+IgsSQU\"",
		"mtime": "2026-08-21T06:55:11.040Z",
		"size": 1177,
		"path": "../public/figma/partnership/raw-04.png"
	},
	"/figma/partnership/raw-05.png": {
		"type": "image/png",
		"etag": "\"489-IAAj02lbpyzRm6aCku6Qc1VI2xw\"",
		"mtime": "2026-08-21T06:55:11.411Z",
		"size": 1161,
		"path": "../public/figma/partnership/raw-05.png"
	},
	"/figma/partnership/raw-07.png": {
		"type": "image/png",
		"etag": "\"626-XEu4z43JZPqXTspa36Nmi6MnDn8\"",
		"mtime": "2026-08-21T06:55:12.223Z",
		"size": 1574,
		"path": "../public/figma/partnership/raw-07.png"
	},
	"/figma/partnership/raw-06.png": {
		"type": "image/png",
		"etag": "\"7553-Fgy/m1rL7CBiFfoXvqjn7XHcUyM\"",
		"mtime": "2026-08-21T06:55:11.772Z",
		"size": 30035,
		"path": "../public/figma/partnership/raw-06.png"
	},
	"/figma/partnership/raw-08.png": {
		"type": "image/png",
		"etag": "\"478-lgYL5X+PoFbOPBysn2HgRHOBltM\"",
		"mtime": "2026-08-21T06:55:12.572Z",
		"size": 1144,
		"path": "../public/figma/partnership/raw-08.png"
	},
	"/figma/partnership/figma-export.png": {
		"type": "image/png",
		"etag": "\"de7f8-8sjrdL2ljzZPoedJ9vdT62ahYy4\"",
		"mtime": "2026-08-21T06:52:17.644Z",
		"size": 911352,
		"path": "../public/figma/partnership/figma-export.png"
	},
	"/figma/partnership/raw-09.png": {
		"type": "image/png",
		"etag": "\"1c4e2-sZqyOI+758nkZunajpXh7JoEsoM\"",
		"mtime": "2026-08-21T06:55:13.638Z",
		"size": 115938,
		"path": "../public/figma/partnership/raw-09.png"
	},
	"/figma/partnership/raw-10.png": {
		"type": "image/png",
		"etag": "\"4197-5PaSDdSPmsI8bZuUFrbsNKLEhlM\"",
		"mtime": "2026-08-21T06:55:14.022Z",
		"size": 16791,
		"path": "../public/figma/partnership/raw-10.png"
	},
	"/figma/partnership/raw-11.png": {
		"type": "image/png",
		"etag": "\"398-99uefm/FHCH4k9q3t+Q3vnBkITs\"",
		"mtime": "2026-08-21T06:55:14.671Z",
		"size": 920,
		"path": "../public/figma/partnership/raw-11.png"
	},
	"/figma/partnership/raw-14.png": {
		"type": "image/png",
		"etag": "\"152-h7wb2DO8x/REA9T/S9a+uWIL+O4\"",
		"mtime": "2026-08-21T06:55:15.770Z",
		"size": 338,
		"path": "../public/figma/partnership/raw-14.png"
	},
	"/figma/partnership/raw-13.png": {
		"type": "image/png",
		"etag": "\"92c-XoC0QljYXMit2vh5IuCVHSyfnZI\"",
		"mtime": "2026-08-21T06:55:15.404Z",
		"size": 2348,
		"path": "../public/figma/partnership/raw-13.png"
	},
	"/figma/partnership/raw-12.png": {
		"type": "image/png",
		"etag": "\"5ad-HMZJCeBEys5Ji+URYK6h+BBbpss\"",
		"mtime": "2026-08-21T06:55:15.038Z",
		"size": 1453,
		"path": "../public/figma/partnership/raw-12.png"
	},
	"/figma/partnership/raw-15.png": {
		"type": "image/png",
		"etag": "\"132f-ZrJjDkZnO9zck2bYt8HxSyXu7SI\"",
		"mtime": "2026-08-21T06:55:16.122Z",
		"size": 4911,
		"path": "../public/figma/partnership/raw-15.png"
	},
	"/figma/partnership/raw-16.png": {
		"type": "image/png",
		"etag": "\"7bd-XzRPCTEk9OrXKI+VmyvjGtEhLoU\"",
		"mtime": "2026-08-21T06:55:16.490Z",
		"size": 1981,
		"path": "../public/figma/partnership/raw-16.png"
	},
	"/figma/partnership/raw-17.png": {
		"type": "image/png",
		"etag": "\"6d5-7gCQ05M208jTje0+U8c79sX+hvk\"",
		"mtime": "2026-08-21T06:55:16.970Z",
		"size": 1749,
		"path": "../public/figma/partnership/raw-17.png"
	},
	"/figma/home/reseller-cards/anydesk.png": {
		"type": "image/png",
		"etag": "\"20262-52LymzZpIKni/0dxyvKMt5yaFnM\"",
		"mtime": "2026-10-12T12:12:25.436Z",
		"size": 131682,
		"path": "../public/figma/home/reseller-cards/anydesk.png"
	},
	"/figma/home/reseller-cards/salesforce.png": {
		"type": "image/png",
		"etag": "\"1690b-Y95lbxjHzsFR/2SDFfBPwvhxYX0\"",
		"mtime": "2026-10-12T12:12:25.495Z",
		"size": 92427,
		"path": "../public/figma/home/reseller-cards/salesforce.png"
	},
	"/figma/home/reseller-cards/sap.png": {
		"type": "image/png",
		"etag": "\"17059-RbKd2PI1f3BO1n68+LGNwFvDKkU\"",
		"mtime": "2026-10-12T12:12:25.376Z",
		"size": 94297,
		"path": "../public/figma/home/reseller-cards/sap.png"
	},
	"/figma/home/reseller-cards/manageengine.png": {
		"type": "image/png",
		"etag": "\"17ef9-zk1fNEZVBjO6BdpdsmcGBwKWe2A\"",
		"mtime": "2026-10-12T12:12:25.554Z",
		"size": 98041,
		"path": "../public/figma/home/reseller-cards/manageengine.png"
	},
	"/figma/home/reseller-cards/zoho.png": {
		"type": "image/png",
		"etag": "\"12e17-l3RLcBo99GI9OGpMwfkiw+ds/iU\"",
		"mtime": "2026-10-13T08:45:30.596Z",
		"size": 77335,
		"path": "../public/figma/home/reseller-cards/zoho.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_QUFYEI = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_QUFYEI
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
