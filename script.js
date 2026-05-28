function trocademodo(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')
     if(html.classList.contains('light')) {
       img.setAttribute('src', './FOTOS/icon 1.png')
    } else {
       img.setAttribute('src', './FOTOS/icon 2.png')
    }
}
