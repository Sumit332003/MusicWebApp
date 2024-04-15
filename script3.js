
//  <div class="right_ImageContaner">
//                     <img src="" alt="">
//                 </div>
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
        <div class="play">▶</div>
        <div class="pause">⏸️</div>
      </div>
   </div>
`  
})

a.innerHTML=clutter;
audio.src = arr2[selectedSong].url
document.querySelector(".videos").innerHTML=`<video  id="myVideo" poster="${arr2[selectedSong].image}" controls muted loop>
<source src="${arr2[selectedSong].video}" type="video/mp4">
</video>
<div class="overlay"><img src="${arr2[selectedSong].videoImage}"></div>
`
// document.querySelector(".overlay").style.backgroundImage=`url("${arr2[selectedSong].image})`
 console.log(clutter);
// document.querySelector(".right_ImageContaner").style.backgroundImage=`url(${arr2[selectedSong].image})`
// document.querySelector(".cover_contaner").innerHTML=` <h1>${arr2[selectedSong].songName}</h1>`

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
   
    <div class="playideoBtn"onclick="playPause()"><h5 id="vidBtn">Play Now </h5><div class="playBottom" id="playBottom">▶</div>

</div>
 <div id="downloadvideoBtn"><a href="${arr2[selectedSong].video}" download="${arr2[selectedSong].songName}">
 <h2>⬇</h2>
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
<h1>⬇</h1>
</a>`


}
 playBox();
}
mainFunction();

 a.addEventListener("click", function(dets){
//   document.querySelector(".pause").style.display="block";
//   document.querySelector(".play").style.display="none";
   // audio.src = arr2[dets.target.id].url
   selectedSong=dets.target.id
   mainFunction();
   document.querySelector(".PlayPauseBtn").innerHTML= `<h1>⏸️</h1>`
   flag =1;
   audio.play();
   // document.querySelector(".PlayPauseBtn").innerHTML= `<h1>⏸️</h1>`
   // console.log(arr2[dets.target.id].url)
 })

 var p = document.querySelector(".PlayPauseBtn");
 var flag = 0;

p.addEventListener("click", function(){
   if(flag == 0)
   {
     p.innerHTML= `<h1>⏸️</h1>`
      mainFunction();
      audio.play();
      flag=1;
   }
  else{
    audio.pause();
     p.innerHTML= `<h1>▶️</h1>`
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
      p.innerHTML= `<h1>⏸️</h1>`
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
      p.innerHTML= `<h1>⏸️</h1>`
   }
   else{
      backward.style.opacity =0.4;
   }
})
   // a.style.backgroundColor="green";
   // console.log('print me');
   // audio.src = arr2[dets.target.id].url
   // audio.play()
 

// audio.src = arr2[dets.target.id].url
// audio.play()
//  console.log(arr2[dets.target.id]);
// console.log(arr2[dets.target.id].url);
var select = document.querySelector('.playideoBtn');
flag = 1;
// document.querySelector(".playideoBtn h5").textContent="Play"

function playPause(){
   var video = document.querySelector("#myVideo");
      if (flag==1){
         // if (video.paused){
            video.play();
            video.muted=false;
            document.querySelector(".playideoBtn h5").textContent="Play"
            document.querySelector("#playBottom").textContent= "⏸️"
            document.querySelector(".videos").style.position="absolute";
            document.querySelector(".videos").style.top=" 50%";
            document.querySelector(".videos").style.left="50%";
            document.querySelector(".videos").style.transform= "translate(-50%, -50%)";

            document.querySelector(".overlay").style.display="none";
            audio.pause();

            flag=0;
            
         }
        
         else{

            video.pause();
            document.querySelector(".playideoBtn h5").textContent="Pause";
            document.querySelector("#playBottom").textContent= "▶️"

            flag=1;
         }
      }
    
// }


function backtoPage(){
document.querySelector(".h4").addEventListener("click",function(){
   document.querySelector(".overlay").style.display="block";
   document.querySelector(".videos").style.position="relative";
   // document.querySelector(".h4").textContent="Back to Home Page"
   // video.pause();
   playPause().video.pause();
   document.querySelector(".overlay").style.display="block";
})
}
backtoPage();
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
     <h2>⬇</h2>
</a>
       </div>
   </div>
   </div>`
})
topVideo.innerHTML=clutte;
fa=0;
document.querySelector("#changeContaner")
// 
// .addEventListener("click", function(det){
//    selectedSong=det.target.id
//    mainFunction();
//     if(fa==0)
//     {
    
//       audio.play();
//       fa =1;
//     }
//    else if (fa==1) {
//       audio.pause();
//       fa=0;
//     } 
     
// })