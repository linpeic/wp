function vectoradd(a,b){
    var i,sum=[]
    for(i=0;i<a.length;i++)
    {
        sum[i]=a[i]+b[i]
    }
    return sum
}
console.log(vectoradd([1,2,3,4],[5,6,7,8]))