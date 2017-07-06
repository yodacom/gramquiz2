const PersonalityReport = require('../models/PersonalityReport');

exports.getReport = (req, res) => {
    //TODO: Load up the report from DB
    let user = req.user;
    PersonalityReport
        .find({
            user:user._id
        })
        .populate('user', 'bestWords')
        .exec()
        .then((report)=>{
            res.render("quiz/report", {
                report:report,
                user:user
            });
        })

};