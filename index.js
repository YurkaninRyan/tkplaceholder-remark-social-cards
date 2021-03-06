"use strict";

var _jimp = require("jimp");

var Jimp = _interopRequireWildcard(_jimp);

var _path = require("path");

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

module.exports = async ({ markdownNode }) => {
  const post = markdownNode.frontmatter;

  const output = path.join("./public", markdownNode.fields.slug, "seo.jpg");

  const image = await Jimp.read(path.join(__dirname, "base.jpg"));
  const msb80 = await Jimp.loadFont(
    path.join(__dirname, "fonts/Montserrat-Black-80/Montserrat-Black-80.fnt")
  );

  const WIDTH = 1200;
  const HEIGHT = 630;
  const PADDING = 40;

  const generatedImage = await image
    .resize(WIDTH, HEIGHT)
    .print(msb80, PADDING, 140 + PADDING, post.title, WIDTH - PADDING * 2);

  // tslint:disable-next-line
  console.log(`Created SEO Image for:  ${post.title}`);

  generatedImage.writeAsync(output);
};
