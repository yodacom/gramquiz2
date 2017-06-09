/**
 * GET /
 * Coming Soon Page
 */

exports.index = (req, res) => {
  res.render('comingSoon', {
    title: 'Coming Soon'
  });
};