function daysinyear(n){
    if(n%4==0 && n%100!=0){
        return 366
    }
    else if(n%400==0){
            return 366
    }
    else return 365
    }
console.log('daysinyear(1991)=',daysinyear(1991))
console.log('daysinyear(2000)=',daysinyear(2000))
console.log('daysinyear(2004)=',daysinyear(2004))
console.log('daysinyear(1990)=',daysinyear(1990))