// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-tag-template-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\templates\\TagTemplate.js" /* webpackChunkName: "component---src-templates-tag-template-js" */),
  "component---src-templates-post-template-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\templates\\PostTemplate.js" /* webpackChunkName: "component---src-templates-post-template-js" */),
  "component---src-templates-page-template-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\templates\\PageTemplate.js" /* webpackChunkName: "component---src-templates-page-template-js" */),
  "component---src-templates-index-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\templates\\index.js" /* webpackChunkName: "component---src-templates-index-js" */),
  "component---cache-dev-404-page-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\pages\\contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-follow-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\pages\\follow.js" /* webpackChunkName: "component---src-pages-follow-js" */),
  "component---src-pages-search-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\pages\\search.js" /* webpackChunkName: "component---src-pages-search-js" */),
  "component---src-pages-tags-js": () => import("C:\\Users\\ibrah\\Documents\\blog\\src\\pages\\tags.js" /* webpackChunkName: "component---src-pages-tags-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "C:\\Users\\ibrah\\Documents\\blog\\.cache\\data.json")

