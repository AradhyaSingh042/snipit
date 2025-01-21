import { algoliasearch } from "algoliasearch";

export const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID as string,
  process.env.ALGOLIA_ADMIN_KEY as string
);
