module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("image", (t, ...args) => {
    console.log(`image [${t}]`, args);
    return t + "::" + JSON.stringify(args, null, 2);
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // markdownTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "www",
    }
  };
};
