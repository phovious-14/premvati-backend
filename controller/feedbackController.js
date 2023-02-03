const {feedbackModel} = require('../model/feedback')

exports.add = async (req, res) => {
    const { 
        age,
        gender,
        order,
        qualityfood,
        tasteoffood,
        servingmethod,
        staffbehave,
        cleanliness,
        likedproduct,
        suggestion,
        contactnumber
    } = req.body
    var userDetails = new feedbackModel({
        age,
        gender,
        order,
        qualityfood,
        tasteoffood,
        servingmethod,
        staffbehave,
        cleanliness,
        likedproduct,
        suggestion,
        contactnumber,
        cityId
    });
    userDetails.save((err, doc) => {
        if (!err) {
            res.json({data: 'added'}).status(200)
        }
        else {
            console.log('Error during record insertion : ' + err);
        }
    })
}

exports.get = async (req, res) => {
    feedbackModel.find((err, docs) => {
        if (!err) {
            return res.json({data:docs});
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
}