var yaml = require('js-yaml');
var pluginRss = require("@11ty/eleventy-plugin-rss");
var moment = require('moment');
var slugify = require('slugify');

const KeySet = require('./addons/keysets');

module.exports = function(eleventyConfig) {
    var markdownIt = require('markdown-it');
    var markdownItAttrs = require('markdown-it-attrs');
    var markdownItDiv = require('markdown-it-div');
    var markdownOptions = {
        html: true
    };
    var markdownLib = markdownIt(markdownOptions)
                        .use(markdownItAttrs)
                        .use(markdownItDiv);
    eleventyConfig.setLibrary('md', markdownLib);

    eleventyConfig.addShortcode("greet", function(entity) {
        return entity + "!";
    });

    eleventyConfig.addPassthroughCopy({"source/_static" : "/"});

    eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addFilter('verboseDate', function(date) {
        return moment.utc(date).format('dddd, MMMM Do YYYY');
    });

    var metatagsSet = new KeySet("metatags");
    eleventyConfig.addCollection("oldblog", metatagsSet.collection("oldblog"));
    eleventyConfig.addCollection("blog", metatagsSet.collection("blog"));
    eleventyConfig.addCollection("blog_drafts", metatagsSet.collection("blog_drafts"));
    eleventyConfig.addCollection("blog_previews", metatagsSet.collection("blog_previews"));
    eleventyConfig.addCollection("diary", metatagsSet.collection("diary"));

    var slugifyConfig = {
        remove: [],
        lower: true,
        strict: true,
    };
    eleventyConfig.addNunjucksFilter('slug', function(value) {
        return slugify(value, slugifyConfig);
    });

    return {
        pathPrefix: "/",
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dir: {
            input: "source",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        },
    };
}