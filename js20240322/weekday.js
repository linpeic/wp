var w2i ={
    Monday:1,
    Tuesday:2,
    Wendnesday:3,
    Thursday:4,
    Friday:5,
    Saturday:6,
    Sunday:0,  
}
function weekday(str){
    return w2i[str]
}
let str = Deno.args[0]
console.log(str,'=', weekday(str))
