function mutiplyTable (left, right) {
    if(right<left){
        return null
    }
    
    var text =""
    for(var i=left; i<=right; i++){
        for(var j=left;j<=right&&j<=i;j++){
            text+=j+"*"+i+"="+i*j+"  "
        }
        text+="\n"

    }
    return text;
}

module.exports = mutiplyTable;