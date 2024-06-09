var w2i ={
    Monday:1,
    Tuesday:2,
    Wendnesday:3,
    Thursday:4,
    Friday:5,
    Saturday:6,
    Sunday:0,  
}
let we=[]
function weekday(week){
    return w2i[we]
}
let week = Deno.args[0]
console.log(we,'=', weekday(week))
