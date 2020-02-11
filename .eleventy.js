var moment = require('moment-timezone');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('dist');
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addFilter("dateUgly", function(dateIn) {
        return moment(dateIn).tz('GMT').format('YYYY-MM-DD');
    });

    eleventyConfig.addFilter("datePretty", function(dateIn) {
        return moment(dateIn).tz('GMT').format('DD MMMM, YYYY');
    });

    return {
        passthroughFileCopy: true
    }
}