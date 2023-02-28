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
                message:"Question added successfully!",
                data: quest
            });
        })
    }
}

exports.delete = function(req, res) {
    QuestionModel.delete(req.params.id, (err) => {
        if(err)
            res.send(err);
        res.json({
            error:false,
            message:"Question deleted successfully!"
        })
    })
}

exports.update = function(req, res){
    const question = new QuestionModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({
            error:true,
            message:'Please provide all required field'
        });
    }
    else {
        QuestionModel.update(req.params.id,question, (err,quest) => {
            if(err)
                res.send(err);
            res.json({
                error: false,
                message:'Question updated successfully!',
                data:quest
            })
        })
    }
}

exports.find = function(req, res){
    QuestionModel.find(req.params.id, (err,quest) => {
        if(err)
            res.send(err);

        else{
            res.json({
                data: quest
            })
        } 
    })
}

exports.findAll = function(req, res){
    QuestionModel.findAll((err,quest) => {
        if(err)
            res.send(err);

        else{
            res.json({
                data: quest
            })
        } 
    })
}
