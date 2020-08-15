

document.querySelector('.serviços-container h3').onclick = function() {
    alert('Ouch! Stop poking me!');
}


//função que seleciona foto e ao evento de clique troca pela outra foto

let myImage = document.querySelector('.img-sobre img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/sobre-juliana.jpg') {
      myImage.setAttribute('src','img/firefox2.png');
    } else {
      myImage.setAttribute('src','img/sobre-juliana.jpg');
    }
}

