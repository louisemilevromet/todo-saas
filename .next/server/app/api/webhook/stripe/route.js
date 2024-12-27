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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Fstripe%2Froute&page=%2Fapi%2Fwebhook%2Fstripe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fstripe%2Froute.ts&appDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2FSaas%2Ftodo-saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2FSaas%2Ftodo-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Fstripe%2Froute&page=%2Fapi%2Fwebhook%2Fstripe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fstripe%2Froute.ts&appDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2FSaas%2Ftodo-saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2FSaas%2Ftodo-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_louis_emilevromet_Documents_Personnel_Dev_Saas_todo_saas_app_api_webhook_stripe_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/webhook/stripe/route.ts */ \"(rsc)/./app/api/webhook/stripe/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/webhook/stripe/route\",\n        pathname: \"/api/webhook/stripe\",\n        filename: \"route\",\n        bundlePath: \"app/api/webhook/stripe/route\"\n    },\n    resolvedPagePath: \"/Users/louis-emilevromet/Documents/Personnel/Dev/Saas/todo-saas/app/api/webhook/stripe/route.ts\",\n    nextConfigOutput,\n    userland: _Users_louis_emilevromet_Documents_Personnel_Dev_Saas_todo_saas_app_api_webhook_stripe_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/webhook/stripe/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3ZWJob29rJTJGc3RyaXBlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3ZWJob29rJTJGc3RyaXBlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd2ViaG9vayUyRnN0cmlwZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmxvdWlzLWVtaWxldnJvbWV0JTJGRG9jdW1lbnRzJTJGUGVyc29ubmVsJTJGRGV2JTJGU2FhcyUyRnRvZG8tc2FhcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZsb3Vpcy1lbWlsZXZyb21ldCUyRkRvY3VtZW50cyUyRlBlcnNvbm5lbCUyRkRldiUyRlNhYXMlMkZ0b2RvLXNhYXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQytDO0FBQzVIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1zYXNzLz9hNDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9sb3Vpcy1lbWlsZXZyb21ldC9Eb2N1bWVudHMvUGVyc29ubmVsL0Rldi9TYWFzL3RvZG8tc2Fhcy9hcHAvYXBpL3dlYmhvb2svc3RyaXBlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS93ZWJob29rL3N0cmlwZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3dlYmhvb2svc3RyaXBlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS93ZWJob29rL3N0cmlwZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9sb3Vpcy1lbWlsZXZyb21ldC9Eb2N1bWVudHMvUGVyc29ubmVsL0Rldi9TYWFzL3RvZG8tc2Fhcy9hcHAvYXBpL3dlYmhvb2svc3RyaXBlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS93ZWJob29rL3N0cmlwZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Fstripe%2Froute&page=%2Fapi%2Fwebhook%2Fstripe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fstripe%2Froute.ts&appDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2FSaas%2Ftodo-saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2FSaas%2Ftodo-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/webhook/stripe/route.ts":
/*!*****************************************!*\
  !*** ./app/api/webhook/stripe/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/stripe */ \"(rsc)/./lib/stripe.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.ts\");\n\n\n\nasync function POST(req) {\n    const body = await req.text();\n    const signature = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.headers)().get(\"Stripe-signature\");\n    console.log(\"\\uD83D\\uDD25 Webhook re\\xe7u\");\n    let event;\n    try {\n        event = _lib_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (error) {\n        return new Response(\"Erreur webhook stripe\", {\n            status: 400\n        });\n    }\n    const session = event.data.object;\n    if (event.type === \"checkout.session.completed\") {\n        const subscription = await _lib_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.subscriptions.retrieve(session.subscription);\n        const customerId = String(session.customer);\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n            where: {\n                stripeCustomerId: customerId\n            }\n        });\n        if (!user) throw new Error(\"Utilisateur inexistant\");\n        await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.subscription.create({\n            data: {\n                stripeSubscriptionId: subscription.id,\n                userId: user.id,\n                currentPeriodStart: subscription.current_period_start,\n                currentPeriodEnd: subscription.current_period_end,\n                status: subscription.status,\n                planId: subscription.items.data[0].plan.id,\n                interval: String(subscription.items.data[0].plan.interval)\n            }\n        });\n    }\n    if (event.type === \"invoice.payment_succeeded\") {\n        const subscription = await _lib_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.subscriptions.retrieve(session.subscription);\n        await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.subscription.update({\n            where: {\n                stripeSubscriptionId: subscription.id\n            },\n            data: {\n                planId: subscription.items.data[0].plan.id,\n                currentPeriodStart: subscription.current_period_start,\n                currentPeriodEnd: subscription.current_period_end,\n                status: subscription.status\n            }\n        });\n    }\n    return new Response(null, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dlYmhvb2svc3RyaXBlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7QUFFRDtBQUNKO0FBRTNCLGVBQWVHLEtBQUtDLEdBQVk7SUFDckMsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO0lBQzNCLE1BQU1DLFlBQVlQLHFEQUFPQSxHQUFHUSxHQUFHLENBQUM7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQztJQUVaLElBQUlDO0lBRUosSUFBSTtRQUNGQSxRQUFRViwrQ0FBTUEsQ0FBQ1csUUFBUSxDQUFDQyxjQUFjLENBQ3BDUixNQUNBRSxXQUNBTyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtJQUVyQyxFQUFFLE9BQU9DLE9BQWdCO1FBQ3ZCLE9BQU8sSUFBSUMsU0FBUyx5QkFBeUI7WUFBRUMsUUFBUTtRQUFJO0lBQzdEO0lBRUEsTUFBTUMsVUFBVVQsTUFBTVUsSUFBSSxDQUFDQyxNQUFNO0lBRWpDLElBQUlYLE1BQU1ZLElBQUksS0FBSyw4QkFBOEI7UUFDL0MsTUFBTUMsZUFBZSxNQUFNdkIsK0NBQU1BLENBQUN3QixhQUFhLENBQUNDLFFBQVEsQ0FDdEROLFFBQVFJLFlBQVk7UUFFdEIsTUFBTUcsYUFBYUMsT0FBT1IsUUFBUVMsUUFBUTtRQUUxQyxNQUFNQyxPQUFPLE1BQU01QiwyQ0FBTUEsQ0FBQzRCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQ3hDQyxPQUFPO2dCQUNMQyxrQkFBa0JOO1lBQ3BCO1FBQ0Y7UUFDQSxJQUFJLENBQUNHLE1BQU0sTUFBTSxJQUFJSSxNQUFNO1FBRTNCLE1BQU1oQywyQ0FBTUEsQ0FBQ3NCLFlBQVksQ0FBQ1csTUFBTSxDQUFDO1lBQy9CZCxNQUFNO2dCQUNKZSxzQkFBc0JaLGFBQWFhLEVBQUU7Z0JBQ3JDQyxRQUFRUixLQUFLTyxFQUFFO2dCQUNmRSxvQkFBb0JmLGFBQWFnQixvQkFBb0I7Z0JBQ3JEQyxrQkFBa0JqQixhQUFha0Isa0JBQWtCO2dCQUNqRHZCLFFBQVFLLGFBQWFMLE1BQU07Z0JBQzNCd0IsUUFBUW5CLGFBQWFvQixLQUFLLENBQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDd0IsSUFBSSxDQUFDUixFQUFFO2dCQUMxQ1MsVUFBVWxCLE9BQU9KLGFBQWFvQixLQUFLLENBQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDd0IsSUFBSSxDQUFDQyxRQUFRO1lBQzNEO1FBQ0Y7SUFDRjtJQUVBLElBQUluQyxNQUFNWSxJQUFJLEtBQUssNkJBQTZCO1FBQzlDLE1BQU1DLGVBQWUsTUFBTXZCLCtDQUFNQSxDQUFDd0IsYUFBYSxDQUFDQyxRQUFRLENBQ3RETixRQUFRSSxZQUFZO1FBR3RCLE1BQU10QiwyQ0FBTUEsQ0FBQ3NCLFlBQVksQ0FBQ3VCLE1BQU0sQ0FBQztZQUMvQmYsT0FBTztnQkFDTEksc0JBQXNCWixhQUFhYSxFQUFFO1lBQ3ZDO1lBQ0FoQixNQUFNO2dCQUNKc0IsUUFBUW5CLGFBQWFvQixLQUFLLENBQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDd0IsSUFBSSxDQUFDUixFQUFFO2dCQUMxQ0Usb0JBQW9CZixhQUFhZ0Isb0JBQW9CO2dCQUNyREMsa0JBQWtCakIsYUFBYWtCLGtCQUFrQjtnQkFDakR2QixRQUFRSyxhQUFhTCxNQUFNO1lBQzdCO1FBQ0Y7SUFDRjtJQUNBLE9BQU8sSUFBSUQsU0FBUyxNQUFNO1FBQUVDLFFBQVE7SUFBSTtBQUMxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tc2Fzcy8uL2FwcC9hcGkvd2ViaG9vay9zdHJpcGUvcm91dGUudHM/YjU4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiQC9saWIvc3RyaXBlXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEudGV4dCgpO1xuICBjb25zdCBzaWduYXR1cmUgPSBoZWFkZXJzKCkuZ2V0KFwiU3RyaXBlLXNpZ25hdHVyZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnNvbGUubG9nKFwi8J+UpSBXZWJob29rIHJlw6d1XCIpO1xuXG4gIGxldCBldmVudDogU3RyaXBlLkV2ZW50O1xuXG4gIHRyeSB7XG4gICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQoXG4gICAgICBib2R5LFxuICAgICAgc2lnbmF0dXJlLFxuICAgICAgcHJvY2Vzcy5lbnYuU1RSSVBFX1dFQkhPT0tfU0VDUkVUIGFzIHN0cmluZ1xuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkVycmV1ciB3ZWJob29rIHN0cmlwZVwiLCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0IGFzIFN0cmlwZS5DaGVja291dC5TZXNzaW9uO1xuXG4gIGlmIChldmVudC50eXBlID09PSBcImNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXCIpIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCBzdHJpcGUuc3Vic2NyaXB0aW9ucy5yZXRyaWV2ZShcbiAgICAgIHNlc3Npb24uc3Vic2NyaXB0aW9uIGFzIHN0cmluZ1xuICAgICk7XG4gICAgY29uc3QgY3VzdG9tZXJJZCA9IFN0cmluZyhzZXNzaW9uLmN1c3RvbWVyKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHN0cmlwZUN1c3RvbWVySWQ6IGN1c3RvbWVySWQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXRpbGlzYXRldXIgaW5leGlzdGFudFwiKTtcblxuICAgIGF3YWl0IHByaXNtYS5zdWJzY3JpcHRpb24uY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RyaXBlU3Vic2NyaXB0aW9uSWQ6IHN1YnNjcmlwdGlvbi5pZCxcbiAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICBjdXJyZW50UGVyaW9kU3RhcnQ6IHN1YnNjcmlwdGlvbi5jdXJyZW50X3BlcmlvZF9zdGFydCxcbiAgICAgICAgY3VycmVudFBlcmlvZEVuZDogc3Vic2NyaXB0aW9uLmN1cnJlbnRfcGVyaW9kX2VuZCxcbiAgICAgICAgc3RhdHVzOiBzdWJzY3JpcHRpb24uc3RhdHVzLFxuICAgICAgICBwbGFuSWQ6IHN1YnNjcmlwdGlvbi5pdGVtcy5kYXRhWzBdLnBsYW4uaWQsXG4gICAgICAgIGludGVydmFsOiBTdHJpbmcoc3Vic2NyaXB0aW9uLml0ZW1zLmRhdGFbMF0ucGxhbi5pbnRlcnZhbCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwiaW52b2ljZS5wYXltZW50X3N1Y2NlZWRlZFwiKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgc3RyaXBlLnN1YnNjcmlwdGlvbnMucmV0cmlldmUoXG4gICAgICBzZXNzaW9uLnN1YnNjcmlwdGlvbiBhcyBzdHJpbmdcbiAgICApO1xuXG4gICAgYXdhaXQgcHJpc21hLnN1YnNjcmlwdGlvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgc3RyaXBlU3Vic2NyaXB0aW9uSWQ6IHN1YnNjcmlwdGlvbi5pZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBsYW5JZDogc3Vic2NyaXB0aW9uLml0ZW1zLmRhdGFbMF0ucGxhbi5pZCxcbiAgICAgICAgY3VycmVudFBlcmlvZFN0YXJ0OiBzdWJzY3JpcHRpb24uY3VycmVudF9wZXJpb2Rfc3RhcnQsXG4gICAgICAgIGN1cnJlbnRQZXJpb2RFbmQ6IHN1YnNjcmlwdGlvbi5jdXJyZW50X3BlcmlvZF9lbmQsXG4gICAgICAgIHN0YXR1czogc3Vic2NyaXB0aW9uLnN0YXR1cyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7IHN0YXR1czogMjAwIH0pO1xufVxuIl0sIm5hbWVzIjpbImhlYWRlcnMiLCJzdHJpcGUiLCJwcmlzbWEiLCJQT1NUIiwicmVxIiwiYm9keSIsInRleHQiLCJzaWduYXR1cmUiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJ3ZWJob29rcyIsImNvbnN0cnVjdEV2ZW50IiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVycm9yIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJzZXNzaW9uIiwiZGF0YSIsIm9iamVjdCIsInR5cGUiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb25zIiwicmV0cmlldmUiLCJjdXN0b21lcklkIiwiU3RyaW5nIiwiY3VzdG9tZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic3RyaXBlQ3VzdG9tZXJJZCIsIkVycm9yIiwiY3JlYXRlIiwic3RyaXBlU3Vic2NyaXB0aW9uSWQiLCJpZCIsInVzZXJJZCIsImN1cnJlbnRQZXJpb2RTdGFydCIsImN1cnJlbnRfcGVyaW9kX3N0YXJ0IiwiY3VycmVudFBlcmlvZEVuZCIsImN1cnJlbnRfcGVyaW9kX2VuZCIsInBsYW5JZCIsIml0ZW1zIiwicGxhbiIsImludGVydmFsIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/webhook/stripe/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/qs","vendor-chunks/object-inspect","vendor-chunks/get-intrinsic","vendor-chunks/side-channel","vendor-chunks/define-data-property","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/set-function-length","vendor-chunks/has-property-descriptors","vendor-chunks/es-errors","vendor-chunks/es-define-property","vendor-chunks/has-proto","vendor-chunks/gopd","vendor-chunks/hasown"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwebhook%2Fstripe%2Froute&page=%2Fapi%2Fwebhook%2Fstripe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwebhook%2Fstripe%2Froute.ts&appDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2FSaas%2Ftodo-saas%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Flouis-emilevromet%2FDocuments%2FPersonnel%2FDev%2FSaas%2Ftodo-saas&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();