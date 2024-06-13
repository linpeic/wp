function isprime(n) {
    for (let i=2; i<n; i++){
        if(n%i == 0) return false
    }
    return true
}
let c=0
function sumprime(n){
    
    for(let i=2;i<=n;i++){
        if (isprime(i)){
            c=c+i;
        }
    }
}
sumprime(7)
console.log('sum=',c)