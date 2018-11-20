
function isValidRange(left, right){
    if(left==null || right ==null){
        return false
    }
    if(right<=left){
        return false
    }
    if(left>1000 || left<1){
        return false
    }
    if(right>1000 || right<1){
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