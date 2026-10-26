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
	"/1dox.ai 1.png": {
		"type": "image/png",
		"etag": "\"18b94-kquPfdjKhKHUMIQE7+BCAed+HdY\"",
		"mtime": "2026-07-31T05:48:43.201Z",
		"size": 101268,
		"path": "../public/1dox.ai 1.png"
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
	"/asteri logo footer.jpeg": {
		"type": "image/jpeg",
		"etag": "\"40ee-tx3VhuTZcs1koo86oC3lHphGjnk\"",
		"mtime": "2026-09-29T12:09:29.889Z",
		"size": 16622,
		"path": "../public/asteri logo footer.jpeg"
	},
	"/Asteri logo for footer.svg": {
		"type": "image/svg+xml",
		"etag": "\"638-3vx3gbkoIPjLEroCcxmTsqNXUT4\"",
		"mtime": "2026-07-31T05:48:43.336Z",
		"size": 1592,
		"path": "../public/Asteri logo for footer.svg"
	},
	"/Automation.jpg": {
		"type": "image/jpeg",
		"etag": "\"17063-8iFLp0w+vVZpsZ/yj4Azugz0U5A\"",
		"mtime": "2026-07-31T05:48:43.377Z",
		"size": 94307,
		"path": "../public/Automation.jpg"
	},
	"/Asteri logo.png": {
		"type": "image/png",
		"etag": "\"6aa8-pijoXt961fGekrNzz3K5l9QRXuM\"",
		"mtime": "2026-07-31T05:48:43.355Z",
		"size": 27304,
		"path": "../public/Asteri logo.png"
	},
	"/anydesk.png": {
		"type": "image/png",
		"etag": "\"8496-0gmXobyOiHHwNax99cj+tOSTUs4\"",
		"mtime": "2026-07-31T05:48:43.297Z",
		"size": 33942,
		"path": "../public/anydesk.png"
	},
	"/Asteri Animated Logo.mp4": {
		"type": "video/mp4",
		"etag": "\"23df6-spNvHUofaWdFV1l2LG6utY41Ddk\"",
		"mtime": "2026-07-31T05:48:43.313Z",
		"size": 146934,
		"path": "../public/Asteri Animated Logo.mp4"
	},
	"/aws logo.png": {
		"type": "image/png",
		"etag": "\"3b4a-3uaZLwyWWDjf5AebYSREvOcFsvQ\"",
		"mtime": "2026-07-31T05:48:43.443Z",
		"size": 15178,
		"path": "../public/aws logo.png"
	},
	"/Container.jpg": {
		"type": "image/jpeg",
		"etag": "\"18d93-aFbGvzq8l0e5AuIic9LSfPie7ig\"",
		"mtime": "2026-07-31T05:48:43.464Z",
		"size": 101779,
		"path": "../public/Container.jpg"
	},
	"/Geist-Black.otf": {
		"type": "font/otf",
		"etag": "\"28fd8-D2K1m/4Cod6MPCvy/QzUeOWzuXw\"",
		"mtime": "2026-07-31T05:48:43.482Z",
		"size": 167896,
		"path": "../public/Geist-Black.otf"
	},
	"/Geist-BlackItalic.otf": {
		"type": "font/otf",
		"etag": "\"28c64-U4aHSwzEanEESZ1Pc/hUmDTX8WE\"",
		"mtime": "2026-07-31T05:48:43.502Z",
		"size": 167012,
		"path": "../public/Geist-BlackItalic.otf"
	},
	"/Geist-BoldItalic.otf": {
		"type": "font/otf",
		"etag": "\"290a0-kci6asLvKx5JawzJfW0fSoK2/Rc\"",
		"mtime": "2026-07-31T05:48:43.537Z",
		"size": 168096,
		"path": "../public/Geist-BoldItalic.otf"
	},
	"/Geist-Bold.otf": {
		"type": "font/otf",
		"etag": "\"28a74-iTb9ISd7gfmVfe0xZG0Dd+Kn1V4\"",
		"mtime": "2026-07-31T05:48:43.520Z",
		"size": 166516,
		"path": "../public/Geist-Bold.otf"
	},
	"/Geist-ExtraBold.otf": {
		"type": "font/otf",
		"etag": "\"28f30-IC8fnKejwltBxdJkbRGOGbIhoQs\"",
		"mtime": "2026-07-31T05:48:43.556Z",
		"size": 167728,
		"path": "../public/Geist-ExtraBold.otf"
	},
	"/Geist-ExtraBoldItalic.otf": {
		"type": "font/otf",
		"etag": "\"29344-TC3kWEKA9JA51fxHFvR0DvW+1HM\"",
		"mtime": "2026-07-31T05:48:43.573Z",
		"size": 168772,
		"path": "../public/Geist-ExtraBoldItalic.otf"
	},
	"/Geist-ExtraLight.otf": {
		"type": "font/otf",
		"etag": "\"272dc-eOc5qcWQaTs8iGhGf11X51Iy/Ic\"",
		"mtime": "2026-07-31T05:48:43.592Z",
		"size": 160476,
		"path": "../public/Geist-ExtraLight.otf"
	},
	"/Geist-ExtraLightItalic.otf": {
		"type": "font/otf",
		"etag": "\"27b74-zzIpJMgC/75+G+q27EJE0+PrpWs\"",
		"mtime": "2026-07-31T05:48:43.611Z",
		"size": 162676,
		"path": "../public/Geist-ExtraLightItalic.otf"
	},
	"/Geist-Italic.otf": {
		"type": "font/otf",
		"etag": "\"27200-OgeGNb/fxkjmGNrtY84qfYpDlGU\"",
		"mtime": "2026-07-31T05:48:43.630Z",
		"size": 160256,
		"path": "../public/Geist-Italic.otf"
	},
	"/Geist-Light.otf": {
		"type": "font/otf",
		"etag": "\"26f88-7P5A+qhIBKyYnZjgm8k3zunI+EA\"",
		"mtime": "2026-07-31T05:48:43.648Z",
		"size": 159624,
		"path": "../public/Geist-Light.otf"
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
	"/Geist-LightItalic.otf": {
		"type": "font/otf",
		"etag": "\"276cc-i6jDiB3JjfTMiMyVLhwL1DoJkyg\"",
		"mtime": "2026-07-31T05:48:43.665Z",
		"size": 161484,
		"path": "../public/Geist-LightItalic.otf"
	},
	"/Geist-Medium.otf": {
		"type": "font/otf",
		"etag": "\"27a00-bLEyGQ6y3wiJbMxR5LcS/rPVoxY\"",
		"mtime": "2026-07-31T05:48:43.684Z",
		"size": 162304,
		"path": "../public/Geist-Medium.otf"
	},
	"/Geist-MediumItalic.otf": {
		"type": "font/otf",
		"etag": "\"28284-rqwfQd8jaKCEKXPXB6WlUyEn9T8\"",
		"mtime": "2026-07-31T05:48:43.701Z",
		"size": 164484,
		"path": "../public/Geist-MediumItalic.otf"
	},
	"/Geist-Regular.otf": {
		"type": "font/otf",
		"etag": "\"26744-PG3rot/y6btqwJEQ4qvexakXGCc\"",
		"mtime": "2026-07-31T05:48:43.719Z",
		"size": 157508,
		"path": "../public/Geist-Regular.otf"
	},
	"/Geist-SemiBold.otf": {
		"type": "font/otf",
		"etag": "\"283ac-T8+oO4vwnCG1szZpASDYuOEgqoY\"",
		"mtime": "2026-07-31T05:48:43.736Z",
		"size": 164780,
		"path": "../public/Geist-SemiBold.otf"
	},
	"/Geist-SemiBoldItalic.otf": {
		"type": "font/otf",
		"etag": "\"28aac-Re5Rwjz8uv7EJUozSkWc4HaQvI8\"",
		"mtime": "2026-07-31T05:48:43.754Z",
		"size": 166572,
		"path": "../public/Geist-SemiBoldItalic.otf"
	},
	"/Geist-Thin.otf": {
		"type": "font/otf",
		"etag": "\"269fc-Yf9TRWPxYDaYBxST8JcjYMDbIEk\"",
		"mtime": "2026-07-31T05:48:43.772Z",
		"size": 158204,
		"path": "../public/Geist-Thin.otf"
	},
	"/Geist-ThinItalic.otf": {
		"type": "font/otf",
		"etag": "\"272e8-0DTSKUz2sbaFAJn6PtfjeLZ+OnE\"",
		"mtime": "2026-07-31T05:48:43.788Z",
		"size": 160488,
		"path": "../public/Geist-ThinItalic.otf"
	},
	"/GeistMono-Black.otf": {
		"type": "font/otf",
		"etag": "\"2c22c-HEfABefIJrjR/hHy74QztVuJrLo\"",
		"mtime": "2026-07-31T05:48:43.807Z",
		"size": 180780,
		"path": "../public/GeistMono-Black.otf"
	},
	"/GeistMono-BlackItalic.otf": {
		"type": "font/otf",
		"etag": "\"2c40c-x21xGlf1XhYuIu5mAuQeUB3YV+0\"",
		"mtime": "2026-07-31T05:48:43.824Z",
		"size": 181260,
		"path": "../public/GeistMono-BlackItalic.otf"
	},
	"/GeistMono-Bold.otf": {
		"type": "font/otf",
		"etag": "\"2c128-lJ8OAVoA09CiNWoxYvfnZw8IAU4\"",
		"mtime": "2026-07-31T05:48:43.842Z",
		"size": 180520,
		"path": "../public/GeistMono-Bold.otf"
	},
	"/GeistMono-BoldItalic.otf": {
		"type": "font/otf",
		"etag": "\"2c388-8kqW/+STyO9VvUr2deN55m7KvQA\"",
		"mtime": "2026-07-31T05:48:43.860Z",
		"size": 181128,
		"path": "../public/GeistMono-BoldItalic.otf"
	},
	"/GeistMono-ExtraBold.otf": {
		"type": "font/otf",
		"etag": "\"2c498-6U52mm4/S7luLTyv2IQTQXusX8w\"",
		"mtime": "2026-07-31T05:48:43.878Z",
		"size": 181400,
		"path": "../public/GeistMono-ExtraBold.otf"
	},
	"/GeistMono-ExtraBoldItalic.otf": {
		"type": "font/otf",
		"etag": "\"2ca68-D2Dj2XpaAX9eWHTe7a30dHiTzf0\"",
		"mtime": "2026-07-31T05:48:43.896Z",
		"size": 182888,
		"path": "../public/GeistMono-ExtraBoldItalic.otf"
	},
	"/GeistMono-ExtraLight.otf": {
		"type": "font/otf",
		"etag": "\"2ab1c-HBu5PXYDP2u7gZhl9jEhYgI+6go\"",
		"mtime": "2026-07-31T05:48:43.914Z",
		"size": 174876,
		"path": "../public/GeistMono-ExtraLight.otf"
	},
	"/GeistMono-ExtraLightItalic.otf": {
		"type": "font/otf",
		"etag": "\"2b048-15kKPeGYtZCT8voMdbKkfdJxu6k\"",
		"mtime": "2026-07-31T05:48:43.932Z",
		"size": 176200,
		"path": "../public/GeistMono-ExtraLightItalic.otf"
	},
	"/GeistMono-Italic.otf": {
		"type": "font/otf",
		"etag": "\"2accc-gkaZi+ri0TLKP7KpuGWHu6SseTA\"",
		"mtime": "2026-07-31T05:48:43.950Z",
		"size": 175308,
		"path": "../public/GeistMono-Italic.otf"
	},
	"/GeistMono-Light.otf": {
		"type": "font/otf",
		"etag": "\"2a91c-8LckNSOb9po7dpoK2/a/qmqS3DM\"",
		"mtime": "2026-07-31T05:48:43.967Z",
		"size": 174364,
		"path": "../public/GeistMono-Light.otf"
	},
	"/GeistMono-LightItalic.otf": {
		"type": "font/otf",
		"etag": "\"2aef0-nE37Q/0GPvlDae0+CmGzKdBb/yo\"",
		"mtime": "2026-07-31T05:48:43.985Z",
		"size": 175856,
		"path": "../public/GeistMono-LightItalic.otf"
	},
	"/GeistMono-Medium.otf": {
		"type": "font/otf",
		"etag": "\"2ab34-XUsVcNeDQ9Z+kE3tn85PNj/hoX8\"",
		"mtime": "2026-07-31T05:48:44.004Z",
		"size": 174900,
		"path": "../public/GeistMono-Medium.otf"
	},
	"/GeistMono-MediumItalic.otf": {
		"type": "font/otf",
		"etag": "\"2b3cc-geeRtepMEIreES6QY6iZgKCfVeI\"",
		"mtime": "2026-07-31T05:48:44.021Z",
		"size": 177100,
		"path": "../public/GeistMono-MediumItalic.otf"
	},
	"/GeistMono-Regular.otf": {
		"type": "font/otf",
		"etag": "\"2a39c-4Hwt6/XyiGvIRKfwSH+pygajtgE\"",
		"mtime": "2026-07-31T05:48:44.038Z",
		"size": 172956,
		"path": "../public/GeistMono-Regular.otf"
	},
	"/GeistMono-SemiBold.otf": {
		"type": "font/otf",
		"etag": "\"2b850-tgtCqThWJcT62nI6Xc9JdrHTK3A\"",
		"mtime": "2026-07-31T05:48:44.058Z",
		"size": 178256,
		"path": "../public/GeistMono-SemiBold.otf"
	},
	"/GeistMono-SemiBoldItalic.otf": {
		"type": "font/otf",
		"etag": "\"2bc20-nF4+EOOo27KtqsSpSJTPfqc/GQE\"",
		"mtime": "2026-07-31T05:48:44.076Z",
		"size": 179232,
		"path": "../public/GeistMono-SemiBoldItalic.otf"
	},
	"/GeistMono-ThinItalic.otf": {
		"type": "font/otf",
		"etag": "\"2aa28-v2e378Jm2lilcZESEeU5RJbYZ0c\"",
		"mtime": "2026-07-31T05:48:44.112Z",
		"size": 174632,
		"path": "../public/GeistMono-ThinItalic.otf"
	},
	"/hero-line.svg": {
		"type": "image/svg+xml",
		"etag": "\"fa-aNCycD/UMLxhjhW5ryW1YUxg1wE\"",
		"mtime": "2026-09-23T09:41:53.191Z",
		"size": 250,
		"path": "../public/hero-line.svg"
	},
	"/hero-orb.svg": {
		"type": "image/svg+xml",
		"etag": "\"b1c-xMvkbnkkq5VuSPlZqNpBTy3y2KM\"",
		"mtime": "2026-09-23T09:41:52.806Z",
		"size": 2844,
		"path": "../public/hero-orb.svg"
	},
	"/Image Placeholder (1).jpg": {
		"type": "image/jpeg",
		"etag": "\"16738-2C8M3u6S5zO0zreuCYPQXl+sisE\"",
		"mtime": "2026-07-31T05:48:44.136Z",
		"size": 91960,
		"path": "../public/Image Placeholder (1).jpg"
	},
	"/Image Placeholder (2).jpg": {
		"type": "image/jpeg",
		"etag": "\"264be-VMTKp2jTYKQg3zAIbGq88mQbbw4\"",
		"mtime": "2026-07-31T05:48:44.160Z",
		"size": 156862,
		"path": "../public/Image Placeholder (2).jpg"
	},
	"/ManageEngine logo.png": {
		"type": "image/png",
		"etag": "\"5084-TCdtQZuv2EsZuVU5NbdV7WkMgTo\"",
		"mtime": "2026-07-31T05:48:44.203Z",
		"size": 20612,
		"path": "../public/ManageEngine logo.png"
	},
	"/Salesforce.png": {
		"type": "image/png",
		"etag": "\"558d-knDgWppIGTxAR9Q4RTYtlWe07uU\"",
		"mtime": "2026-07-31T05:48:44.244Z",
		"size": 21901,
		"path": "../public/Salesforce.png"
	},
	"/sap logo.png": {
		"type": "image/png",
		"etag": "\"3148-Dk3+tcGrZEaOpMfemp4/RQoDRr4\"",
		"mtime": "2026-07-31T05:48:44.265Z",
		"size": 12616,
		"path": "../public/sap logo.png"
	},
	"/Image Placeholder.jpg": {
		"type": "image/jpeg",
		"etag": "\"30bda-qrOAgbOBUqtiWpuJgT1ZoWvfRmE\"",
		"mtime": "2026-07-31T05:48:44.183Z",
		"size": 199642,
		"path": "../public/Image Placeholder.jpg"
	},
	"/Shipsy_Logo 1.png": {
		"type": "image/png",
		"etag": "\"f880-zcPXEWby1GkY+mwdd1V24zrOues\"",
		"mtime": "2026-07-31T05:48:44.309Z",
		"size": 63616,
		"path": "../public/Shipsy_Logo 1.png"
	},
	"/savex.png": {
		"type": "image/png",
		"etag": "\"1cb00-g1tgWRPg9f52KkO/fpb4LkxB+vQ\"",
		"mtime": "2026-07-31T05:48:44.287Z",
		"size": 117504,
		"path": "../public/savex.png"
	},
	"/plsql.png": {
		"type": "image/png",
		"etag": "\"bae8-p5N0TMVM/P4K6vph4A1lSDiioao\"",
		"mtime": "2026-07-31T05:48:44.223Z",
		"size": 47848,
		"path": "../public/plsql.png"
	},
	"/thinkcell.png": {
		"type": "image/png",
		"etag": "\"6783-iWiotWwggxXg1gnauPjrmuIgt8w\"",
		"mtime": "2026-07-31T05:48:44.349Z",
		"size": 26499,
		"path": "../public/thinkcell.png"
	},
	"/Vector.png": {
		"type": "image/png",
		"etag": "\"135cf-NCg2sZ6LOO82Nj1bfh8UXCCtcB8\"",
		"mtime": "2026-07-31T05:48:44.369Z",
		"size": 79311,
		"path": "../public/Vector.png"
	},
	"/GeistMono-Thin.otf": {
		"type": "font/otf",
		"etag": "\"2a520-UDALtIb30yXftRZJ2WXf6WHgWgg\"",
		"mtime": "2026-07-31T05:48:44.095Z",
		"size": 173344,
		"path": "../public/GeistMono-Thin.otf"
	},
	"/System Architecture.jpg": {
		"type": "image/jpeg",
		"etag": "\"17e9f-W4mn4x19NTFQ2jNJvLT47vIwnAU\"",
		"mtime": "2026-07-31T05:48:44.330Z",
		"size": 97951,
		"path": "../public/System Architecture.jpg"
	},
	"/zionit.png": {
		"type": "image/png",
		"etag": "\"a9df-avxiCUoYx7LKUhJYftF2QY/vQzE\"",
		"mtime": "2026-07-31T05:48:44.436Z",
		"size": 43487,
		"path": "../public/zionit.png"
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
	"/about/approach-discovery.png": {
		"type": "image/png",
		"etag": "\"1dd2-/K9podNwZ7zbweIIzej/6uITANY\"",
		"mtime": "2026-08-04T06:38:21.419Z",
		"size": 7634,
		"path": "../public/about/approach-discovery.png"
	},
	"/about/approach-discovery.svg": {
		"type": "image/svg+xml",
		"etag": "\"589-X0f0qnKM2lgFQQ8dxxPvhRUh3LE\"",
		"mtime": "2026-09-15T08:03:43.804Z",
		"size": 1417,
		"path": "../public/about/approach-discovery.svg"
	},
	"/about/approach-support.png": {
		"type": "image/png",
		"etag": "\"1dd1-e3H52HjvA9uACcpYWXfSr0uxUAE\"",
		"mtime": "2026-08-04T06:38:22.963Z",
		"size": 7633,
		"path": "../public/about/approach-support.png"
	},
	"/about/approach-team.png": {
		"type": "image/png",
		"etag": "\"18f5-ZVoESLVebr4d2NO/u2TYgPkcuUc\"",
		"mtime": "2026-08-04T06:38:20.976Z",
		"size": 6389,
		"path": "../public/about/approach-team.png"
	},
	"/about/cta-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"3d4-F2MIVjjs7o+FdoRLoKInry/Uagc\"",
		"mtime": "2026-08-04T06:38:22.171Z",
		"size": 980,
		"path": "../public/about/cta-arrow.svg"
	},
	"/about/final-glow.svg": {
		"type": "image/svg+xml",
		"etag": "\"3ca-cBzJPIkyoC5Ex2U3zZ7K1+4obXc\"",
		"mtime": "2026-08-04T06:38:22.547Z",
		"size": 970,
		"path": "../public/about/final-glow.svg"
	},
	"/about/mission-goal.png": {
		"type": "image/png",
		"etag": "\"34f0-ELXpAk8shMlMIlvehPhM8PTtsG0\"",
		"mtime": "2026-08-04T06:38:23.776Z",
		"size": 13552,
		"path": "../public/about/mission-goal.png"
	},
	"/about/hero-path.svg": {
		"type": "image/svg+xml",
		"etag": "\"348-eJPYqLVch49R1WjVJiRlb90ogOs\"",
		"mtime": "2026-08-04T06:38:18.525Z",
		"size": 840,
		"path": "../public/about/hero-path.svg"
	},
	"/about/orb.svg": {
		"type": "image/svg+xml",
		"etag": "\"824-pPtv+Y12ZtOzyLh4anJHCZEJVEA\"",
		"mtime": "2026-08-04T06:38:21.799Z",
		"size": 2084,
		"path": "../public/about/orb.svg"
	},
	"/assets/about-BZplbgJW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e07-xbyz51i0ezd54MsVaqiEKU1ziY4\"",
		"mtime": "2026-10-26T06:07:08.559Z",
		"size": 32263,
		"path": "../public/assets/about-BZplbgJW.js"
	},
	"/about/visionary-circle.svg": {
		"type": "image/svg+xml",
		"etag": "\"1d3-gRa1LWRH/m+somX6NHvmsh/DkzU\"",
		"mtime": "2026-08-04T06:38:24.151Z",
		"size": 467,
		"path": "../public/about/visionary-circle.svg"
	},
	"/assets/blog-CZRORpxs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20dd-ym9wgNWF/M2BNG9XaFBH7KGDD/w\"",
		"mtime": "2026-10-26T06:07:08.560Z",
		"size": 8413,
		"path": "../public/assets/blog-CZRORpxs.js"
	},
	"/assets/case-studies-CVvyjwTv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e7-bh7QlEtbpwNfOY94cfE5Qonr7Xg\"",
		"mtime": "2026-10-26T06:07:08.560Z",
		"size": 6119,
		"path": "../public/assets/case-studies-CVvyjwTv.js"
	},
	"/about/vision.png": {
		"type": "image/png",
		"etag": "\"230b-yzLoQJDENgV709byEHLxBXj2bv8\"",
		"mtime": "2026-08-04T06:38:19.058Z",
		"size": 8971,
		"path": "../public/about/vision.png"
	},
	"/assets/cloud-solutions-VYGTXseP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-Ho7Wq9npzxGMJXu8IpTnQkZGPXY\"",
		"mtime": "2026-10-26T06:07:08.561Z",
		"size": 442,
		"path": "../public/assets/cloud-solutions-VYGTXseP.js"
	},
	"/What we do.png": {
		"type": "image/png",
		"etag": "\"1ad1d4-d08+zL9xspdZA2W9fwcmaCp/QE0\"",
		"mtime": "2026-07-31T05:48:44.415Z",
		"size": 1757652,
		"path": "../public/What we do.png"
	},
	"/assets/contact-DnlkcYh3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1688-H/1zcHjC+2ArXOT6RLF7SECMeHU\"",
		"mtime": "2026-10-26T06:07:08.561Z",
		"size": 5768,
		"path": "../public/assets/contact-DnlkcYh3.js"
	},
	"/assets/data-science-B4p5Gnxt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-Ke1I7OoXeQfbAhLnvVHfBnt0/Zo\"",
		"mtime": "2026-10-26T06:07:08.561Z",
		"size": 442,
		"path": "../public/assets/data-science-B4p5Gnxt.js"
	},
	"/about/visionary-avinash.png": {
		"type": "image/png",
		"etag": "\"63597-+qxILIfvyP84ye+WPaNUK4XSG7Y\"",
		"mtime": "2026-08-04T06:38:20.567Z",
		"size": 406935,
		"path": "../public/about/visionary-avinash.png"
	},
	"/assets/geist-sans-latin-600-normal-CA1yjETN.woff": {
		"type": "font/woff",
		"etag": "\"a0f4-w6YmFho8VLjQDd/wDVi5ErjS+5Q\"",
		"mtime": "2026-10-26T06:07:08.569Z",
		"size": 41204,
		"path": "../public/assets/geist-sans-latin-600-normal-CA1yjETN.woff"
	},
	"/assets/geist-sans-latin-600-normal-DFOURf8L.woff2": {
		"type": "font/woff2",
		"etag": "\"89dc-kV6faIqiry/+WygSKW3lfDcID2s\"",
		"mtime": "2026-10-26T06:07:08.569Z",
		"size": 35292,
		"path": "../public/assets/geist-sans-latin-600-normal-DFOURf8L.woff2"
	},
	"/assets/industries-DomWEZST.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"342b-CrCRP2cWcIWYL+eWHf3OwO9v4ZU\"",
		"mtime": "2026-10-26T06:07:08.562Z",
		"size": 13355,
		"path": "../public/assets/industries-DomWEZST.js"
	},
	"/assets/matchContext-CTXRldbq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c8-bxZD7eO8Joixzsx5IEZrPWg1cec\"",
		"mtime": "2026-10-26T06:07:08.562Z",
		"size": 712,
		"path": "../public/assets/matchContext-CTXRldbq.js"
	},
	"/assets/index-DkbLnPcj.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"164d6-DdfOA8NZcuKFp2GWyRJdWRibKQI\"",
		"mtime": "2026-10-26T06:07:08.569Z",
		"size": 91350,
		"path": "../public/assets/index-DkbLnPcj.css"
	},
	"/assets/PageShell-CLfI9mps.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c7-xolxAPT9aKFKeS/LizTdzFdSjvM\"",
		"mtime": "2026-10-26T06:07:08.558Z",
		"size": 4295,
		"path": "../public/assets/PageShell-CLfI9mps.js"
	},
	"/assets/index-DSHvWmhD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d481-pECam1C5Lo9on1Fnu6HXAemXWyo\"",
		"mtime": "2026-10-26T06:07:08.550Z",
		"size": 316545,
		"path": "../public/assets/index-DSHvWmhD.js"
	},
	"/assets/partnership-C0b1p9_8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2503-o84a95uler36G8u163JCoSeNIm8\"",
		"mtime": "2026-10-26T06:07:08.562Z",
		"size": 9475,
		"path": "../public/assets/partnership-C0b1p9_8.js"
	},
	"/assets/MotionPathPlugin-C272RmBM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22863-xntvD187iGfwCWjOmixSmq3eF5M\"",
		"mtime": "2026-10-26T06:07:08.557Z",
		"size": 141411,
		"path": "../public/assets/MotionPathPlugin-C272RmBM.js"
	},
	"/assets/products-BtdXSklc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"636d-qVyAva4Cxya2ZeVkQvJ2TUFIogI\"",
		"mtime": "2026-10-26T06:07:08.562Z",
		"size": 25453,
		"path": "../public/assets/products-BtdXSklc.js"
	},
	"/assets/Footer-BhkSIaI8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96621-jSg8cqwK6O19d6jZNv2kUizbemA\"",
		"mtime": "2026-10-26T06:07:08.550Z",
		"size": 615969,
		"path": "../public/assets/Footer-BhkSIaI8.js"
	},
	"/assets/routes-DBsBB08V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ed9-dUj+E75w5bCp8m9MQVDcbo11/OM\"",
		"mtime": "2026-10-26T06:07:08.564Z",
		"size": 32473,
		"path": "../public/assets/routes-DBsBB08V.js"
	},
	"/assets/salesforce-BgB3WcGo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29e4-aUWQBRXGNZ22rSwRcTMe6uVRuNo\"",
		"mtime": "2026-10-26T06:07:08.564Z",
		"size": 10724,
		"path": "../public/assets/salesforce-BgB3WcGo.js"
	},
	"/assets/sap-consulting-BGqIkau3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f1-asxRe5sIdVGAC1NhAlRKdHE/S9U\"",
		"mtime": "2026-10-26T06:07:08.564Z",
		"size": 497,
		"path": "../public/assets/sap-consulting-BGqIkau3.js"
	},
	"/assets/ServiceDetailPage-BsaIxYuM.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"410-vIS+jnP1snA+ZEW/tB1aUuyP2Ac\"",
		"mtime": "2026-10-26T06:07:08.567Z",
		"size": 1040,
		"path": "../public/assets/ServiceDetailPage-BsaIxYuM.css"
	},
	"/assets/ServiceDetailPage-i3BkSYQx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"458-2NEYts6HB3ypVJPctiB5h+szVNY\"",
		"mtime": "2026-10-26T06:07:08.559Z",
		"size": 1112,
		"path": "../public/assets/ServiceDetailPage-i3BkSYQx.js"
	},
	"/assets/services-C8DVG7aL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-OYSkD6wOIuJEzq+cLax4+iY+8ns\"",
		"mtime": "2026-10-26T06:07:08.565Z",
		"size": 151,
		"path": "../public/assets/services-C8DVG7aL.js"
	},
	"/assets/software-development-BVj3Jh0Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1eb-y8veBQ5/zArlv7XQyQcM07FKtYQ\"",
		"mtime": "2026-10-26T06:07:08.566Z",
		"size": 491,
		"path": "../public/assets/software-development-BVj3Jh0Q.js"
	},
	"/assets/services-DNLOQJjb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"425f-G/5H//wfbMOZuTFhORfQcw2Zfbg\"",
		"mtime": "2026-10-26T06:07:08.566Z",
		"size": 16991,
		"path": "../public/assets/services-DNLOQJjb.js"
	},
	"/assets/solutions-JOIH8zfM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"371d-IdMONI33JiEVFB/tJctZs1p6X2U\"",
		"mtime": "2026-10-26T06:07:08.566Z",
		"size": 14109,
		"path": "../public/assets/solutions-JOIH8zfM.js"
	},
	"/assets/suite-BrAvYIH8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d2f-88+e9tB4x1vuX7rS2GkzCWAJZY0\"",
		"mtime": "2026-10-26T06:07:08.567Z",
		"size": 7471,
		"path": "../public/assets/suite-BrAvYIH8.js"
	},
	"/assets/styles-dWTmSdka.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"21a03-jBiAIH6/0JR9u2SowM2nRfnJsYU\"",
		"mtime": "2026-10-26T06:07:08.570Z",
		"size": 137731,
		"path": "../public/assets/styles-dWTmSdka.css"
	},
	"/assets/useStore-DlMev5eV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b43-+/zGo00TNmnNV7ZMfszew8kOR/k\"",
		"mtime": "2026-10-26T06:07:08.567Z",
		"size": 27459,
		"path": "../public/assets/useStore-DlMev5eV.js"
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
	"/figma/about/discovery-search.svg": {
		"type": "image/svg+xml",
		"etag": "\"589-X0f0qnKM2lgFQQ8dxxPvhRUh3LE\"",
		"mtime": "2026-08-04T05:46:34.879Z",
		"size": 1417,
		"path": "../public/figma/about/discovery-search.svg"
	},
	"/figma/about/discovery-goal.svg": {
		"type": "image/svg+xml",
		"etag": "\"1424-0BDa35JJ3rSxxJvmA6HWLZChYWE\"",
		"mtime": "2026-08-04T05:46:33.864Z",
		"size": 5156,
		"path": "../public/figma/about/discovery-goal.svg"
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
	"/figma/case-studies/talk-to-us.png": {
		"type": "image/png",
		"etag": "\"121b-o57xM9fsFAqxt1LJNKHgghxj+qs\"",
		"mtime": "2026-08-13T10:12:34.264Z",
		"size": 4635,
		"path": "../public/figma/case-studies/talk-to-us.png"
	},
	"/figma/case-studies/cta-glow.png": {
		"type": "image/png",
		"etag": "\"62032-qr4bVCa1ShMERWZRoS21Hjzo1IY\"",
		"mtime": "2026-08-13T10:12:32.055Z",
		"size": 401458,
		"path": "../public/figma/case-studies/cta-glow.png"
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
	"/figma/blog/featured-sap-erp.png": {
		"type": "image/png",
		"etag": "\"3d901-aiPlc0Vwls84rWYERTn4knT+ax0\"",
		"mtime": "2026-08-13T09:40:30.428Z",
		"size": 252161,
		"path": "../public/figma/blog/featured-sap-erp.png"
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
	"/figma/blog/recent-automation.png": {
		"type": "image/png",
		"etag": "\"28cd9-ADkqRcTkEUTxgbIHJllNrCf0fNA\"",
		"mtime": "2026-08-13T09:40:34.960Z",
		"size": 167129,
		"path": "../public/figma/blog/recent-automation.png"
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
	"/figma/blog/recent-cloud.png": {
		"type": "image/png",
		"etag": "\"4c334-Wae7dH56j1hfaB24ZblR/3XZQQY\"",
		"mtime": "2026-08-13T09:40:32.535Z",
		"size": 312116,
		"path": "../public/figma/blog/recent-cloud.png"
	},
	"/figma/blog/recent-system-architecture.png": {
		"type": "image/png",
		"etag": "\"2d7b8-IR28cl2aIJbUiVXXVLByxf3LZ/c\"",
		"mtime": "2026-08-13T09:40:33.174Z",
		"size": 186296,
		"path": "../public/figma/blog/recent-system-architecture.png"
	},
	"/figma/blog/recent-productivity.png": {
		"type": "image/png",
		"etag": "\"42358-evvE3oFbgt2boOXwpzIynWVA8gY\"",
		"mtime": "2026-08-13T09:40:35.744Z",
		"size": 271192,
		"path": "../public/figma/blog/recent-productivity.png"
	},
	"/images/figma-raw-13.png": {
		"type": "image/png",
		"etag": "\"27f2ce-nEgJZ/KPB8tGnTSaGLE5a7Mo7s8\"",
		"mtime": "2026-08-13T06:50:57.062Z",
		"size": 2618062,
		"path": "../public/images/figma-raw-13.png"
	},
	"/figma/blog/search-more.png": {
		"type": "image/png",
		"etag": "\"378-2CpraHrBtOWR1cP9Fcb4LA4CZkY\"",
		"mtime": "2026-08-13T09:41:55.419Z",
		"size": 888,
		"path": "../public/figma/blog/search-more.png"
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
	"/figma/contact/footer-email-text.svg": {
		"type": "image/svg+xml",
		"etag": "\"643c-MJ3jfRfGQU8hxZc4GoHjH3eyjow\"",
		"mtime": "2026-08-13T09:08:29.187Z",
		"size": 25660,
		"path": "../public/figma/contact/footer-email-text.svg"
	},
	"/figma/contact/footer-location-text.svg": {
		"type": "image/svg+xml",
		"etag": "\"3e6e-jDisthsIwttP9HHJjdpFNFsc3Ss\"",
		"mtime": "2026-08-13T09:08:28.638Z",
		"size": 15982,
		"path": "../public/figma/contact/footer-location-text.svg"
	},
	"/figma/contact/footer-logo.png": {
		"type": "image/png",
		"etag": "\"f84c-sZlQsnM/Yd1bt21VxmKbqYMMnP4\"",
		"mtime": "2026-08-13T09:08:26.498Z",
		"size": 63564,
		"path": "../public/figma/contact/footer-logo.png"
	},
	"/figma/contact/footer-phone-text.svg": {
		"type": "image/svg+xml",
		"etag": "\"7e42-Xx9O7FvbVw1tdcdjoWVvJTRolHM\"",
		"mtime": "2026-08-13T09:08:28.159Z",
		"size": 32322,
		"path": "../public/figma/contact/footer-phone-text.svg"
	},
	"/figma/contact/footer-mask.svg": {
		"type": "image/svg+xml",
		"etag": "\"786-DcLkxldz0AXdaw3PqFnmiPPS75w\"",
		"mtime": "2026-08-13T09:08:27.712Z",
		"size": 1926,
		"path": "../public/figma/contact/footer-mask.svg"
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
	"/figma/contact/nav-linkedin.png": {
		"type": "image/png",
		"etag": "\"802-MG5Cs8NhbwhkW75h+vY4RMEVZ6w\"",
		"mtime": "2026-08-13T09:08:22.057Z",
		"size": 2050,
		"path": "../public/figma/contact/nav-linkedin.png"
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
	"/figma/industries/case-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"448-nW2bsSSliOgt6uusHfWJByE/6Kw\"",
		"mtime": "2026-08-13T11:22:25.866Z",
		"size": 1096,
		"path": "../public/figma/industries/case-arrow.svg"
	},
	"/figma/industries/carousel-button.svg": {
		"type": "image/svg+xml",
		"etag": "\"799-QW5zVy/zHpYm09D0uYGLGbr5psY\"",
		"mtime": "2026-08-13T11:22:26.781Z",
		"size": 1945,
		"path": "../public/figma/industries/carousel-button.svg"
	},
	"/figma/industries/corner-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"418-Nc2qqA234ZG7Qs6P3w1ik8BGnic\"",
		"mtime": "2026-08-13T11:27:33.073Z",
		"size": 1048,
		"path": "../public/figma/industries/corner-arrow.svg"
	},
	"/figma/industries/down-arrow.svg": {
		"type": "image/svg+xml",
		"etag": "\"3d5-J4sqkIf8P9NdFuyfEkO649Chpvw\"",
		"mtime": "2026-08-13T11:27:34.103Z",
		"size": 981,
		"path": "../public/figma/industries/down-arrow.svg"
	},
	"/figma/industries/banking.png": {
		"type": "image/png",
		"etag": "\"6d56c-nxfXpCvsylH9bGTppACwJmkRPFM\"",
		"mtime": "2026-08-13T11:22:22.858Z",
		"size": 447852,
		"path": "../public/figma/industries/banking.png"
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
	"/figma/partnership/asset-06.svg": {
		"type": "image/svg+xml",
		"etag": "\"16f-qZfqE57uK9SuPzZWboMN2/Ygi/k\"",
		"mtime": "2026-08-21T06:56:02.373Z",
		"size": 367,
		"path": "../public/figma/partnership/asset-06.svg"
	},
	"/figma/partnership/asset-07.svg": {
		"type": "image/svg+xml",
		"etag": "\"147-LdPdB5EMXrHeyI4BPmIEIH2jWrM\"",
		"mtime": "2026-08-21T06:56:02.791Z",
		"size": 327,
		"path": "../public/figma/partnership/asset-07.svg"
	},
	"/figma/partnership/asset-09.svg": {
		"type": "image/svg+xml",
		"etag": "\"7e65-FaCKyQbVDjDnRcjcDtYTcW4Pwc0\"",
		"mtime": "2026-08-21T06:56:03.706Z",
		"size": 32357,
		"path": "../public/figma/partnership/asset-09.svg"
	},
	"/figma/partnership/asset-08.svg": {
		"type": "image/svg+xml",
		"etag": "\"364-Kv7TLIjUmc+iJ9WeoeMT4UXj7sY\"",
		"mtime": "2026-08-21T06:56:03.107Z",
		"size": 868,
		"path": "../public/figma/partnership/asset-08.svg"
	},
	"/figma/partnership/asset-11.svg": {
		"type": "image/svg+xml",
		"etag": "\"108-zbE9+OoDImJqM0P2VIi5EbirpA4\"",
		"mtime": "2026-08-21T06:56:04.639Z",
		"size": 264,
		"path": "../public/figma/partnership/asset-11.svg"
	},
	"/figma/partnership/asset-10.svg": {
		"type": "image/svg+xml",
		"etag": "\"293-iMGUWO/BmccV8SeZXhyKqHN3caU\"",
		"mtime": "2026-08-21T06:56:04.323Z",
		"size": 659,
		"path": "../public/figma/partnership/asset-10.svg"
	},
	"/figma/partnership/asset-12.svg": {
		"type": "image/svg+xml",
		"etag": "\"390-oqdscysr7t4xyiLTZGe+BtVQv/Q\"",
		"mtime": "2026-08-21T06:56:05.005Z",
		"size": 912,
		"path": "../public/figma/partnership/asset-12.svg"
	},
	"/figma/partnership/asset-13.svg": {
		"type": "image/svg+xml",
		"etag": "\"784-T1Jw4pWIEHQy8uSXQYCsRgcKFMI\"",
		"mtime": "2026-08-21T06:56:05.641Z",
		"size": 1924,
		"path": "../public/figma/partnership/asset-13.svg"
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
	"/figma/partnership/raw-06.png": {
		"type": "image/png",
		"etag": "\"7553-Fgy/m1rL7CBiFfoXvqjn7XHcUyM\"",
		"mtime": "2026-08-21T06:55:11.772Z",
		"size": 30035,
		"path": "../public/figma/partnership/raw-06.png"
	},
	"/figma/partnership/raw-07.png": {
		"type": "image/png",
		"etag": "\"626-XEu4z43JZPqXTspa36Nmi6MnDn8\"",
		"mtime": "2026-08-21T06:55:12.223Z",
		"size": 1574,
		"path": "../public/figma/partnership/raw-07.png"
	},
	"/figma/partnership/raw-08.png": {
		"type": "image/png",
		"etag": "\"478-lgYL5X+PoFbOPBysn2HgRHOBltM\"",
		"mtime": "2026-08-21T06:55:12.572Z",
		"size": 1144,
		"path": "../public/figma/partnership/raw-08.png"
	},
	"/figma/partnership/raw-09.png": {
		"type": "image/png",
		"etag": "\"1c4e2-sZqyOI+758nkZunajpXh7JoEsoM\"",
		"mtime": "2026-08-21T06:55:13.638Z",
		"size": 115938,
		"path": "../public/figma/partnership/raw-09.png"
	},
	"/figma/partnership/figma-export.png": {
		"type": "image/png",
		"etag": "\"de7f8-8sjrdL2ljzZPoedJ9vdT62ahYy4\"",
		"mtime": "2026-08-21T06:52:17.644Z",
		"size": 911352,
		"path": "../public/figma/partnership/figma-export.png"
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
	"/figma/partnership/raw-12.png": {
		"type": "image/png",
		"etag": "\"5ad-HMZJCeBEys5Ji+URYK6h+BBbpss\"",
		"mtime": "2026-08-21T06:55:15.038Z",
		"size": 1453,
		"path": "../public/figma/partnership/raw-12.png"
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
	"/figma/home/hero-digital-scale.svg": {
		"type": "image/svg+xml",
		"etag": "\"978b-WP1NrlPfVFo4s485T2TZzmAznqk\"",
		"mtime": "2026-08-03T06:58:30.479Z",
		"size": 38795,
		"path": "../public/figma/home/hero-digital-scale.svg"
	},
	"/figma/home/hero-engineering.svg": {
		"type": "image/svg+xml",
		"etag": "\"2656-MCFrwai/ROvO3kjzLY8FDCYGI8o\"",
		"mtime": "2026-08-03T06:58:29.937Z",
		"size": 9814,
		"path": "../public/figma/home/hero-engineering.svg"
	},
	"/figma/home/hero-systems.svg": {
		"type": "image/svg+xml",
		"etag": "\"1fe1-1oU1vTGcgKXqcz5F8AVhC/HhCfc\"",
		"mtime": "2026-08-03T06:58:30.933Z",
		"size": 8161,
		"path": "../public/figma/home/hero-systems.svg"
	},
	"/figma/home/partners-arrows.svg": {
		"type": "image/svg+xml",
		"etag": "\"7ad-R5rmFex3Tnm+aYGMYMlnwBTVcAk\"",
		"mtime": "2026-10-12T10:45:25.820Z",
		"size": 1965,
		"path": "../public/figma/home/partners-arrows.svg"
	},
	"/figma/home/partners-logo2.png": {
		"type": "image/png",
		"etag": "\"9d3d-1WLY9VIuTvziwe5vvV8dYqAooZQ\"",
		"mtime": "2026-10-12T10:45:25.282Z",
		"size": 40253,
		"path": "../public/figma/home/partners-logo2.png"
	},
	"/figma/home/reseller-cards/anydesk.png": {
		"type": "image/png",
		"etag": "\"20262-52LymzZpIKni/0dxyvKMt5yaFnM\"",
		"mtime": "2026-10-12T12:12:25.436Z",
		"size": 131682,
		"path": "../public/figma/home/reseller-cards/anydesk.png"
	},
	"/figma/home/reseller-cards/manageengine.png": {
		"type": "image/png",
		"etag": "\"17ef9-zk1fNEZVBjO6BdpdsmcGBwKWe2A\"",
		"mtime": "2026-10-12T12:12:25.554Z",
		"size": 98041,
		"path": "../public/figma/home/reseller-cards/manageengine.png"
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
	"/figma/home/reseller-cards/zoho.png": {
		"type": "image/png",
		"etag": "\"12e17-l3RLcBo99GI9OGpMwfkiw+ds/iU\"",
		"mtime": "2026-10-13T08:45:30.596Z",
		"size": 77335,
		"path": "../public/figma/home/reseller-cards/zoho.png"
	},
	"/figma/home/collaborations-logos.png": {
		"type": "image/png",
		"etag": "\"122c41-M2Lm+aqM7nNDifSLIdQkze21pNQ\"",
		"mtime": "2026-10-12T10:51:30.004Z",
		"size": 1190977,
		"path": "../public/figma/home/collaborations-logos.png"
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
