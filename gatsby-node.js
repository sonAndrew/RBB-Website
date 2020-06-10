// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Only update the `/app` page.
  if (page.path.match(/^\/businesses/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/businesses/*';
    // Update the page.
    createPage(page);
  }
};
