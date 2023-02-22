const QuestionModel = require('../models/question.model');


 exports.create = function(req, res) {
    const question = new QuestionModel(req.body);
    // handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({
            error:true,
            message:'Please provide all required field'
        });
    }
    else {
        QuestionModel.create(question, (err, quest) => {
            if (err)
                res.send(err);
            res.json({
                error:false,
                message:"Employee added successfully!",
                data: quest
            });
        })
    }
}