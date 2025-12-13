 const musica = document.getElementById('Music');
  const boton = document.getElementById('Music_button');
  
  //ajuste de volumen
  musica.volume = 0.2; 

  boton.addEventListener('click', () => {
    if (musica.paused) {
      musica.play();
    
       //cambiar musica
      icon_song.classList.add('bg-orange-200', `rounded-full`);
      icon_song.classList.remove(`bg-orange-200`, `rounded-full`);
     
    } else {
      musica.pause();
   
    }
  });