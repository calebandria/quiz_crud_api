const QuestionModel = require('../models/question.model');
const ThemeModel = require('../models/theme.model');

exports.create = function(req, res) {
    const theme = new ThemeModel(req.body);
    // handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({
            error: true,
            message: 'Please provide all required field'
        });
    }
    else {
        ThemeModel.create(theme, (err, them) =>{
            if(err)
                res.send(err);
            res.json({
                error:false,
                message:"Theme added successfully",
                data: them
            });
        })
    }
}

exports.findAll = function(req, res){
    ThemeModel.findAll((err, them)=>{
        if(err){
            res.send(err);
        }
        else{
            res.json({
                data:them
            })
        }
    })
}

exports.delete = function(req, res) {
    ThemeModel.delete(req.params.id, err =>{
        if(err)
            res.send(err);
        res.json({
            error: false,
            message: "Theme deleted successfully!"
        })
    })
}


exports.update = function(req, res){
    const theme = new ThemeModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({
            error:true,
            message: 'Please provide all required field'
        });
    }
    else {
        ThemeModel.update(req.params.id, theme, (err, theme)=>{
            if(err)
                res.send(err);
            res.json({
                error: false,
                message: 'Theme updated successfully',
                data:theme
            })
        })
    }
}