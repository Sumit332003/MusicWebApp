// console.log('print me');

function abc(){
    console.log('Parent');
    

    function c(){
   globalThis= console.log("parentinside");
    }
    return c;
    function d(){
        console.log('function D');
        
    }

    // d();
}
var a =abc();
// var b = abc();
a();
// var ac = console.log("parentout");

// console.log(globalThis);

// b();



class ABC{
    s=  console.log('print me');
    function namec() {
     d=   console.log('print me');
        
    }
    namec();

}
 var a = new ABC()
//  a.name()