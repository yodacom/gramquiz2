/**
 * GET /
 * Profiles overview Page
 */

exports.index = (req, res) => {
  res.render('profilesOverview', {
    title: 'profilesOverview'
  });
};