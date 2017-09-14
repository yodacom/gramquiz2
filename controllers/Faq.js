/**
 * GET /
 * Frequently asked Questions
 */

exports.index = (req, res) => {
  res.render('Faq', {
    title: 'Faq'
  });
};
