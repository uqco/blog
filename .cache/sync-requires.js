const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tag-template-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\templates\\TagTemplate.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\templates\\PostTemplate.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\templates\\PageTemplate.js"))),
  "component---src-templates-index-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\templates\\index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\pages\\404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\pages\\contact.js"))),
  "component---src-pages-follow-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\pages\\follow.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\pages\\search.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("C:\\Users\\ibrah\\Documents\\blogi\\src\\pages\\tags.js")))
}

