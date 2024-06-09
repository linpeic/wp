function arrayMin(c){
    var i,min=c[0]
    for(i=0;i<c.length;i++)
    {
      if(c[i]<min){
        min=c[i]
      } 
    }
    return min
}
var m=[7,5,2,8]
console.log('min =',arrayMin(m))