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
ThemeModel.delete = function(id, result){
    dbConn.query("DELETE FROM theme WHERE id_theme=?", [id], (err, res)=>{
        if(err){
            console.log("error:", err);
            result(err, null);
        }
        else{
            console.log("Deletion theme done!");
            result(null, res)
        }
    })
}

ThemeModel.update = function(id, theme, result){
    dbConn.query("UPDATE theme SET label=? WHERE id_theme=?", [theme.label, id], (err, res)=>{
        if(err){
            console.log("error:", err)
            result(err, null);
        }
        else{
            console.log("Update done!");
            result(null, res);
        }
    })
}
module.exports = ThemeModel;