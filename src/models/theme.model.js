const dbConn = require('../../config/db.config');

function ThemeModel(theme){
    this.id_theme = theme.id_theme;
    this.label = theme.label;
}

ThemeModel.create = function(newTheme, result) {
    dbConn.query("INSERT INTO theme SET ? ", newTheme , (err,res) =>{
        if(err){
            console.log("error",err);
            result(err,null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

ThemeModel.findAll = function(result){
    dbConn.query("SELECT * from theme ;", (err, res)=>{
        if(err){
            console.log("error",err);
            result(err, null);
        }
        else{
            console.log("Themes are shown");
            result(null, res);
        }
    })
}
module.exports = ThemeModel;