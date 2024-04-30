class Day{
     day(){
        var a = new Date() 
        var d =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var c = d[a.getDay()]
        console.log(d[a.getDay()]);
        document.querySelector("h1").innerHTML=c
    }
     
}
var day = new Day();
// day.day();