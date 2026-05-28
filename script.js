function trocademodo(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')
     if(html.classList.contains('light')) {
       img.setAttribute('src', './FOTOS/icon 1.png')
       img.setAttribute('alt', 'Rapaz com tatuagem e brincos sentado em uma cadeira bebendo agua com gás')

    } else {
       img.setAttribute('src', './FOTOS/icon 2.png')
       img.setAttribute('alt', 'Rapaz com um casaco azul, com capuz tampando o rosto com a mão')
    }
}
