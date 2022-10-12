import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "pnyshh2g",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const build = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client
