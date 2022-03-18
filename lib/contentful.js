import { GraphQLClient } from 'graphql-request';

export async function fetchApi(query) {
  const client = new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
  );

  const data = await client.request(query);

  return data;
}

export async function getPage(id) {
  const data = await fetchApi(`
  query getPage {
    page(id: "${id}") {
      title
      seoTitle
      hero {
        title
        subtitle
        content
        callToAction {
          linkText
          linkUrl
        }
        logosCollection {
          items {
            url
            width
            height
          }
        }
      }
      sectionsCollection(limit:20) {
        items {
          name
          title
          contentBlocksCollection(limit:20) {
            items {
              title
              subtitle
              content
              imagesCollection(limit:10) {
                items {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }  
  `);

  return data;
}
