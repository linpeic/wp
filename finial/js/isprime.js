function isprime(n) {
    for (let i=2; i<n; i++){
        if(n%i == 0) return false
    }
    return true
}

console.log('isprime(3)=',isprime(3))
console.log('isprime(8)=',isprime(8))