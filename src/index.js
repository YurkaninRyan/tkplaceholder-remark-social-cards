import * as Jimp from "jimp";
import * as path from "path";

export async function createSocialCardForBlogPost({ markdownNode }) {
  const post = markdownNode.frontmatter;

  const output = path.join("./public", markdownNode.fields.slug, "seo.jpg");

  const image = await Jimp.read(path.join(__dirname, "base.jpg"));
  const msb80 = await Jimp.loadFont(
    path.join(__dirname, "fonts/Montserrat-Black-80/Montserrat-Black-80.fnt")
  );

  const WIDTH = 1200;
  const HEIGHT = 675;
  const PADDING = 40;

  image
    .resize(WIDTH, HEIGHT)
    .print(msb80, PADDING, 140 + PADDING, post.title, WIDTH - PADDING * 2);

  // tslint:disable-next-line
  console.log(`Created SEO Image for:  ${post.title}`);

  await image.writeAsync(output);
}
