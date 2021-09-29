window.addEventListener('load', ()=>{

    var title = document.getElementById('main-title')
    var intro = document.getElementById('parrafo')
    var bio = document.getElementById('bio')
    var footer = document.getElementById('footer')

    var lang = document.getElementById('lang')

    lang.addEventListener('mouseup', ()=>{

        if(lang.value == 'english'){
            title.innerHTML = 'Slow music for fast times...'
            intro.innerHTML = '<p>To those who feel the world moving so fast... To those who need just stop and breathe... To those who want find yourselfs... a moment... a place... this music is for you</p>'
            bio.innerHTML = '<p>My name is Ladislao Martínez and I am a musician and composer... And I created this website with the intention of giving my sounds to those people who need a moment of peace ... I hope you enjoy it and get to relax you</p>'
            footer.innerHTML = '<p>Music, design and develop of this page was made by myself ©</p>'
        }
        else if(lang.value == 'español'){
            title.innerHTML = 'Musica lenta para tiempos rápidos'
            intro.innerHTML = '<p>Para aquellos que sienten que el mundo se mueve muy rápido ... Para aquellos que solo necesitan detenerse y respirar ... Para los que quieran encontrarse... un momento... un lugar... ésta música es para ustedes</p>'
            bio.innerHTML = '<p>Mi nombre es Ladislao Martínez y soy músico y compositor... Y creé esta web a con la única intensión de regalar mis sonidos a aquellas personas que necesiten un momento de paz... Espero que lo disfruten y consiga relajarlos</p>'
            footer.innerHTML = '<p>La música, el diseño y el desarrollo de esta página fueron hechos por mí mismo ©</p>'
        }

    })
    

})