 function aboutFun(){
   let aboutpage = document.querySelector(".AboutPage");
   let App_Contaner = document.querySelector(".App_Contaner");

   aboutpage.style.display="flex";
   App_Contaner.style.display="none";
 }
//  aboutPage();
function backfromAboutpg(){
   let aboutpage = document.querySelector(".AboutPage");
   let App_Contaner = document.querySelector(".App_Contaner");

   aboutpage.style.display="none";
   App_Contaner.style.display="flex";
}
class Day{
   day(){
      var a = new Date() 
      var d =["Sun day -","Mon day -","Tue sday -","Wed nesday ","Thu rsday","Fri day -","Sat urday "];
      var c = d[a.getDay()]
      console.log(d[a.getDay()]);
      document.querySelector(".rightText h1").innerHTML=c
  }

  clicktoenter(){
  var btn = document.querySelector(".enter-bttn")
  var second = document.querySelector(".App_Contaner");
  var frontPage=document.querySelector(".mobileView");
  btn.addEventListener("click", function(){
      second.style.display="flex";
      frontPage.style.display="none";
   })
  }

  clickIcons(){
      var home= document.querySelector(".boxe .home")
      var music = document.querySelector(".music")
      var videos = document.querySelector(".fill-video")

      var frontPage=document.querySelector(".mobileView");
      var AppContaner= document.querySelector(".App_Contaner")
      var AlbumPage = document.querySelector("#albumPage")
   //   var videoPage =  document.querySelector(".")

      //home icon event
      home.addEventListener("click", function(){
         AppContaner.style.display="flex";
         frontPage.style.display="none";
      })

      //music icon event
      music.addEventListener("click", function(){
         AlbumPage.style.display="flex";
         frontPage.style.display="none";
      })
      

  }
}
//calling with the help of class Object
var day = new Day();
day.day();
day.clicktoenter();
day.clickIcons();

function overlayPage(){

 
   var them1 = document.querySelector(".Theam-circle1");
   var them2 = document.querySelector(".Theam-circle2");
   var them3 = document.querySelector(".Theam-circle3");
   var them4 = document.querySelector(".Theam-circle4");

   var frontPage=document.querySelector(".mobileView");
   var AppContaner= document.querySelector(".App_Contaner")
   var AlbumPage = document.querySelector("#albumPage")
   var DisplayPage=document.querySelector(".Display-songs-contaner");
   var MailPage=document.querySelector(".Mail-page");


   them1.addEventListener("click", function(){
      AppContaner.style.display="none";
      frontPage.style.display="block";
      them1.style.backgroundColor="lightgreen";
   })

   them2.addEventListener("click", function(){
      AlbumPage.style.display="none";
      frontPage.style.display="block";
      them2.style.backgroundColor="lightgreen";
   })

   them3.addEventListener("click", function(){
      DisplayPage.style.display="none";
      frontPage.style.display="block";
      them3.style.backgroundColor="lightgreen";
   })

   them4.addEventListener("click", function(){
      MailPage.style.display="none";
      frontPage.style.display="block";
      them4.style.backgroundColor="lightgreen";
   })

}
overlayPage();


var arr2=[
      {songName:"Bulleya", url:"./Songs/Bulleya.mp3" , image:"./imgs/bulleya.jpg" ,duration:"4:37",video:"./videos/Bulleya.mp4" , videoImage:"./imgs/bulleya.jpg"},
      {songName:"Chhote Chhote Peg", url:"./Songs/Chhote Chhote Peg.mp3" , image:"./imgs/peg.jpg" ,duration:"4:37",video:"./videos/Chhote Chhote Peg.mp4" , videoImage:"./imgs/peg.jpg"},
      {songName:"Kar Har Maidaan Fateh", url:"./Songs/KAR HAR MAIDAAN FATEH.mp3" , image:"./imgs/sanju.jpg" ,duration:"4:37",video:"./videos/KAR HAR MAIDAAN FATEH.mp4" , videoImage:"./imgs/sanju.jpg"},
      {songName:"Thank You God", url:"./Songs/Thank You God.mp3" , image:"./imgs/god.jpg" ,duration:"4:37",video:"./videos/Thank You God.mp4" , videoImage:"./imgs/god.jpg"},
      {songName:"Udta Parinda", url:"./Songs/Udta Parinda.mp3" , image:"./imgs/Udta_Parinda.jpg" ,duration:"4:37",video:"./videos/Udta Parinda.mp4" , videoImage:"./imgs/trans.png"},
   {songName:"Marham",url:"./Songs/Marham.mp3" , image:"./imgs/marham.jpg" ,duration:"1:53", video:"./videos/Marham.mp4"},
   {songName:"Aarzoo",url:"./Songs/Aarzoo.mp3" , image:"./imgs/Aarzoo.png",duration:"3:24", video:"./videos/Aarzoo - One - Take Music Video _ @IqlipseNova.mp4", videoImage:"./imgs/trans.png"},
   {songName:"Kaash Aisa Hota",url:"./Songs/Kaash1.mp3" , image:"./imgs/kaash.png",duration:"3:32" , video:"./videos/Kaash Aisa Hota.mp4"},
     {songName:"Apna Bna Le",url:"./Songs/Apna.mp3" , image:"./imgs/apena.png" ,duration:"3:24", video:"./videos/Apna Bana Le.mp4"},
   {songName:"Dil Jhoom",url:"./Songs/Jhoom.mp3" , image:"./imgs/jhoom.png",duration:"5:00", video:"./videos/Dil Jhoom.mp4"},
   {songName:"Malang",url:"./Songs/Malang.mp3" , image:"./imgs/malang.png",duration:"4:47", video:"./videos/Malang.mp4"},
   {songName:"Naina Da Kya Kasoor",url:"./Songs/NainaDaKyaKasoor.mp3" , image:"./imgs/nainaDa.png",duration:"3:48", video:"./videos/Naina Da Kya Kasoor.mp4"},
   {songName:"Raatan Lambiyan",url:"./Songs/RaatanLambiyan.mp3" , image:"./imgs/raatan.png",duration:"3:50", video:"./videos/Raataan Lambiyan.mp4"},
   // {songName:"Tere Naal",url:"./Songs/TereNaal.mp3" , image:"./imgs/naal.png",duration:"3:18"},
   // {songName:"Udd Jaa Kaale Kaava",url:"./Songs/UddJaaKaaleKaava.mp3" , image:"./imgs/heart1.jpg",duration:"3:24"},
   // {songName:"Ok_Jaanu",url:"./Songs/okJaanu1.mp3" , image:"./imgs/okJaanu.png",duration:"3:25"},
   // {songName:"Tere Pyar Mein",url:"./Songs/Tere_Pyar1.mp3" , image:"./imgs/pyarMain.png",duration:"2:57"},
        // {songName:"Hua Main", url:"./Songs/HuaMain.mp3" , image:"./imgs/huaMain.jpg" ,duration:"4:37",video:"./videos/Pehle Bhi Main.mp4" , videoImage:"./imgs/trans.png"},
   // {songName:"Lovely",url:"./Songs/Lovely.mp3" , image:"./imgs/lovely.png",duration:"3:20", video:"./videos/vid3.mp4"},
   // {songName:"Khwab",url:"./Songs/Khwab1.mp3" , image:"./imgs/khwab.png",duration:"2:38" , video:"./videos/vid5.mp4"},
 // {songName:"Haareya Meri Pyaari Bindu",url:"./Songs/HaareyaMeriPyaariBindu.mp3" , image:"./imgs/heeriye.png" ,duration:"3:34", video:"./videos/vid7.mp4"},
   // {songName:"Haaye Oye",url:"./Songs/HaayeOye.mp3" , image:"./imgs/oye.png",duration:"3:20" , video:"./videos/hi.mp4"},
   // {songName:"Kalavathi",url:"./Songs/Kalavathi.mp3" , image:"./imgs/kalavathi.png",duration:"4:14"},  
   // {songName:"Dil Diya Gallan",url:"./Songs/Dil.mp3" , image:"./imgs/diyan.png",duration:"4:20"},
   // {songName:"Main Raat Din Dua Karu",url:"./Songs/RaatDinDuaKaru.mp3" , image:"./imgs/raatDin.png",duration:"4:23"},

   {songName:"Falak Tu Garaj Tu", url:"./Songs/Falak Tu Garaj Tu.mp3" , image:"./imgs/kgf2.png" ,duration:"4:37",video:"./videos/Falak Tu Garaj Tu.mp4" , videoImage:"./imgs/kgf2.png"},
     
];


var a =document.querySelector(".music_List_Contaner");
var audio = new Audio();

var selectedSong = 0;
function mainFunction(){
var clutter =""
arr2.forEach(function(elm,index){

      clutter = clutter + `<div class="music_Box" id=${index}>
      <div class="leftDetails">
       <div class="number"><p>01</p></div>
       <div class="imgCircle"><img src="${elm.image}"></div>
       <div class="SongName">
           <h3>${elm.songName}</h3>
           <p>Achie</p>
       </div>

      </div>
      <div class="playBottom">
        <div class="play">      
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
        </div>
        <div class="pause">                
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>
        </div>
      </div>
   </div>
`  
})

a.innerHTML=clutter;
audio.src = arr2[selectedSong].url
//
document.querySelector(".videos").innerHTML=`<video  id="myVideo" controls muted loop  poster="${arr2[selectedSong].image}" >
<source src="${arr2[selectedSong].video}" type="video/mp4">
</video>
<div class="overlay"><img src="${arr2[selectedSong].image}"></div>
`

console.log(clutter);
 
//LEFT IMADE AND VIDEO CONTANER
function leftVideoontaner(){
   document.querySelector(".left_TextContaner").
innerHTML=`<div class="cover_contaner">
<h1>${arr2[selectedSong].songName}</h1>
<div class="someFavratesorWhat">
    <div class="lineDefault"></div>
</div>
<p>About songs:
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptas expedita totam eius, quos tempora ipsum quisquam, voluptate dolores ad eveniet aspernatur illo iusto odio corporis laboriosam sed quae est?
</p>
<div class="btns">
   
    <div class="playideoBtn"onclick="playPause()"><h5 id="vidBtn">Play Now </h5><div class="playBottom" id="playBottom">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>
    </div>

</div>
 <div id="downloadvideoBtn"><a href="${arr2[selectedSong].video}" download="${arr2[selectedSong].songName}">
 <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z"></path></svg></h2>
 </a>
 </div>

 

</div>

</div>`
}
leftVideoontaner();

function playBox(){
   
document.querySelector(".leftImageContaner").innerHTML=`<img src="${arr2[selectedSong].image}" alt="">`
 document.querySelector(".SongContent h4").innerHTML=`<h4>${arr2[selectedSong].songName}</h4>`
document.querySelector(".heart").innerHTML=`<a href="${arr2[selectedSong].url}" download="${arr2[selectedSong].songName}">
<h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z"></path></svg></h1>
</a>`


}
 playBox();
}
mainFunction();

 a.addEventListener("click", function(dets){
   selectedSong=dets.target.id
   mainFunction();
   document.querySelector(".PlayPauseBtn").innerHTML= `<h1>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>

   </h1>`
   flag =1;
      audio.play();
   f=2;
   if(f==2){
      document.querySelector(".play").style.display="none";
      document.querySelector(".pause").style.display="block";
      f=2;
   

   }
   else 
   {
      document.querySelector(".play").style.display="block";
      document.querySelector(".pause").style.display="none";
     

   }
  })

 var p = document.querySelector(".PlayPauseBtn");
 var flag = 0;

p.addEventListener("click", function(){
   if(flag == 0)
   {
     p.innerHTML= `<h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg></h1>`
      mainFunction();
      audio.play();
      flag=1;
   }
  else{
    audio.pause();
     p.innerHTML= `<h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg></h1>`
      mainFunction();
   
   flag=0;
  }

})

// // function videoBtn(){
//    var v = document.querySelector(".playideoBtn");
//    var va = document.querySelector("#vidBtn");
//    var vb = document.querySelector(".playBottom");
//    var flag = 0;
   
//    v.addEventListener("click", function(){
//      if(flag == 0)
//      {
      
//       //  va.textContent="Pause"
//         mainFunction();
//         audio.play();
//         flag=1;
//      }
//     else{
//       audio.pause();
//       // va.textContent="Pla"
//       // va.innerHTML=`<h4>Play Now </h4>`
//       // va.textContent= "Play"
//         mainFunction();
     
//      flag=0;

//     }
   
//    })
// // }
// // videoBtn();

var forward = document.querySelector(".forward")
var backward = document.querySelector(".backward")

forward.addEventListener("click", function(){
   console.log('print me');
   
   if(selectedSong < arr2.length - 1){
      selectedSong++
      mainFunction();
      audio.play()
      backward.style.opacity =1;
      p.innerHTML= `<h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg></h1>`
   }
   else{
      forward.style.opacity =0.4;

   }
})

// backward song shift
backward.addEventListener("click", function(){
   console.log('print me');
   
   if(selectedSong >0){
      selectedSong--
      mainFunction();
      audio.play()
      forward.style.opacity =1;
      p.innerHTML= `<h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg></h1>`
   }
   else{
      backward.style.opacity =0.4;
   }
})
 
 
var select = document.querySelector('.playideoBtn');
flag = 1;
 
function playPause(){
   var video = document.querySelector("#myVideo");
      if (flag==1){
        
            video.play();
            video.muted=false;
            document.querySelector(".content").style.display="none"
            document.querySelector(".playideoBtn h5").textContent="Play"
            document.querySelector("#playBottom").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>`
            document.querySelector(".videos").style.position="absolute";
            document.querySelector(".videos").style.top=" 50%";
            document.querySelector(".videos").style.left="50%";
            // // document.querySelector(".videos").style.height="700px";
            // document.querySelector(".videos").style.width="720px";
            document.querySelector(".videos").style.transform= "translate(-50%, -50%)";
            document.querySelector(".overlay").style.display="none";
            audio.pause();//Audio will be pause when we'll click on video Paly btn
            

            flag=0;
         }
        
         else{
            video.pause();
            document.querySelector(".playideoBtn h5").textContent="Pause";
            document.querySelector("#playBottom").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>`
            flag=1;
         }
      }



function backtoPage(){
document.querySelector(".h4")
.addEventListener("click",function(){
   
   document.querySelector(".overlay").style.display="block";
   document.querySelector(".videos").style.position="relative";
   playPause().video.pause();
 })
}
backtoPage();


function AlbumContaner(){
   var clutte=""
   var topVideo = document.querySelector(".Albume_Contaner")
   arr2.forEach(function(obj,ind){
      clutte=clutte+`<div class="changeContaner" id=${ind}>
      <img src="${obj.image}" alt="">
      <div class="songAndArtist">
          <div class="nameSon">
              <h5>${obj.songName}</h5>
          <h6 >Arjit Singh</h6>
          </div>
          <div class="download">
          <a href="${obj.url}" download="${obj.songName}">
        <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg></h2>
   </a>
          </div>
      </div>
      </div>`
   })
   topVideo.innerHTML=clutte;
   fa=0;
   document.querySelector("#changeContaner")
    
   
}
// AlbumContaner()


function functionofgsap(){

      var finsh = gsap.timeline();
        
      finsh.to(".text h1",{
        opacity:1,
        stagger:.2,
        
      
         }) 
      finsh.to(".text h1",{
      opacity:0,
        stagger:.2,
       color:"red",
      
       }) 
}
//functionofgsap();


function LoginPage(){
   var loginPage = document.querySelector(".Video-Fist-Page");
   var mobileviewPage = document.querySelector(".mobileView")
   var App_Contaner = document.querySelector(".App_Contaner");
   var albumPage = document.querySelector("#albumPage")
   var uname = document.querySelector("#Uname");
   var pass = document.querySelector("#pass");
   var btns = document.querySelector("#btn");
    

   btns.addEventListener("click", function(){
     
         if(uname.value == "" || pass.value == ""){
            alert("Sorry, you can't go forward please provide details.")
            
            return false;
         }
         else{
            loginPage.style.display="none";
            mobileviewPage.style.display="flex";
            // App_Contaner.style.display="flex";
            // albumPage.style.display="none";
         }
   })
  
var namePrint = document.querySelector(".Header_Name h5")

   uname.addEventListener("input", function(){
      console.log(uname.value);
      namePrint.textContent="Hi, " + uname.value;
   })



}
LoginPage()


function menuBar(){
var album = document.querySelector("#album");
var fun = document.querySelector("#catego");
var mail = document.querySelector("#mail");
var about = document.querySelector("#about");
var feedback = document.querySelector("#feedback");
var App_Contaner = document.querySelector(".App_Contaner");
var albumPage = document.querySelector("#albumPage");
var displayPage = document.querySelector("#Display-songs-contaner");
var mailPage = document.querySelector(".Mail-page");


album.addEventListener("click", function(){
   App_Contaner.style.display= "none";
   albumPage.style.display= "flex";
   mailPage.style.display= "none";
})

catego.addEventListener("click", function(){
   App_Contaner.style.display= "none";
   displayPage.style.display= "flex";
   mailPage.style.display= "none";
})


mail.addEventListener("click", function(){
   App_Contaner.style.display= "none";
   displayPage.style.display= "none";
   mailPage.style.display= "flex";
})



}
menuBar()

function fun(){
   var home = document.querySelector("#Home");
   var App_Contaner = document.querySelector(".App_Contaner");
   var albumPage = document.querySelector("#albumPage");
  
home.addEventListener("click", function(){
   albumPage.style.display= "none";
   App_Contaner.style.display= "flex";
   })
}
fun();

function func(){
   var displayPage = document.querySelector("#Display-songs-contaner");
   var App_Contaner = document.querySelector(".App_Contaner");

document.querySelector("#HOME")
.addEventListener("click", function(){
      displayPage.style.display="none";
      App_Contaner.style.display="flex";

   })
}
func(); 


function  DisplayUnderPage(){
var oneDisp = document.querySelector("#songs-contaneer-displayONE");
var twoDisp = document.querySelector("#songs-contaneer-displayTWO");
var threeDisp = document.querySelector("#songs-contaneer-displayTHREE");
var fourDisp = document.querySelector("#songs-contaneer-displayFOUR");
var fiveDisp = document.querySelector("#songs-contaneer-displayFIVE");
var sixDisp = document.querySelector("#songs-contaneer-displaySIX");

var love = document.querySelector("#love");
var sad = document.querySelector("#sad");
var crazy = document.querySelector("#crazy");
 var loveenergy = document.querySelector("#loveenergy");
 var feel = document.querySelector("#feel");
 var hot = document.querySelector("#hot");

// var remix = document.querySelector("#remix");


love.addEventListener("click", function(){
   oneDisp.style.display="flex"
   twoDisp.style.display="none";
   threeDisp.style.display="none";
   fourDisp.style.display="none"
   fiveDisp.style.display="none"
   sixDisp.style.display="none"



})

sad.addEventListener("click", function(){
  
   threeDisp.style.display="none";
   oneDisp.style.display="none";
   twoDisp.style.display="flex";
   fourDisp.style.display="none";
   fiveDisp.style.display="none";
   sixDisp.style.display="none"

})

crazy.addEventListener("click", function(){
   threeDisp.style.display="flex"
   oneDisp.style.display="none";
   twoDisp.style.display="none";  
   fourDisp.style.display="none"
   fiveDisp.style.display="none"
   sixDisp.style.display="none"
})

loveenergy.addEventListener("click", function(){
   fourDisp.style.display="flex"
   threeDisp.style.display="none"
   oneDisp.style.display="none";
   twoDisp.style.display="none";  
   fiveDisp.style.display="none"
   sixDisp.style.display="none"
})

feel.addEventListener("click", function(){
   fiveDisp.style.display="flex"
   fourDisp.style.display="none"
   threeDisp.style.display="none"
   oneDisp.style.display="none";
   twoDisp.style.display="none";   
   sixDisp.style.display="none"
})


hot.addEventListener("click", function(){
   fiveDisp.style.display="none"
   fourDisp.style.display="none"
   threeDisp.style.display="none"
   oneDisp.style.display="none";
   twoDisp.style.display="none";   
   sixDisp.style.display="flex"
})

}
DisplayUnderPage();


// ALBUM PAGE 
var arr4 = [
   {albumName:"Love", im:"./imgs/marham.jpg" ,id:"oneB"},
   {albumName:"Sad", im:"./imgs/kaash.png", id:"twoB"},
   {albumName:"Crazy", im:"./imgs/malang.png" , id:"threeB"},
   {albumName:"LoveEnergy", im:"./imgs/haareya.png", id:"fourB"},
   {albumName:"Feel", im:"./imgs/bulleya.jpg", id:"fiveB"},
   {albumName:"Hot", im:"./imgs/peg.jpg", id:"sixB" },

]

function AlbumPageCard(){    
  
var a= document.querySelector(".bodyCover");

var clutte=""
arr4.forEach(function(obj, index){
   clutte=clutte+ `<div class="card-Contaner">
   <div class="top-Img-contaner">
       <div class="image-contaner">
            <img src="${obj.im}" alt="">
       </div>
       <div class="top-Img-contaner_Overlay">
       <h1>${obj.albumName}</h1>
       <h1>songs</h1>
       <p>Ft. a.....rman</p>
       </div>
   </div>

   <div class="bottom-play-contaner">
       <div class="play-circle-btn" id="${obj.id}">Enter</div>
   </div>
</div>`
})

console.log(clutte +' print me');
a.innerHTML=clutte;
var imgContaner = document.querySelector(".top-Img-contaner");
}
AlbumPageCard();




function enter(){
   var oneDisp = document.querySelector("#songs-contaneer-displayONE");
   var twoDisp = document.querySelector("#songs-contaneer-displayTWO");
   var threeDisp = document.querySelector("#songs-contaneer-displayTHREE");
   var fourDisp = document.querySelector("#songs-contaneer-displayFOUR");
   var fiveDisp = document.querySelector("#songs-contaneer-displayFIVE");
   var sixDisp = document.querySelector("#songs-contaneer-displaySIX");

   var love = document.querySelector("#love");
   var sad = document.querySelector("#sad");
   var crazy = document.querySelector("#crazy");
   var loveenergy = document.querySelector("#loveenergy");
   var feel = document.querySelector("#feel");
   var hot = document.querySelector("#hot");
   // var enter1 = document.querySelector(".play-circle-btn")
   var enter1 = document.querySelector("#oneB")
   var enter2 = document.querySelector("#twoB")
   var enter3 = document.querySelector("#threeB")
   var enter4 = document.querySelector("#fourB")
   var enter5 = document.querySelector("#fiveB")
    var enter6 = document.querySelector("#sixB")

   var albumPage = document.querySelector("#albumPage")

      

   enter1.addEventListener("click", function(){
      enter1.style.backgroundColor="lightseagreen"
      oneDisp.style.display="flex";
      albumPage.style.display="none";
      document.querySelector(".Display-songs-contaner").style.display="flex"
     love.style.color="white"

     fiveDisp.style.display="none"
     fourDisp.style.display="none"
     threeDisp.style.display="none"
      twoDisp.style.display="none";   
     sixDisp.style.display="none"

   })

   enter2.addEventListener("click", function(){
      enter2.style.backgroundColor="lightseagreen"

      twoDisp.style.display="flex";
      albumPage.style.display="none";
      document.querySelector(".Display-songs-contaner").style.display="flex"
     sad.style.color="white"
     oneDisp.style.display="none";
     fiveDisp.style.display="none"
     fourDisp.style.display="none"
     threeDisp.style.display="none"
    sixDisp.style.display="none"


   })

   enter3.addEventListener("click", function(){
      enter3.style.backgroundColor="lightseagreen"

      threeDisp.style.display="flex";
      albumPage.style.display="none";
      document.querySelector(".Display-songs-contaner").style.display="flex"
      loveenergy.style.color="white"

      oneDisp.style.display="none";
      fiveDisp.style.display="none"
      fourDisp.style.display="none"
       twoDisp.style.display="none";   
      sixDisp.style.display="none"
   })

   enter4.addEventListener("click", function(){
      enter4.style.backgroundColor="lightseagreen"

      fourDisp.style.display="flex";
      albumPage.style.display="none";
      document.querySelector(".Display-songs-contaner").style.display="flex"
      crazy.style.color="white"

      oneDisp.style.display="none";
      fiveDisp.style.display="none"
      threeDisp.style.display="none"
       twoDisp.style.display="none";   
      sixDisp.style.display="none"
   })

   enter5.addEventListener("click", function(){
      enter5.style.backgroundColor="lightseagreen"


      fiveDisp.style.display="flex";
      albumPage.style.display="none";
      document.querySelector(".Display-songs-contaner").style.display="flex"
      feel.style.color="white"

      oneDisp.style.display="none";
      fourDisp.style.display="none"
      threeDisp.style.display="none"
       twoDisp.style.display="none";   
      sixDisp.style.display="none"
   })

   enter6.addEventListener("click", function(){
      enter6.style.backgroundColor="lightseagreen"

      sixDisp.style.display="flex";
      albumPage.style.display="none";
      document.querySelector(".Display-songs-contaner").style.display="flex"
      hot.style.color="white"

      oneDisp.style.display="none";
      fiveDisp.style.display="none"
      fourDisp.style.display="none"
      threeDisp.style.display="none"
       twoDisp.style.display="none";   
   })

}
enter()

// document.querySelector(".Display-songs-contaner")
// document.querySelector(".Display-songs-contaner")
// document.querySelector(".play-circle-btn")
// .addEventListener("click", function(){
//    document.querySelector(".Display-songs-contaner").style.display="flex"
//    document.querySelector(".play-circle-btn").style.backgroundColor="black"
//    document.querySelector("#albumPage").style.display="none"
// })


function loginPageGsap(){
   gsap.to(".leftDoor",{
      //   delay:1,
         transform:" rotateY(80deg)",   
         transition:" 1.5s",
         width: "30%",
           })
     gsap.to(".rightDoor",{
       //  delay:1,
         transform: "rotateY(-80deg)",
         transition:" 1.5s",
         width: "30%",
         })

setInterval(function(){   
               var finsh = gsap.timeline();
             
               finsh.to(".content",{
                  opacity:1,
                  zIndex:2,
               })
               finsh.to(".textAnimation h2",{
                 opacity:1,
                 stagger:.2,
                 repeat:-1,
     
                  }) 
              finsh.to(".textAnimation h2",{
               opacity:0,
                 stagger:.2,
               color:"red",
               
                }) 
},2000)

           
     
 }

//  loginPageGsap()


function catogary(){
   function albumSongsPage(){

      var arr=[
         // {link:"https://drive.google.com/file/d/1Nnnn-zcxJ6pEPO7AOIx83C1asptJQhwX/view?usp=drive_link", songName:"God", url:"./Songs/Apna.mp3"},
        
   
      ]
      var a= ""
   
   arr2.forEach(function(obj, index){
   
         a=a +`<div class="Singlesong-contaner" id=${index}>
         <div class="LEFT">
         <div class="img-circle">
         <img src="${obj.image}" alt="">
         </div>
   
         <div class="Song-name"><h2>${obj.songName}</h2></div>
        </div>
         <div class="RIGHT">
             <div class="download-contaner">
             <a href="${obj.url}" download="${obj.songName}">
             <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg></h2>
        </a>
            </div>
             <div class="play-button"><h2>▶</h2></div>
         
         </div>
     </div>`
      })
   
      // console.log(obj.songName);
   document.querySelector("#top-sonts-contaner").innerHTML=a;
   console.log(a);
   audio.src = arr2[selectedSong].url
    document.querySelector(".left-album-contaner").innerHTML=` <img src="${arr2[selectedSong].image}" alt="">`
    
   }
albumSongsPage();
// window.onload= albumSongsPage;
   var topsSontsContaner =document.querySelector("#top-sonts-contaner");
   topsSontsContaner.addEventListener("click", function(elm){
      selectedSong=elm.target.id
      document.querySelector(".pause-play-btnOne").innerHTML=`<h2>Start</h2>`
      flag=0;
      albumSongsPage();
      audio.play();
      
    })
    
    var flag =1;
    document.querySelector(".pause-play-btnOne")
    .addEventListener("click", function(){
      if(flag==1){
         document.querySelector(".pause-play-btnOne").innerHTML=`<h2>Play</h2>`
         albumSongsPage();
         audio.play();
         flag=0;
         }
         else{
            document.querySelector(".pause-play-btn").innerHTML=`<h2>Pause</h2>`
            albumSongsPage();
            audio.pause();
            flag=1;
         }
    })
   
   
    document.querySelector(".right-forwordOne")
    .addEventListener("click", function(){
      if(selectedSong < arr2.length-1){
         selectedSong++
         albumSongsPage();
         audio.play()
         document.querySelector(".left-backwordOne").style.opacity=1
        }else{
         document.querySelector(".right-forwordOne").style.opacity=0.3
        }
    })
   
    document.querySelector(".left-backwordOne")
    .addEventListener("click", function(){
      if(selectedSong>0){
         selectedSong--
         albumSongsPage();
         audio.play()
         document.querySelector(".right-forwordOne").style.opacity=1
        }else{
         document.querySelector(".left-backwordOne").style.opacity=0.3
         
        }
    })
}
catogary();

function catogaryTwo(){
    
   var arr= [
      {songName:"Bulleya", url:"./Songs/Bulleya.mp3" , image:"./imgs/bulleya.jpg" ,duration:"4:37",video:"./videos/Bulleya.mp4" , videoImage:"./imgs/bulleya.jpg"},
      {songName:"Chhote Chhote Peg", url:"./Songs/Chhote Chhote Peg.mp3" , image:"./imgs/peg.jpg" ,duration:"4:37",video:"./videos/Chhote Chhote Peg.mp4" , videoImage:"./imgs/peg.jpg"},
      {songName:"Kar Har Maidaan Fateh", url:"./Songs/KAR HAR MAIDAAN FATEH.mp3" , image:"./imgs/sanju.jpg" ,duration:"4:37",video:"./videos/KAR HAR MAIDAAN FATEH.mp4" , videoImage:"./imgs/sanju.jpg"},
   
   ] 

function inside(){
   
   
   var clutter = ""
   arr.forEach(function(obj, indes){
      clutter= clutter+ `
      <div class="Singlesong-contaner Singlesong-contanerTWO" id=${indes}>
         <div class="LEFT">
         <div class="img-circle">
         <img src="${obj.image}" alt="">
         </div>
   
         <div class="Song-name"><h2>${obj.songName}</h2></div>
        </div>
         <div class="RIGHT">
             <div class="download-contaner">
             <a href="${obj.url}" download="${obj.songName}">
             <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg></h2>
        </a>
            </div>
             <div class="play-button"><h2>▶</h2></div>
         
         </div>
                </div>
      `
   })
   console.log(clutter);
   document.querySelector("#top-sonts-contanerTwo").innerHTML=clutter
   audio.src = arr[selectedSong].url
   document.querySelector(".left-album-contanerTwo").innerHTML=` <img src="${arr[selectedSong].image}" alt="">`


   }
   inside()
   var topsSontsContaner =document.querySelector("#top-sonts-contanerTwo");
   topsSontsContaner.addEventListener("click", function(elm){
      selectedSong=elm.target.id
      document.querySelector(".pause-play-btnTwo").innerHTML=`<h2>Start</h2>`
      flag=0;
      inside();             
      audio.play();
      
    })

    
    var flag =1;
    document.querySelector(".pause-play-btnTwo")
    .addEventListener("click", function(){
      if(flag==1){
         document.querySelector(".pause-play-btnTwo").innerHTML=`<h2>Play</h2>`
         inside();
         audio.play();
         flag=0;
         }
         else{
            document.querySelector(".pause-play-btnTwo").innerHTML=`<h2>Pause</h2>`
            inside();
            audio.pause();
            flag=1;
         }
    })
   
document.querySelector(".right-forwordTwo")
.addEventListener("click", function(){
      if(selectedSong <arr.length-1){
         selectedSong++
         inside();
         audio.play();
         document.querySelector(".left-backwordTwo").style.opacity=1
        }else{
         document.querySelector(".right-forwordTwo").style.opacity=0.3
        }
    })
   
    document.querySelector(".left-backwordTwo")
    .addEventListener("click", function(){
      if(selectedSong>0){
         selectedSong--
         inside();
         audio.play();
         document.querySelector(".right-forwordTwo").style.opacity=1
        }else{
         document.querySelector(".left-backwordTwo").style.opacity=0.3
         
        }
    })
}
catogaryTwo()


function catogaryThree(){
    
   var arr= [
      {songName:"Chhote Chhote Peg", url:"./Songs/Chhote Chhote Peg.mp3" , image:"./imgs/peg.jpg" ,duration:"4:37",video:"./videos/Chhote Chhote Peg.mp4" , videoImage:"./imgs/peg.jpg"},
      {songName:"Kar Har Maidaan Fateh", url:"./Songs/KAR HAR MAIDAAN FATEH.mp3" , image:"./imgs/sanju.jpg" ,duration:"4:37",video:"./videos/KAR HAR MAIDAAN FATEH.mp4" , videoImage:"./imgs/sanju.jpg"},
      {songName:"Bulleya", url:"./Songs/Bulleya.mp3" , image:"./imgs/bulleya.jpg" ,duration:"4:37",video:"./videos/Bulleya.mp4" , videoImage:"./imgs/bulleya.jpg"},
    
   ] 

function inside2(){
   
   
   var clutter = ""
   arr.forEach(function(obj, indes){
      clutter= clutter+ `
      <div class="Singlesong-contaner Singlesong-contanerTWO" id=${indes}>
         <div class="LEFT">
         <div class="img-circle">
         <img src="${obj.image}" alt="">
         </div>
   
         <div class="Song-name"><h2>${obj.songName}</h2></div>
        </div>
         <div class="RIGHT">
             <div class="download-contaner">
             <a href="${obj.url}" download="${obj.songName}">
             <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg></h2>
        </a>
            </div>
             <div class="play-button"><h2>▶</h2></div>
         
         </div>
                </div>
      `
   })
   console.log(clutter);
   document.querySelector("#top-sonts-contanerThr").innerHTML=clutter
   audio.src = arr[selectedSong].url
   document.querySelector(".left-album-contanerThr").innerHTML=` <img src="${arr[selectedSong].image}" alt="">`


   }
   inside2()
   var topsSontsContaner =document.querySelector("#top-sonts-contanerThr");
   topsSontsContaner.addEventListener("click", function(elm){
      selectedSong=elm.target.id
      document.querySelector(".pause-play-btnThr").innerHTML=`<h2>Start</h2>`
      flag=0;
      inside2();             
      audio.play();
      
    })

    
    var flag =1;
    document.querySelector(".pause-play-btnThr")
    .addEventListener("click", function(){
      if(flag==1){
         document.querySelector(".pause-play-btnThr").innerHTML=`<h2>Play</h2>`
         inside2();
         audio.play();
         flag=0;
         }
         else{
            document.querySelector(".pause-play-btnThr").innerHTML=`<h2>Pause</h2>`
            inside2();
            audio.pause();
            flag=1;
         }
    })
   
document.querySelector(".right-forwordThr")
.addEventListener("click", function(){
      if(selectedSong <arr.length-1){
         selectedSong++
         inside2();
         audio.play();
         document.querySelector(".left-backwordThr").style.opacity=1
        }else{
         document.querySelector(".right-forwordThr").style.opacity=0.3
        }
    })
   
    document.querySelector(".left-backwordThr")
    .addEventListener("click", function(){
      if(selectedSong>0){
         selectedSong--
         inside2();
         audio.play();
         document.querySelector(".right-forwordThr").style.opacity=1
        }else{
         document.querySelector(".left-backwordThr").style.opacity=0.3
         
        }
    })
}
catogaryThree()


function catogaryFour(){
    
   var arr= [
      {songName:"Bulleya", url:"./Songs/Bulleya.mp3" , image:"./imgs/bulleya.jpg" ,duration:"4:37",video:"./videos/Bulleya.mp4" , videoImage:"./imgs/bulleya.jpg"},
      {songName:"Chhote Chhote Peg", url:"./Songs/Chhote Chhote Peg.mp3" , image:"./imgs/peg.jpg" ,duration:"4:37",video:"./videos/Chhote Chhote Peg.mp4" , videoImage:"./imgs/peg.jpg"},
      {songName:"Kar Har Maidaan Fateh", url:"./Songs/KAR HAR MAIDAAN FATEH.mp3" , image:"./imgs/sanju.jpg" ,duration:"4:37",video:"./videos/KAR HAR MAIDAAN FATEH.mp4" , videoImage:"./imgs/sanju.jpg"},
     
   ] 

function inside3(){
   
   
   var clutter = ""
   arr.forEach(function(obj, indes){
      clutter= clutter+ `
      <div class="Singlesong-contaner Singlesong-contanerFour" id=${indes}>
         <div class="LEFT">
         <div class="img-circle">
         <img src="${obj.image}" alt="">
         </div>
   
         <div class="Song-name"><h2>${obj.songName}</h2></div>
        </div>
         <div class="RIGHT">
             <div class="download-contaner">
             <a href="${obj.url}" download="${obj.songName}">
             <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg></h2>
        </a>
            </div>
             <div class="play-button"><h2>▶</h2></div>
         
         </div>
                </div>
      `
   })
   console.log(clutter);
   document.querySelector("#top-sonts-contanerFour").innerHTML=clutter
   audio.src = arr[selectedSong].url
   document.querySelector(".left-album-contanerFour").innerHTML=` <img src="${arr[selectedSong].image}" alt="">`


   }
   inside3()
   var topsSontsContaner =document.querySelector("#top-sonts-contanerFour");
   topsSontsContaner.addEventListener("click", function(elm){
      selectedSong=elm.target.id
      document.querySelector(".pause-play-btnFour").innerHTML=`<h2>Start</h2>`
      flag=0;
      inside3();             
      audio.play();
      
    })

    
    var flag =1;
    document.querySelector(".pause-play-btnFour")
    .addEventListener("click", function(){
      if(flag==1){
         document.querySelector(".pause-play-btnFour").innerHTML=`<h2>Play</h2>`
         inside3();
         audio.play();
         flag=0;
         }
         else{
            document.querySelector(".pause-play-btnFour").innerHTML=`<h2>Pause</h2>`
            inside3();
            audio.pause();
            flag=1;
         }
    })
   
document.querySelector(".right-forwordFour")
.addEventListener("click", function(){
      if(selectedSong <arr.length-1){
         selectedSong++
         inside3();
         audio.play();
         document.querySelector(".left-backwordFour").style.opacity=1
        }else{
         document.querySelector(".right-forwordFour").style.opacity=0.3
        }
    })
   
    document.querySelector(".left-backwordFour")
    .addEventListener("click", function(){
      if(selectedSong>0){
         selectedSong--
         inside3();
         audio.play();
         document.querySelector(".right-forwordFour").style.opacity=1
        }else{
         document.querySelector(".left-backwordFour").style.opacity=0.3
         
        }
    })
}
catogaryFour()


function catogaryFive(){
    
   var arr= [
      {songName:"Chhote Chhote Peg", url:"./Songs/Chhote Chhote Peg.mp3" , image:"./imgs/peg.jpg" ,duration:"4:37",video:"./videos/Chhote Chhote Peg.mp4" , videoImage:"./imgs/peg.jpg"},
      
      {songName:"Bulleya", url:"./Songs/Bulleya.mp3" , image:"./imgs/bulleya.jpg" ,duration:"4:37",video:"./videos/Bulleya.mp4" , videoImage:"./imgs/bulleya.jpg"},
      {songName:"Kar Har Maidaan Fateh", url:"./Songs/KAR HAR MAIDAAN FATEH.mp3" , image:"./imgs/sanju.jpg" ,duration:"4:37",video:"./videos/KAR HAR MAIDAAN FATEH.mp4" , videoImage:"./imgs/sanju.jpg"},
     
   ] 

function inside4(){
   
   
   var clutter = ""
   arr.forEach(function(obj, indes){
      clutter= clutter+ `
      <div class="Singlesong-contaner Singlesong-contanerFour" id=${indes}>
         <div class="LEFT">
         <div class="img-circle">
         <img src="${obj.image}" alt="">
         </div>
   
         <div class="Song-name"><h2>${obj.songName}</h2></div>
        </div>
         <div class="RIGHT">
             <div class="download-contaner">
             <a href="${obj.url}" download="${obj.songName}">
             <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg></h2>
        </a>
            </div>
             <div class="play-button"><h2>▶</h2></div>
         
         </div>
                </div>
      `
   })
   console.log(clutter);
   document.querySelector("#top-sonts-contanerFive").innerHTML=clutter
   audio.src = arr[selectedSong].url
   document.querySelector(".left-album-contanerFive").innerHTML=` <img src="${arr[selectedSong].image}" alt="">`


   }
   inside4()
   var topsSontsContaner =document.querySelector("#top-sonts-contanerFive");
   topsSontsContaner.addEventListener("click", function(elm){
      selectedSong=elm.target.id
      document.querySelector(".pause-play-btnFive").innerHTML=`<h2>Start</h2>`
      flag=0;
      inside4();             
      audio.play();
      
    })

    
    var flag =1;
    document.querySelector(".pause-play-btnFive")
    .addEventListener("click", function(){
      if(flag==1){
         document.querySelector(".pause-play-btnFive").innerHTML=`<h2>Play</h2>`
         inside4();
         audio.play();
         flag=0;
         }
         else{
            document.querySelector(".pause-play-btnFive").innerHTML=`<h2>Pause</h2>`
            inside4();
            audio.pause();
            flag=1;
         }
    })
   
document.querySelector(".right-forwordFive")
.addEventListener("click", function(){
      if(selectedSong <arr.length-1){
         selectedSong++
         inside4();
         audio.play();
         document.querySelector(".left-backwordFive").style.opacity=1
        }else{
         document.querySelector(".right-forwordFive").style.opacity=0.3
        }
    })
   
    document.querySelector(".left-backwordFive")
    .addEventListener("click", function(){
      if(selectedSong>0){
         selectedSong--
         inside4();
         audio.play();
         document.querySelector(".right-forwordFive").style.opacity=1
        }else{
         document.querySelector(".left-backwordFive").style.opacity=0.3
         
        }
    })
}
catogaryFive();


function catogarySix(){
    
   var arr= [
      {songName:"Kar Har Maidaan Fateh", url:"./Songs/KAR HAR MAIDAAN FATEH.mp3" , image:"./imgs/sanju.jpg" ,duration:"4:37",video:"./videos/KAR HAR MAIDAAN FATEH.mp4" , videoImage:"./imgs/sanju.jpg"},
     
      {songName:"Chhote Chhote Peg", url:"./Songs/Chhote Chhote Peg.mp3" , image:"./imgs/peg.jpg" ,duration:"4:37",video:"./videos/Chhote Chhote Peg.mp4" , videoImage:"./imgs/peg.jpg"},
      
      {songName:"Bulleya", url:"./Songs/Bulleya.mp3" , image:"./imgs/bulleya.jpg" ,duration:"4:37",video:"./videos/Bulleya.mp4" , videoImage:"./imgs/bulleya.jpg"},
      
   ] 

function inside5(){
   
   
   var clutter = ""
   arr.forEach(function(obj, indes){
      clutter= clutter+ `
      <div class="Singlesong-contaner Singlesong-contanerFour" id=${indes}>
         <div class="LEFT">
         <div class="img-circle">
         <img src="${obj.image}" alt="">
         </div>
   
         <div class="Song-name"><h2>${obj.songName}</h2></div>
        </div>
         <div class="RIGHT">
             <div class="download-contaner">
             <a href="${obj.url}" download="${obj.songName}">
             <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg></h2>
        </a>
            </div>
             <div class="play-button"><h2>▶</h2></div>
         
         </div>
                </div>
      `
   })
   console.log(clutter);
   document.querySelector("#top-sonts-contanerSix").innerHTML=clutter
   audio.src = arr[selectedSong].url
   document.querySelector(".left-album-contanerSix").innerHTML=` <img src="${arr[selectedSong].image}" alt="">`


   }
   inside5()
   var topsSontsContaner =document.querySelector("#top-sonts-contanerSix");
   topsSontsContaner.addEventListener("click", function(elm){
      selectedSong=elm.target.id
      document.querySelector(".pause-play-btnSix").innerHTML=`<h2>Start</h2>`
      flag=0;
      inside5();             
      audio.play();
      
    })

    
    var flag =1;
    document.querySelector(".pause-play-btnSix")
    .addEventListener("click", function(){
      if(flag==1){
         document.querySelector(".pause-play-btnSix").innerHTML=`<h2>Play</h2>`
         inside5();
         audio.play();
         flag=0;
         }
         else{
            document.querySelector(".pause-play-btnSix").innerHTML=`<h2>Pause</h2>`
            inside5();
            audio.pause();
            flag=1;
         }
    })
   
document.querySelector(".right-forwordSix")
.addEventListener("click", function(){
      if(selectedSong <arr.length-1){
         selectedSong++
         inside5();
         audio.play();
         document.querySelector(".left-backwordSix").style.opacity=1
        }else{
         document.querySelector(".right-forwordSix").style.opacity=0.3
        }
    })
   
    document.querySelector(".left-backwordSix")
    .addEventListener("click", function(){
      if(selectedSong>0){
         selectedSong--
         inside5();
         audio.play();
         document.querySelector(".right-forwordSix").style.opacity=1
        }else{
         document.querySelector(".left-backwordSix").style.opacity=0.3
         
        }
    })
}
catogarySix();







function menubar(){
  var mobileView = document.querySelector(".head-bar")
  var nav = document.querySelector("nav")
 var Navul = document.querySelector("ul")
   // var li = document.querySelector("li")
  
   
      mobileView.addEventListener("click", function(){
         mobileView.style.width ="100%"
         mobileView.style.height ="98.2%"
         mobileView.style.backgroundColor ="rgba(225, 146, 94, 0.481)";
         mobileView.style.left ="0"
         mobileView.style.borderRadius ="0"
         mobileView.style.marginTop ="0em"
         // Navul.style.display= "block"
         mobileView.style.mixBlendMode= "normal"

      })

      // document.querySelector("#back h2").addEventListener("mouseenter", function(){
      //    mobileView.style.display="none";
      //    console.log('clicked');
         

      // })
   
}
// menubar();

function fullScreen(){
   flag=1;

   document.querySelector(".left-album-contaner")
   .addEventListener("click", function(){
      if(flag==1){
         document.querySelector(".head-bar").style.display="none";
         flag=2
      }
      else if(flag==2){
         document.querySelector(".head-bar").style.display="flex";
         flag=1;
      }
   })
   

}
 
fullScreen()
 


function SendMail(){
   var params ={
      from_name: document.querySelector("#fullName").value,
      email_id: document.querySelector("#email_id").value,
      song_name: document.querySelector("#songName").value,
      message: document.querySelector("#message").value,
   }
   document.querySelector("#send").style.backgroundColor="red"
  
   emailjs.send("service_6qpsm7s", "template_v8ydsxk", params).then(function(res){
      alert("Request Successful " + res.status);
     })
}


function RequestSonge(){
   var reqcont = document.querySelector(".on-requesrSong-contaner")

   var arr=[
      {songName:"Aarzoo", url:"./Songs/Aarzoo.mp3", img:"./imgs/Aarzoo.png" },
      {songName:"Tere Naal", url:"./Songs/TereNaal.mp3", img:"./imgs/naal.png" },
  
      
      
   ]
   
   var clutte=""

   arr.forEach(function(items, ind){
      clutte= clutte + ` <div class="onRequest-song" id=${ind}>
      <div class="left-part">
            <div class="imgIcon"><img src ="${items.img}"/></div>
            <div class="song-names"><h2>${items.songName}</h2></div>
        
      </div>
      <div class="right-part">
        <div class="play_pause-btn">
            <div class="playe">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"></path></svg>

            </div>
            <div class="pausee">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>

            </div>
       </div>
       <div class="down"><a href="${items.url}" download="${items.songName}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9H19L12 16L5 9H10V3H14V9Z"></path></svg></a>
       </div>
 
      </div>
    
    </div>`

   })
   console.log(clutte);
   reqcont.innerHTML=clutte;
   audio.src = arr[selectedSong].url

reqcont.addEventListener("click", function(ab){
      selectedSong=ab.target.id
      RequestSonge();
     
      
         // document.querySelector(".playe").style.display="none";
         // document.querySelector(".pausee").style.display="block";
        
         audio.play();
      
    
   })

   document.querySelector(".left-back")
   .addEventListener("click", function(){
      document.querySelector(".App_Contaner").style.display="flex"
      document.querySelector(".Mail-page").style.display="none"

   })
}
RequestSonge();

// document.querySelector(".onRequest-song")


// var flag=0