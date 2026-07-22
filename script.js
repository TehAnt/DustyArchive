const timeline=document.querySelector(".timeline");

const memories=[

//2023

["2023","images/2023_february.jpg","image","jj clipping us flirtin during science"],

["2023","images/2023_march.jpg","image"],

["2023","images/2023_march2.jpg","image","beijing acamis sparking our love"],

["2023","images/2023_may.jpg","image"],

["2023","images/2023_may2.jpg","image", "you look so cute under the covers in this photo hahahaha"],

["2023","images/2023_may3.jpg","image","starbucks flirting"],

["2023","images/2023_may4.jpg","image"],

["2023","images/2023_may5.jpg","image", "lil sideeye from you during eotc"],

["2023","images/2023_may6.jpg","image","the imfamous photo"],

["2023","images/2023_may7.jpg","image","EOTC!!"],

["2023","images/2023_may8.jpg","image","first pregnancy scare uh oh"],

["2023","images/2023_july.jpg","image", "mr saleh caught our ass hahaha"],

["2023","videos/2023_october.mp4","video","omg first tiktok w my baby"],


//2024

["2024","videos/2024_august1.mp4","video","another eotc with my girl"],

["2024","videos/2024_august2.mp4","video"],

["2024","videos/2024_august3.mp4","video"],


//2025

["2025","images/2025_march.jpg","image","us working at the 9-5"],

["2025","images/2025_august.jpg","image","bro snoozin away"],

["2025","images/2025_october.jpg","image","cute pic of us at dinner "],

["2025","images/2025_october2.jpg","image","lil date to puxi "],

["2025","images/2025_november.jpg","image"],

["2025","images/2025_november2.jpg","image"],

["2025","images/2025_november3.jpg","image","under the mistletoe"],

["2025","images/2025_december.jpg","image","us at my 17th birthday party"],

["2025","images/2025_december2.jpg","image","reverse oxford study on top"],

["2025","images/2025_december3.jpg","image"],


//2026

["2026","images/2026_april.jpg","image"],


// MALAYSIA

["MALAYSIA","images/IMG_3839.jpeg","image"],

["MALAYSIA","images/IMG_3840.jpeg","image"],

["MALAYSIA","images/IMG_3843.jpeg","image"],

["MALAYSIA","images/IMG_3845.jpeg","image"],

["MALAYSIA","images/IMG_3855.jpeg","image"]

];


let side="left";

let previousYear="";


memories.forEach(memory=>{


const card=document.createElement("div");


card.className=`memory ${side}`;



if(memory[0]!==previousYear){


    const yearClass =
    memory[0] === "MALAYSIA"
    ? "year malaysia"
    : "year";
    
    card.innerHTML += `<div class="${yearClass}">${memory[0]}</div>`;


previousYear=memory[0];


}



if(memory[2]==="image"){

    card.innerHTML+=`
        <img src="${memory[1]}">
        ${memory[3] ? `<p class="caption">${memory[3]}</p>` : ""}
    `;

}


else{


card.innerHTML+=`

<video controls>

<source src="${memory[1]}">

</video>

`;


}



timeline.appendChild(card);



side=side==="left"

? "right"

: "left";


});





// ======================
// CASSETTE MUSIC PLAYER
// ======================


const player = document.getElementById("player");


const playPause = document.getElementById("playPause");

const prevSong = document.getElementById("prevSong");

const nextSong = document.getElementById("nextSong");


const progress = document.getElementById("progress");


const title = document.getElementById("songTitle");

const artist = document.getElementById("songArtist");


const leftReel = document.getElementById("reelLeft");

const rightReel = document.getElementById("reelRight");



const playlist = [


"music/A-Wall - Loverboy.mp3",

"music/CIKHO - Fell Again.mp3",

"music/Omar Apollo - Brakelights.mp3",

"music/Rex Orange County - Sunflower.mp3",

"music/Anees - Sun and Moon.mp3",

"music/Kendrick Lamar - LOVE. ft. Zacari.mp3",

"music/BORNS - Electric Love.mp3",

"music/TV Girl - Lovers Rock.mp3",

"music/Frankie Valli - Can't Take My Eyes Off You.mp3",

"music/Paul Anka - Put Your Head On My Shoulder.mp3",

"music/Keyshia Cole - Love.mp3",

"music/Lavi kou - Pink bubblegum.mp3",

"music/Cuco - Lover is a Day.mp3",

"music/d4vd - Here With Me.mp3",

"music/10cc - I'm Not In Love.mp3",

"music/Cuco - We Had To End It.mp3"


];


let currentSong = 0;



function loadSong(){


player.src = playlist[currentSong];



const filename = playlist[currentSong]

.split("/")

.pop()

.replace(".mp3","");



const parts = filename.split(" - ");



if(parts.length >= 2){


artist.textContent = parts[0];

title.textContent = parts.slice(1).join(" - ");


}


else{


artist.textContent = "";

title.textContent = filename;


}



progress.value = 0;


}


loadSong();



playPause.onclick = ()=>{


if(player.paused){


player.play();


playPause.innerHTML = "⏸";


leftReel.classList.add("spinning");

rightReel.classList.add("spinning");


}


else{


player.pause();


playPause.innerHTML = "▶";


leftReel.classList.remove("spinning");

rightReel.classList.remove("spinning");


}


};

nextSong.onclick = ()=>{


    currentSong++;
    
    
    if(currentSong >= playlist.length){
    
    
    currentSong = 0;
    
    
    }
    
    
    loadSong();
    
    
    player.play();
    
    
    playPause.innerHTML = "⏸";
    
    
    leftReel.classList.add("spinning");
    
    rightReel.classList.add("spinning");
    
    
    };
    
    
    
    prevSong.onclick = ()=>{
    
    
    currentSong--;
    
    
    if(currentSong < 0){
    
    
    currentSong = playlist.length-1;
    
    
    }
    
    
    loadSong();
    
    
    player.play();
    
    
    playPause.innerHTML = "⏸";
    
    
    leftReel.classList.add("spinning");
    
    rightReel.classList.add("spinning");
    
    
    };
    
    
    
    
    
    player.addEventListener("ended",()=>{
    
    
    currentSong++;
    
    
    if(currentSong >= playlist.length){
    
    
    currentSong = 0;
    
    
    }
    
    
    loadSong();
    
    
    player.play();
    
    
    });
    
    
    
    
    
    player.addEventListener("timeupdate",()=>{
    
    
    if(player.duration){
    
    
    progress.value =
    
    (player.currentTime/player.duration)*100;
    
    
    }
    
    
    });
    
    
    
    
    
    progress.addEventListener("input",()=>{
    
    
    if(player.duration){
    
    
    player.currentTime =
    
    (progress.value/100)*player.duration;
    
    
    }
    
    
    });
    
    
    
    
    
    // ======================
    // LIGHTBOX
    // ======================
    
    
    const lightbox=document.getElementById("lightbox");
    
    
    const lightboxImg=document.getElementById("lightboxImg");
    
    
    const close=document.getElementById("close");
    
    
    const downloadBtn=document.getElementById("downloadBtn");
    
    
    
    
    
    document.addEventListener("click",(e)=>{
    
    
    if(e.target.tagName==="IMG" && e.target.closest(".memory")){
    
    
    // camera flash
    
    const flash=document.getElementById("flash");
    
    
    if(flash){
    
    flash.classList.remove("flash-active");
    
    
    void flash.offsetWidth;
    
    
    flash.classList.add("flash-active");
    
    }
    
    
    // open photo
    
    
    lightbox.style.display="flex";
    
    
    lightboxImg.src=e.target.src;
    
    
    downloadBtn.href=e.target.src;
    
    
    }
    
    
    });
    
    
    
    
    
    close.onclick=()=>{
    
    
    lightbox.style.display="none";
    
    
    };
    
    
    
    
    
    lightbox.onclick=(e)=>{
    
    
    if(e.target===lightbox){
    
    
    lightbox.style.display="none";
    
    
    }
    
    
    };
    
    
    
    
    
    // ======================
    // SHANGHAI PAN
    // ======================
    
    
    const skylineImg = document.querySelector(".skyline img");
    
    
    
    window.addEventListener("scroll",()=>{
    
    
    const scrollable = document.body.scrollHeight - window.innerHeight;
    
    
    
    const progress = window.scrollY / scrollable;
    
    
    
    const imageTravel = skylineImg.offsetHeight - window.innerHeight;
    
    
    
    skylineImg.style.transform =
    
    `translateY(${-progress*imageTravel}px)`;
    
    
    });
    
    
    
    
    
    // ======================
    // FALLING STICKERS
    // ======================
    
    
    const stickerContainer = document.querySelector(".stickers");
    
    
    
    const emojis = [
    
    
    "🏐",
    
    "🏀",
    
    "🌮"
    
    
    ];
    
    
    
    
    
    function spawnSticker(){
    
    
    
    const sticker = document.createElement("div");
    
    
    
    sticker.className="sticker";
    
    
    
    sticker.innerHTML =
    
    emojis[Math.floor(Math.random()*emojis.length)];
    
    
    
    sticker.style.left =
    
    Math.random()*100 + "%";
    
    
    
    sticker.style.fontSize =
    
    (1.5 + Math.random()*1.5) + "rem";
    
    
    
    sticker.style.animationDuration =
    
    (8 + Math.random()*8) + "s";
    
    
    
    stickerContainer.appendChild(sticker);
    
    
    
    setTimeout(()=>{
    
    
    sticker.remove();
    
    
    },16000);
    
    
    
    }
    
    
    
    setInterval(spawnSticker,1200);
    
    
    
    
    
// ======================
// LETTER POPUP
// ======================


const envelope = document.getElementById("envelope");

const letterOverlay = document.getElementById("letterOverlay");

const closeLetter = document.getElementById("closeLetter");



envelope.onclick = ()=>{

    letterOverlay.classList.add("active");

};



closeLetter.onclick = ()=>{

    letterOverlay.classList.remove("active");

};



letterOverlay.onclick=(e)=>{


    if(e.target === letterOverlay){

        letterOverlay.classList.remove("active");

    }


};
    // ======================
// MOUSE FLASHLIGHT
// ======================


document.addEventListener("mousemove",(e)=>{


    document.body.style.setProperty(
    
    "--x",
    
    e.clientX + "px"
    
    );
    
    
    
    document.body.style.setProperty(
    
    "--y",
    
    e.clientY + "px"
    
    );
    
    
    
    });
    
    
    
    
    
    // ======================
    // MEMORY PARTICLES
    // ======================
    
    
    const particleContainer = document.querySelector(".particles");
    
    
    
    function createParticle(){
    
    
    const p=document.createElement("div");
    
    
    
    p.className="particle";
    
    
    
    p.style.left =
    
    Math.random()*100 + "%";
    
    
    
    p.style.animationDuration =
    
    (8 + Math.random()*12) + "s";
    
    
    
    p.style.animationDelay =
    
    Math.random()*5 + "s";
    
    
    
    particleContainer.appendChild(p);
    
    
    
    
    setTimeout(()=>{
    
    
    p.remove();
    
    
    },20000);
    
    
    
    }
    
    
    
    
    setInterval(createParticle,700);