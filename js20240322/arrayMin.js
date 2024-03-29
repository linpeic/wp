function arrayMin(a){
    var i,j,c=[],x,min
    for(i=0;i<a.length;i++)
    {
        for(j=0;j<a[i].length;j++)
        {
           if(a[i]>a[j])
           {
             x=a[i]
             a[i]=a[j]
             a[j]=x
             min=a[j]
           } 
        }
    }
    return min
}
var m=arrayMin=[2,5]
console.log('arrayMin(a,b)='+m)