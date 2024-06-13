function filter(a,f){
    var result=[]
    for(let i in a)
    {
        if(f(a[i])) {
          result.push(a[i])
        }
    }
    return result
}
console.log('filter=',filter([1,2,3,4], function (x) { return x%2 == 1; }))