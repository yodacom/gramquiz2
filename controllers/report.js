const PersonalityReport = require('../models/PersonalityReport');

exports.getReport = (req, res) => {
    let user = req.user;
    PersonalityReport
        .find({
            user:user._id
        })
        .populate('user')
        .populate('bestWords')
        .populate('personalityType')
        .exec()
        .then((report)=>{
            res.render("quiz/report", {
                report:report,
                user:user
            });
        })

};