
function isValidRange(left, right){
    if(left==null || right ==null){
        return false
    }

    return true
    
}
function mutiplyTable (left, right) {
    
    if(!isValidRange(left,right)){
        return null
    }

    padding = right.toString().length*2+(right*right).toString().length+3

    var text =""
    for(var i=left; i<=right; i++){
        for(var j=left;j<=right&&j<=i;j++){
             text+=(j+"*"+i+"="+i*j).padEnd(padding)
        }
        text+="\n"
    }
    
    return text;
}

module.exports = mutiplyTable;