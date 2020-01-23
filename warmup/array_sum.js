function simpleArraySum(ar) {
    var total = 0;
    if(ar instanceof Array){
        for(var i=0; i<ar.length; i++){
            total += ar[i];
        }
        return total;
    }
}