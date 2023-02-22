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

module.exports = QuestionModel;

  /*   findAll(result){
        dbConn.query("SELECT * FROM question", (err, res) =>{
            if(err){
                console.log("error: ",err);
                result(null,err);
            }
            else{
                console.log("employees:", res);
                result(null, res);
            }
        })
    } */
