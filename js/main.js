window.addEventListener('load', function(){

    var titulo = document.querySelector('#titulo');
    var imagenCancion = document.querySelector('#imgCancion');

    const backward = document.querySelector('#backward');
    const play_pause = document.querySelector('#play_pause');
    const forward = document.querySelector('#forward');
    const song = document.querySelector('#song');
    const nameList = document.querySelectorAll('#playlist span');

    const progressContainer = document.querySelector('.progress-container')
    const progressBar = document.querySelector('.progress')
    const currentTimeDiv = document.getElementById('currentTime')
    const durationDiv = document.getElementById('duration')
    


    //Imagenes Cancion
    const imgCancion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']

    //PlayList
    const songList = ['Tema 6', 'Tema 4', 'Tema 3', 'Tema 2', 'Tema 5', 'Tema 1'];
    
    const nameSongs = []

    var songIndex = 0;

    //Añadir nombres en array 'nameSongs'
    for(s=0; s<nameList.length;s++){
        nameSongs.push(nameList[s].textContent)
    };

    //Seteamos el titulo una vez el array exista
    setTitle();

    //Progress-Bar DE LA CANCION

    song.addEventListener('timeupdate', (e)=>{

        var duracion = e.target.duration
        var time = e.target.currentTime

        progress = (time / duracion) * 100

        progressBar.style.width = `${progress}%`

    })

    progressContainer.addEventListener('click', (e)=>{

        var width = 250
        var duracion = song.duration
        var time = e.offsetX

        song.currentTime = (time / width) * duracion
    })

    //FUNCIONES
    
    function setImgCancion(){

        imagenCancion.classList.remove('setImgCancion')
        imagenCancion.classList.add('unsetImgCancion')
        setTimeout(() => {
                imagenCancion.style.width = '0%'

                setTimeout(() => {
                    imagenCancion.src = `img/Canciones/imagen ${imgCancion[Math.floor(Math.random()* 17 )+1]}.jpeg`
                
                    setTimeout(() => {

                        imagenCancion.classList.add('setImgCancion')
                        imagenCancion.classList.remove('unsetImgCancion')
    
                        setTimeout(() => {
                            imagenCancion.style.width = ''
                        }, 1000);
    
                    }, 600);
                
                }, 50);

        }, 590);
            
        }
    

    function setSong(){
        song.src = `audio/${songList[songIndex]}.mpeg`
    };

    function backwardSong(){
        songIndex--
        if(songIndex < 0){
            songIndex = songList.length - 1;
        }
        setSong();
    };

    function forwardSong(){
        songIndex++
        if(songIndex > songList.length - 1){
            songIndex = 0;
        }
        setSong();
    }

    //FUNCION PLAY Y AUTOPLAYYYYYYYYYYYY

    function playPause(){
        if(song.classList.contains('playing')){
            song.pause();
            song.classList.remove('playing');
            play_pause.src = 'icons/Play.png'
        }else{

            if(imagenCancion.src == 'https://determined-dubinsky-d7a38e.netlify.app/img/headphones.jpg'){
                setImgCancion()
            }

            song.play();
            song.classList.add('playing');
            play_pause.src = 'icons/Pause.png'

            song.addEventListener('timeupdate', (e)=>{

                var duracion = e.target.duration
                var tiempoActual = e.target.currentTime

                if(isNaN(duracion) || isNaN(tiempoActual)){
                    currentTimeDiv.innerHTML = '00:00'
                    durationDiv.innerHTML = '00:00'
                }else{
                    currentTimeDiv.innerHTML = formatSecondsAsTime(tiempoActual)
                    durationDiv.innerHTML = formatSecondsAsTime(duracion)
                }
                
                setTimeout(() => {
                    if(tiempoActual == duracion){
                        removeSongName();
                        forwardSong();
                        song.classList.remove('playing');
                        setSongName();
                        playPause();
                        setTitle();
                        setImgCancion();
                    }
                }, 601);
            })

        }
    };

    //Remove/Set song name
    function removeSongName(){
        for(i=0; i<nameList.length; i++){
            nameList[i].classList.remove('plaaying');
        };
    }

    function setSongName(){
        nameList[songIndex].classList.add('plaaying');
    }

    //Set Title
    function setTitle(){
        titulo.innerHTML = nameSongs[songIndex];
    };


    //backward & forward
    backward.addEventListener('click', function(){
        removeSongName();
        backwardSong();
        song.classList.remove('playing');
        setSongName();
        playPause();
        setTitle();
        setImgCancion();
    });
    forward.addEventListener('click', function(){
        removeSongName();
        forwardSong();
        song.classList.remove('playing');
        setSongName();
        playPause();
        setTitle();
        setImgCancion();
    });

    //PlayButton
    play_pause.addEventListener('click', function(){
        removeSongName();
        playPause();
        setSongName();
        setTitle();   
    });

    //Set Song
    setSong();
    

    //********************************************************************//

    //FUNCION PARA SETEAR TIEMPOS

    function formatSecondsAsTime(secs, format) {
        var hr  = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600))/60);
        var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
      
        if (min < 10){ 
          min = "0" + min; 
        }
        if (sec < 10){ 
          sec  = "0" + sec;
        }
      
        return min + ':' + sec;
      }

});