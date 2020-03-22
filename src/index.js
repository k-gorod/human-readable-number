module.exports = function toReadable (number) {
    var number = number.toString().split("").reverse();
    var ret = [];
    

if(number.length>1){
    if(number[1]=="1"){
        ret.push(teens(number[0]));
    }else{
        ret.push(tens(number[0],number[1]));
    }
    if(number.length>2){
        ret.push(hundreds(number[2]));
    }
    if(number.length>3){
        ret.push(thousands(number[3],number[4],number[5]));
    }
}else {
    number!=0?
    ret.push(whatNumb(number)):
    ret.push("zero");
    
}




function whatNumb (n)  {
    return (
        n=="1"?"one":
        n=="2"?"two":
        n=="3"?"three":
        n=="4"?"four":
        n=="5"?"five":
        n=="6"?"six":
        n=="7"?"seven":
        n=="8"?"eight":
        n=="9"?"nine":
        ""
    )
}


function teens (n){
    n=="0"?n="ten":
    n=="1"?n="eleven":
    n=="2"?n="twelve":
    n=="3"?n="thirteen":
    n=="4"?n="fourteen":
    n=="5"?n="fifteen":
    n=="6"?n="sixteen":
    n=="7"?n="seventeen":
    n=="8"?n="eighteen":
    n=="9"?n="nineteen":
    "";
    return n;
}

function tens (n,n2)  {

    n2=="2"?n2="twenty":
    n2=="3"?n2="thirty":
    n2=="4"?n2="forty":
    n2=="5"?n2="fifty":
    n2=="6"?n2="sixty":
    n2=="7"?n2="seventy":
    n2=="8"?n2="eighty":
    n2=="9"?n2="ninety":
    n2="";
    
    if(n=="0"){
        return n2+"";
    } else {
        return (n2+" "+whatNumb(n));
    }
}

function hundreds(n){
    
    return(n!="0"?whatNumb(n)+" hundred ":"");
}

function thousands(n1,n2,n3){
    var n="";
    if(n3&&n3!="0"){
        n=hundreds(n3)
    }
    if(n2&&n2!="0"){
        if(n2=="1"){
            n+=teens(n1);
        }else if(n2){
            n+=tens(n1,n2);
        }
    }
    if(n2=="0"||!n2){
        if(n1&&n1!="0"){
            n=whatNumb(n1)+n;
        }
    }
    return n!=""?n+" thousand ":n;
}


var ret2 = "";

ret.reverse()
ret.forEach((e)=> {
    ret2+=e;
});
    if(ret2[ret2.length-1]==" "){ret2 = ret2.substr(0, ret2.length-1)}
    return ret2.replace(/\ \ /g," ");
}
