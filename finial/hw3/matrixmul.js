function matrixmul(a,b){
    var i,j,sum=[]
    for(i=0;i<a.length;i++)
    {
        sum[i]=[]
        for(j=0;j<a[i].length;j++)
        {
            sum[i][j]=a[i][j]*b[i][j]
        }
    }
    return sum
}
console.log(matrixmul([[1,2],[3,4]],[[5,6],[7,8]]))