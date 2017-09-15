/**
 * GET /
 * Frequently asked Questions
 */

exports.index = (req, res) => {
  res.render('faq', {
    title: 'faq'
  });
};
