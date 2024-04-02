function gcd(a , b){
    
    var temp
    if(a<b)
    {
        temp=a
        a=b
        b=temp
    }
    for(let i=a;i>0;i--)
    {
        if(a%b==0)
        {
            return b
        }
    }  
    if(b==0) return a
    else return gcd(b,a%b)
}
console.log(gcd(55,801))


