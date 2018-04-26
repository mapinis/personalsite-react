
exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    return new Promise(( resolve, reject ) => {
        resolve(
            graphql(
              `
                {
                  allMarkdownRemark(limit: 1000) {
                    edges {
                      node {
                        frontmatter {
                          path
                        }
                      }
                    }
                  }
                }
              `
            ).then(result => {
              if (result.errors) {
                reject(result.errors);
              }
      
              // Create pages for each markdown file.
              result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                const path = node.frontmatter.path;
                createPage({
                  path,
                  component: () => (<div>test</div>),
                  layout: "src/layouts/index.js",
                  // In your blog post template's graphql query, you can use path
                  // as a GraphQL variable to query for data from the markdown file.
                  context: {
                    path
                  },
                });
              });
            })
          ); 
    });
};