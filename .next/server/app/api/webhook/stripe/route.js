"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/webhook/stripe/route";
exports.ids = ["app/api/webhook/stripe/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Fstripe%2Froute&page=%2Fapi%2Fwebhook%2Fstripe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fstripe%2Froute.ts&appDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2Ftodo-saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2Ftodo-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Fstripe%2Froute&page=%2Fapi%2Fwebhook%2Fstripe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fstripe%2Froute.ts&appDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2Ftodo-saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2Ftodo-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_louis_emilevromet_Documents_Personnel_Dev_todo_saas_app_api_webhook_stripe_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/webhook/stripe/route.ts */ \"(rsc)/./app/api/webhook/stripe/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/webhook/stripe/route\",\n        pathname: \"/api/webhook/stripe\",\n        filename: \"route\",\n        bundlePath: \"app/api/webhook/stripe/route\"\n    },\n    resolvedPagePath: \"/Users/louis-emilevromet/Documents/Personnel/Dev/todo-saas/app/api/webhook/stripe/route.ts\",\n    nextConfigOutput,\n    userland: _Users_louis_emilevromet_Documents_Personnel_Dev_todo_saas_app_api_webhook_stripe_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/webhook/stripe/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3ZWJob29rJTJGc3RyaXBlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3ZWJob29rJTJGc3RyaXBlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd2ViaG9vayUyRnN0cmlwZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmxvdWlzLWVtaWxldnJvbWV0JTJGRG9jdW1lbnRzJTJGUGVyc29ubmVsJTJGRGV2JTJGdG9kby1zYWFzJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmxvdWlzLWVtaWxldnJvbWV0JTJGRG9jdW1lbnRzJTJGUGVyc29ubmVsJTJGRGV2JTJGdG9kby1zYWFzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMwQztBQUN2SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tc2Fzcy8/ZDhlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbG91aXMtZW1pbGV2cm9tZXQvRG9jdW1lbnRzL1BlcnNvbm5lbC9EZXYvdG9kby1zYWFzL2FwcC9hcGkvd2ViaG9vay9zdHJpcGUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3dlYmhvb2svc3RyaXBlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvd2ViaG9vay9zdHJpcGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3dlYmhvb2svc3RyaXBlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2xvdWlzLWVtaWxldnJvbWV0L0RvY3VtZW50cy9QZXJzb25uZWwvRGV2L3RvZG8tc2Fhcy9hcHAvYXBpL3dlYmhvb2svc3RyaXBlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS93ZWJob29rL3N0cmlwZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Fstripe%2Froute&page=%2Fapi%2Fwebhook%2Fstripe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fstripe%2Froute.ts&appDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2Ftodo-saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2Ftodo-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/webhook/stripe/route.ts":
/*!*****************************************!*\
  !*** ./app/api/webhook/stripe/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/stripe */ \"(rsc)/./lib/stripe.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\n\n\nasync function POST(req) {\n    const body = await req.text();\n    const signature = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.headers)().get(\"Stripe-signature\");\n    let event;\n    try {\n        event = _lib_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (error) {\n        return new Response(\"Erreur webhook stripe\", {\n            status: 400\n        });\n    }\n    const session = event.data.object;\n    if (event.type === \"checkout.session.completed\") {\n        const subscription = await _lib_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.subscriptions.retrieve(session.subscription);\n        const customerId = String(session.customer);\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n            where: {\n                stripeCustomerId: customerId\n            }\n        });\n        if (!user) throw new Error(\"Utilisateur inexistant\");\n        await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.subscription.create({\n            data: {\n                stripeSubscriptionId: subscription.id,\n                userId: user.id,\n                currentPeriodStart: subscription.current_period_start,\n                currentPeriodEnd: subscription.current_period_end,\n                status: subscription.status,\n                planId: subscription.items.data[0].plan.id,\n                interval: String(subscription.items.data[0].plan.interval)\n            }\n        });\n    }\n    if (event.type === \"invoice.payment_succeeded\") {\n        const subscription = await _lib_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.subscriptions.retrieve(session.subscription);\n        await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.subscription.update({\n            where: {\n                stripeSubscriptionId: subscription.id\n            },\n            data: {\n                planId: subscription.items.data[0].plan.id,\n                currentPeriodStart: subscription.current_period_start,\n                currentPeriodEnd: subscription.current_period_end,\n                status: subscription.status\n            }\n        });\n    }\n    return new Response(null, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dlYmhvb2svc3RyaXBlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFFRDtBQUNKO0FBRTNCLGVBQWVHLEtBQUtDLEdBQVk7SUFDckMsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO0lBQzNCLE1BQU1DLFlBQVlQLHFEQUFPQSxHQUFHUSxHQUFHLENBQUM7SUFFaEMsSUFBSUM7SUFFSixJQUFJO1FBQ0ZBLFFBQVFSLCtDQUFNQSxDQUFDUyxRQUFRLENBQUNDLGNBQWMsQ0FDcENOLE1BQ0FFLFdBQ0FLLFFBQVFDLEdBQUcsQ0FBQ0MscUJBQXFCO0lBRXJDLEVBQUUsT0FBT0MsT0FBZ0I7UUFDdkIsT0FBTyxJQUFJQyxTQUFTLHlCQUF5QjtZQUFFQyxRQUFRO1FBQUk7SUFDN0Q7SUFFQSxNQUFNQyxVQUFVVCxNQUFNVSxJQUFJLENBQUNDLE1BQU07SUFFakMsSUFBSVgsTUFBTVksSUFBSSxLQUFLLDhCQUE4QjtRQUMvQyxNQUFNQyxlQUFlLE1BQU1yQiwrQ0FBTUEsQ0FBQ3NCLGFBQWEsQ0FBQ0MsUUFBUSxDQUN0RE4sUUFBUUksWUFBWTtRQUV0QixNQUFNRyxhQUFhQyxPQUFPUixRQUFRUyxRQUFRO1FBRTFDLE1BQU1DLE9BQU8sTUFBTTFCLDJDQUFNQSxDQUFDMEIsSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDeENDLE9BQU87Z0JBQ0xDLGtCQUFrQk47WUFDcEI7UUFDRjtRQUNBLElBQUksQ0FBQ0csTUFBTSxNQUFNLElBQUlJLE1BQU07UUFFM0IsTUFBTTlCLDJDQUFNQSxDQUFDb0IsWUFBWSxDQUFDVyxNQUFNLENBQUM7WUFDL0JkLE1BQU07Z0JBQ0plLHNCQUFzQlosYUFBYWEsRUFBRTtnQkFDckNDLFFBQVFSLEtBQUtPLEVBQUU7Z0JBQ2ZFLG9CQUFvQmYsYUFBYWdCLG9CQUFvQjtnQkFDckRDLGtCQUFrQmpCLGFBQWFrQixrQkFBa0I7Z0JBQ2pEdkIsUUFBUUssYUFBYUwsTUFBTTtnQkFDM0J3QixRQUFRbkIsYUFBYW9CLEtBQUssQ0FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUN3QixJQUFJLENBQUNSLEVBQUU7Z0JBQzFDUyxVQUFVbEIsT0FBT0osYUFBYW9CLEtBQUssQ0FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUN3QixJQUFJLENBQUNDLFFBQVE7WUFDM0Q7UUFDRjtJQUNGO0lBRUEsSUFBSW5DLE1BQU1ZLElBQUksS0FBSyw2QkFBNkI7UUFDOUMsTUFBTUMsZUFBZSxNQUFNckIsK0NBQU1BLENBQUNzQixhQUFhLENBQUNDLFFBQVEsQ0FDdEROLFFBQVFJLFlBQVk7UUFHdEIsTUFBTXBCLDJDQUFNQSxDQUFDb0IsWUFBWSxDQUFDdUIsTUFBTSxDQUFDO1lBQy9CZixPQUFPO2dCQUNMSSxzQkFBc0JaLGFBQWFhLEVBQUU7WUFDdkM7WUFDQWhCLE1BQU07Z0JBQ0pzQixRQUFRbkIsYUFBYW9CLEtBQUssQ0FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUN3QixJQUFJLENBQUNSLEVBQUU7Z0JBQzFDRSxvQkFBb0JmLGFBQWFnQixvQkFBb0I7Z0JBQ3JEQyxrQkFBa0JqQixhQUFha0Isa0JBQWtCO2dCQUNqRHZCLFFBQVFLLGFBQWFMLE1BQU07WUFDN0I7UUFDRjtJQUNGO0lBQ0EsT0FBTyxJQUFJRCxTQUFTLE1BQU07UUFBRUMsUUFBUTtJQUFJO0FBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1zYXNzLy4vYXBwL2FwaS93ZWJob29rL3N0cmlwZS9yb3V0ZS50cz9iNTg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhlYWRlcnMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XG5pbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCJAL2xpYi9zdHJpcGVcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS50ZXh0KCk7XG4gIGNvbnN0IHNpZ25hdHVyZSA9IGhlYWRlcnMoKS5nZXQoXCJTdHJpcGUtc2lnbmF0dXJlXCIpIGFzIHN0cmluZztcblxuICBsZXQgZXZlbnQ6IFN0cmlwZS5FdmVudDtcblxuICB0cnkge1xuICAgIGV2ZW50ID0gc3RyaXBlLndlYmhvb2tzLmNvbnN0cnVjdEV2ZW50KFxuICAgICAgYm9keSxcbiAgICAgIHNpZ25hdHVyZSxcbiAgICAgIHByb2Nlc3MuZW52LlNUUklQRV9XRUJIT09LX1NFQ1JFVCBhcyBzdHJpbmdcbiAgICApO1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJFcnJldXIgd2ViaG9vayBzdHJpcGVcIiwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxuXG4gIGNvbnN0IHNlc3Npb24gPSBldmVudC5kYXRhLm9iamVjdCBhcyBTdHJpcGUuQ2hlY2tvdXQuU2Vzc2lvbjtcblxuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZFwiKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgc3RyaXBlLnN1YnNjcmlwdGlvbnMucmV0cmlldmUoXG4gICAgICBzZXNzaW9uLnN1YnNjcmlwdGlvbiBhcyBzdHJpbmdcbiAgICApO1xuICAgIGNvbnN0IGN1c3RvbWVySWQgPSBTdHJpbmcoc2Vzc2lvbi5jdXN0b21lcik7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBzdHJpcGVDdXN0b21lcklkOiBjdXN0b21lcklkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIlV0aWxpc2F0ZXVyIGluZXhpc3RhbnRcIik7XG5cbiAgICBhd2FpdCBwcmlzbWEuc3Vic2NyaXB0aW9uLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHN0cmlwZVN1YnNjcmlwdGlvbklkOiBzdWJzY3JpcHRpb24uaWQsXG4gICAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgICAgY3VycmVudFBlcmlvZFN0YXJ0OiBzdWJzY3JpcHRpb24uY3VycmVudF9wZXJpb2Rfc3RhcnQsXG4gICAgICAgIGN1cnJlbnRQZXJpb2RFbmQ6IHN1YnNjcmlwdGlvbi5jdXJyZW50X3BlcmlvZF9lbmQsXG4gICAgICAgIHN0YXR1czogc3Vic2NyaXB0aW9uLnN0YXR1cyxcbiAgICAgICAgcGxhbklkOiBzdWJzY3JpcHRpb24uaXRlbXMuZGF0YVswXS5wbGFuLmlkLFxuICAgICAgICBpbnRlcnZhbDogU3RyaW5nKHN1YnNjcmlwdGlvbi5pdGVtcy5kYXRhWzBdLnBsYW4uaW50ZXJ2YWwpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChldmVudC50eXBlID09PSBcImludm9pY2UucGF5bWVudF9zdWNjZWVkZWRcIikge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHN0cmlwZS5zdWJzY3JpcHRpb25zLnJldHJpZXZlKFxuICAgICAgc2Vzc2lvbi5zdWJzY3JpcHRpb24gYXMgc3RyaW5nXG4gICAgKTtcblxuICAgIGF3YWl0IHByaXNtYS5zdWJzY3JpcHRpb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHN0cmlwZVN1YnNjcmlwdGlvbklkOiBzdWJzY3JpcHRpb24uaWQsXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBwbGFuSWQ6IHN1YnNjcmlwdGlvbi5pdGVtcy5kYXRhWzBdLnBsYW4uaWQsXG4gICAgICAgIGN1cnJlbnRQZXJpb2RTdGFydDogc3Vic2NyaXB0aW9uLmN1cnJlbnRfcGVyaW9kX3N0YXJ0LFxuICAgICAgICBjdXJyZW50UGVyaW9kRW5kOiBzdWJzY3JpcHRpb24uY3VycmVudF9wZXJpb2RfZW5kLFxuICAgICAgICBzdGF0dXM6IHN1YnNjcmlwdGlvbi5zdGF0dXMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwgeyBzdGF0dXM6IDIwMCB9KTtcbn1cbiJdLCJuYW1lcyI6WyJoZWFkZXJzIiwic3RyaXBlIiwicHJpc21hIiwiUE9TVCIsInJlcSIsImJvZHkiLCJ0ZXh0Iiwic2lnbmF0dXJlIiwiZ2V0IiwiZXZlbnQiLCJ3ZWJob29rcyIsImNvbnN0cnVjdEV2ZW50IiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVycm9yIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJzZXNzaW9uIiwiZGF0YSIsIm9iamVjdCIsInR5cGUiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb25zIiwicmV0cmlldmUiLCJjdXN0b21lcklkIiwiU3RyaW5nIiwiY3VzdG9tZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic3RyaXBlQ3VzdG9tZXJJZCIsIkVycm9yIiwiY3JlYXRlIiwic3RyaXBlU3Vic2NyaXB0aW9uSWQiLCJpZCIsInVzZXJJZCIsImN1cnJlbnRQZXJpb2RTdGFydCIsImN1cnJlbnRfcGVyaW9kX3N0YXJ0IiwiY3VycmVudFBlcmlvZEVuZCIsImN1cnJlbnRfcGVyaW9kX2VuZCIsInBsYW5JZCIsIml0ZW1zIiwicGxhbiIsImludGVydmFsIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/webhook/stripe/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\nif (true) globalThis.prismaGlobal = prisma;\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQU1PLE1BQU1FLFNBQVNDLFdBQVdDLFlBQVksSUFBSUgsd0JBQXdCO0FBRXpFLElBQUlJLElBQXFDLEVBQUVGLFdBQVdDLFlBQVksR0FBR0Y7QUFFckUsSUFBSUcsSUFBcUMsRUFBRUYsV0FBV0MsWUFBWSxHQUFHRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tc2Fzcy8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWFDbGllbnRTaW5nbGV0b24gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KCk7XG59O1xuXG5kZWNsYXJlIGNvbnN0IGdsb2JhbFRoaXM6IHtcbiAgcHJpc21hR2xvYmFsOiBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+O1xufSAmIHR5cGVvZiBnbG9iYWw7XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA/PyBwcmlzbWFDbGllbnRTaW5nbGV0b24oKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWFHbG9iYWwgPSBwcmlzbWE7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWFHbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./lib/stripe.ts":
/*!***********************!*\
  !*** ./lib/stripe.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStripeSession: () => (/* binding */ getStripeSession),\n/* harmony export */   stripe: () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_KEY_SECRET, {\n    typescript: true\n});\nconst getStripeSession = async ({ priceId, domainUrl, customerId })=>{\n    const session = await stripe.checkout.sessions.create({\n        customer: customerId,\n        mode: \"subscription\",\n        billing_address_collection: \"auto\",\n        line_items: [\n            {\n                price: priceId,\n                quantity: 1\n            }\n        ],\n        payment_method_types: [\n            \"card\"\n        ],\n        customer_update: {\n            address: \"auto\",\n            name: \"auto\"\n        },\n        success_url: `${domainUrl}/dashboard/payments/success`,\n        cancel_url: `${domainUrl}/dashboard/payments/cancel`\n    });\n    return session.url;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3RyaXBlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUVyQixNQUFNQyxTQUFTLElBQUlELDhDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixFQUFZO0lBQ3hFQyxZQUFZO0FBQ2QsR0FBRztBQUVJLE1BQU1DLG1CQUFtQixPQUFPLEVBQ3JDQyxPQUFPLEVBQ1BDLFNBQVMsRUFDVEMsVUFBVSxFQUtYO0lBQ0MsTUFBTUMsVUFBVSxNQUFNVCxPQUFPVSxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3BEQyxVQUFVTDtRQUNWTSxNQUFNO1FBQ05DLDRCQUE0QjtRQUM1QkMsWUFBWTtZQUFDO2dCQUFFQyxPQUFPWDtnQkFBU1ksVUFBVTtZQUFFO1NBQUU7UUFDN0NDLHNCQUFzQjtZQUFDO1NBQU87UUFDOUJDLGlCQUFpQjtZQUNmQyxTQUFTO1lBQ1RDLE1BQU07UUFDUjtRQUNBQyxhQUFhLENBQUMsRUFBRWhCLFVBQVUsMkJBQTJCLENBQUM7UUFDdERpQixZQUFZLENBQUMsRUFBRWpCLFVBQVUsMEJBQTBCLENBQUM7SUFDdEQ7SUFDQSxPQUFPRSxRQUFRZ0IsR0FBRztBQUNwQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1zYXNzLy4vbGliL3N0cmlwZS50cz8wZTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfS0VZX1NFQ1JFVCBhcyBzdHJpbmcsIHtcbiAgdHlwZXNjcmlwdDogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RyaXBlU2Vzc2lvbiA9IGFzeW5jICh7XG4gIHByaWNlSWQsXG4gIGRvbWFpblVybCxcbiAgY3VzdG9tZXJJZCxcbn06IHtcbiAgcHJpY2VJZDogc3RyaW5nO1xuICBkb21haW5Vcmw6IHN0cmluZztcbiAgY3VzdG9tZXJJZDogc3RyaW5nO1xufSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgY3VzdG9tZXI6IGN1c3RvbWVySWQsXG4gICAgbW9kZTogXCJzdWJzY3JpcHRpb25cIixcbiAgICBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbjogXCJhdXRvXCIsXG4gICAgbGluZV9pdGVtczogW3sgcHJpY2U6IHByaWNlSWQsIHF1YW50aXR5OiAxIH1dLFxuICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuICAgIGN1c3RvbWVyX3VwZGF0ZToge1xuICAgICAgYWRkcmVzczogXCJhdXRvXCIsXG4gICAgICBuYW1lOiBcImF1dG9cIixcbiAgICB9LFxuICAgIHN1Y2Nlc3NfdXJsOiBgJHtkb21haW5Vcmx9L2Rhc2hib2FyZC9wYXltZW50cy9zdWNjZXNzYCxcbiAgICBjYW5jZWxfdXJsOiBgJHtkb21haW5Vcmx9L2Rhc2hib2FyZC9wYXltZW50cy9jYW5jZWxgLFxuICB9KTtcbiAgcmV0dXJuIHNlc3Npb24udXJsIGFzIHN0cmluZztcbn07XG4iXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9LRVlfU0VDUkVUIiwidHlwZXNjcmlwdCIsImdldFN0cmlwZVNlc3Npb24iLCJwcmljZUlkIiwiZG9tYWluVXJsIiwiY3VzdG9tZXJJZCIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwiY3VzdG9tZXIiLCJtb2RlIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiY3VzdG9tZXJfdXBkYXRlIiwiYWRkcmVzcyIsIm5hbWUiLCJzdWNjZXNzX3VybCIsImNhbmNlbF91cmwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/stripe.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/qs","vendor-chunks/object-inspect","vendor-chunks/get-intrinsic","vendor-chunks/side-channel","vendor-chunks/define-data-property","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/set-function-length","vendor-chunks/has-property-descriptors","vendor-chunks/es-errors","vendor-chunks/es-define-property","vendor-chunks/has-proto","vendor-chunks/gopd","vendor-chunks/hasown"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Fstripe%2Froute&page=%2Fapi%2Fwebhook%2Fstripe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fstripe%2Froute.ts&appDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2Ftodo-saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2Ftodo-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();