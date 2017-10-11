const PersonalityReport = require("../models/PersonalityReport");
const PersonalityMatrix = require("../models/PersonalityMatrix");
const TypeReport = require("../models/TypeReport");

exports.performAnalysis = (req, res) => {
  const quiz_id = req.query.quiz;
  PersonalityReport.findById(quiz_id)
    .populate("bestWords")
    .exec((err, quiz) => {
      let bestWords = quiz.bestWords;
      const count = function(ary, classifier) {
        return ary.reduce((counter, item) => {
          const p = (classifier || String)(item);
          counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
          return counter;
        }, {});
      };

      const countByPrimary = count(bestWords, item => item.primary_group);

      // Count the primary and find the one with the highest count
      const primary = Object.keys(countByPrimary).reduce(
        (acc, curr) => {
          return countByPrimary[curr] > acc[1]
            ? [curr, countByPrimary[curr]]
            : acc;
        },
        ["", -1]
      )[0];

      const secondaryWords = bestWords.filter(word => {
        return word.primary_group === primary;
      });

      const countBySecondary = count(
        secondaryWords,
        item => item.secondary_group
      );

      const secondary = Object.keys(countBySecondary).reduce(
        (acc, curr) => {
          return countBySecondary[curr] > acc[1]
            ? [curr, countBySecondary[curr]]
            : acc;
        },
        ["", -1]
      )[0];

      const centerWords = bestWords.filter(word => {
        return word.secondary_group === secondary;
      });

      const countByCenter = count(centerWords, item => item.center);

      const center = Object.keys(countByCenter).reduce(
        (acc, curr) => {
          return countByCenter[curr] > acc[1]
            ? [curr, countByCenter[curr]]
            : acc;
        },
        ["", -1]
      )[0];

      PersonalityMatrix.findOne(
        {
          primary: primary,
          secondary: secondary
        },
        (err, matrix) => {
          if (err) {
            return res.json({ "message:": err });
          }

          TypeReport.findOne(
            {
              typeNumber: matrix.type
            },
            (err, report) => {
              quiz.personalityType = report;
              quiz.save(err => {
                res.json(report);
              });
            }
          );
        }
      );
    }); //closes findById
}; //closes performAnalysis function

function getPersonalityType() {}

function getCenter() {
  let highestCenter = "";
  if (this.countByCenter.FE > this.countByCenter.IN) {
    highestCenter = "FE";
  } else {
    highestCenter = "IN";
  }
  if (this.countByCenter.TH > this.countByCenter[highestCenter]) {
    highestCenter = "TH";
  }
  this.center = highestCenter;
  return this.center;
}

function getPrimary() {
  let highestPrimary = "";
  if (this.countByPrimary.B > this.countByPrimary.G) {
    highestPrimary = "B";
  } else {
    highestPrimary = "G";
  }
  if (this.countByPrimary.R > this.countByPrimary[highestPrimary]) {
    highestPrimary = "R";
  }
  this.primary = highestPrimary;
  return this.primary;
}

function getSecondary() {
  this.secondary = Object.keys(this.countBySecondary).reduce((acc, curr) => {
    return this.countBySecondary[curr] > this.countBySecondary[acc]
      ? curr
      : acc;
  });
  return this.secondary;
}

function getType() {
  return TypeMatrix.find(T => {
    return T.primary === this.primary && T.secondary == this.secondary;
  }).type;
}

function getReport() {
  return TypeReport[this.getType()];
}

class PersonalityType {
  constructor(primary, secondary, central) {
    this.primary = primary;
    this.secondary = secondary;
    this.central = central;
    this.type = {
      B: {
        b: 6,
        l: 5,
        w: 7
      },
      G: {
        g: 3,
        f: 2,
        t: 4
      },
      R: {
        r: 9,
        o: 1,
        p: 8
      }
    };
  }

  getPersonalityType() {
    return this.type[this.primary][this.secondary];
  }
}
