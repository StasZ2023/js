

document.querySelector('button').onclick = function() {
    let star = document.querySelector('#start').value;
    let end = document.querySelector('#end').value;
    let p = document.querySelector('p');
    let strOb = new Date(star);
    let endOb = new Date(end)
    let x = (strOb - endOb) / (1000 * 60 * 60 * 24)
    if( star === '' || end === ''){
        // console.log('NAN')
        p.innerHTML = `<img src="https://media.stickerswiki.app/loveoops_flowers/127769.512.webp">`
    }
     else if(x >= 0){
        console.log((`${star} - ${end} / (1000 * 60 * 60 * 24) = ${x}`))
        p.innerHTML = `Количество дней : ${x} <br>${star} - ${end}  = ${x}`
    } else if(x < 0 ) {
    console.log('123')
    p.innerHTML = `Количество дней : ${-x} <br>${star} - ${end} = ${-x}`
    }
    console.log(star === '')
}

