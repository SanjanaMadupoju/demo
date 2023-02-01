var a=10;
a=5;//overriding
//while loop
while(a<8){
    console.log(a);
    a++;
}
//switch case
var j="i";
swi(j);
function swi(j){
    if(true){
        switch(j){
            case "i":console.log(j);
                 break;
            case "a":console.log("a");
                 break;
            default:console.log("m");
                 break;
        }
    }
}
