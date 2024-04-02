function count(a) {
    var count = {}
    for (let str of a) 
    {
       if(count[str]) count[str]=count[str]+1

       else count[str]=1
    }
    return count
}
console.log(count('aabccadeaacdoooooogBBADC'))
