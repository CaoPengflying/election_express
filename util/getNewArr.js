function getNewArr(rows) {
    var arr = [];
    for(var i=0; i<rows.length; i++){
        var obj = {};
        for (var row in rows[i]){
            obj[row] = rows[i][row];
        }
        arr.push(obj);
    }
    return arr;
}

module.exports = getNewArr;