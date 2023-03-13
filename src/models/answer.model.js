const dbConn = require('../../config/db.config');

function AnswerModel(answer){
    this.id_answer = answer.id_answer;
    this.correct_answer = answer.correct_answer;
    this.answers = answer.answers;
    this.id_question = answer.id_question;
}


