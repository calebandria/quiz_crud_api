const dbConn = require('../../config/db.config');

function QuestionModel(question) {
        this.id_theme = question.id_theme;
        this.content = question.content;
}

QuestionModel.create = function(newQuest, result) {
        dbConn.query("INSERT INTO question SET ? ", newQuest, (err, res) => {
            if(err) {
                console.log("erro:",err);
                result(err,null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }

QuestionModel.delete = function(id,result) {
    dbConn.query("DELETE FROM question WHERE id_question=?",id,(err,res) =>{
        if(err){
            console.log("error:",err);
            result(err,null);
        }
        else{
            console.log("Deletion done!");
            result(null, res);
        }
    })
}

QuestionModel.update = function(id, question,result){
    dbConn.query("UPDATE question SET content=?, id_theme=? WHERE id_question=?",[question.content,question.id_theme,id], (err,res) =>{
        if(err){
            console.log("error:", err)
            result(err,null);
        }
        else{
            console.log("Update done!");
            result(null,res);
        }
    })
}

QuestionModel.find = function(id, result) {
    dbConn.query("SELECT * FROM question WHERE id_question=?", id, (err,res)=> {
        if(err){
            console.log("error:", err);
            result(err, null);
        }
        else{
            console.log("Data found");
            result(null, res);
        }
    })

}

QuestionModel.findAll = function(result) {
    dbConn.query("SELECT * FROM question", (err,res) =>{
        if(err){
            console.log("error:", err);
            result(err, null);
        }
        else{
            console.log("All the data is shown now!");
            result(null, res);
        }
    })
}
module.exports = QuestionModel;