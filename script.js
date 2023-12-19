console.log("Welcome to my first site");

let songIndex=0;
let masterPlay = document.getElementById('MasterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Good Song 1",filePath:"songs/1.mp3",coverPath:"https://i.stack.imgur.com/GsDIl.jpg"},
    {songName:"Good Song 2",filePath:"songs/2.mp3",coverPath:"bg.jpg"},
    {songName:"Good Song 3",filePath:"songs/3.mp3",coverPath:"cover1.jpg"},
    {songName:"Good Song 4",filePath:"songs/4.mp3",coverPath:"https://ik.imagekit.io/ikmedia/backlit.jpg"},
    {songName:"Good Song 5",filePath:"songs/5.mp3",coverPath:"https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"},
    {songName:"Good Song 6",filePath:"songs/6.mp3",coverPath:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg"},
    {songName:"Good Song 7",filePath:"songs/7.mp3",coverPath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPziFneiVI44ZvBph-l1sz2H0KWen31njpTlIN0MBcmg&s"},
    {songName:"Good Song 8",filePath:"songs/8.mp3",coverPath:"https://upload.wikimedia.org/wikipedia/commons/c/c5/JPEG_example_down.jpg"},
    {songName:"Good Song 9",filePath:"songs/9.mp3",coverPath:"https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg"},
]
let audioElment = new Audio('songs/1.mp3');


songItem.forEach((element,i) =>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElment.paused || audioElment.currentTime<=0){
        audioElment.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity =1;
    }
    else{
        audioElment.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity =0;
    }
})

audioElment.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    progress = parseInt((audioElment.currentTime/audioElment.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElment.currentTime = (progressbar.value * audioElment.duration)/100;

})

const makeAllPlay= ()=> {
    //e.target.classList.add('fa-pause');
    Array.from(document.getElementsByClassName('songItemName')).forEach((element,i)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}

Array.from(document.getElementsByClassName('songItemName')).forEach((element,i)=>{
    element.addEventListener('click', (e)=>{
        console.log(e);
        makeAllPlay();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElment.src = 'songs/2.mp3';
        audioElment.currentTime=0;
        audioElment.play();
    })
})