module.exports = function(eleventyConfig) {
    var markdownIt = require('markdown-it');
    var markdownItAttrs = require('markdown-it-attrs');
    var markdownOptions = {
        html: true
    };
    var markdownLib = markdownIt(markdownOptions)
                        .use(markdownItAttrs);
    eleventyConfig.setLibrary('md', markdownLib);

    eleventyConfig.addShortcode("greet", function(entity) {
        return entity + "!";
    });

    eleventyConfig.addPassthroughCopy({"source/_static" : "/"});

    return {
        pathPrefix: "/",
        htmlTemplateEngine: "njk",
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