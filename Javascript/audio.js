const music = document.getElementById('Music');
const boton = document.getElementById('Music_button');
const iconSong = document.getElementById('icon_song');
const iconOff = document.getElementById('icon_off');

music.volume = 0.2;

boton.addEventListener('click', () => {

  if (music.paused) {
   
    music.play();
    
  
    iconSong.classList.remove('hidden');
    
  
    iconOff.classList.add('hidden');

  } else {

    music.pause();


    iconSong.classList.add('hidden');

   
    iconOff.classList.remove('hidden');
  }

});