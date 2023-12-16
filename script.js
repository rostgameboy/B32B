function button(){
    var code = document.getElementById('code').value;
    const tip = document.querySelector('.tip');
    const secrets = document.querySelector('.secrets');
    const body = document.querySelector('body');
    if (code == 'CODE'){
        secrets.classList.add('display-flex');
        tip.classList.add('display-block');
        body.classList.add('correct');
        document.querySelector('h2').classList.add('display-none')
        document.querySelector('h3').classList.add('display-block')
    }
    if (code == 'HELP'){
        alert("So... you need to transfer the letters to ciphers. For example, if you mean a cat, then you need to type it like this: 3120.")
    }
    if (code == '3120'){
        alert("OK, take your cat and now try to write B32B, but in ciphers of course")
        document.querySelector('.cat').classList.add('display-block')
    }
    if (code == '2322'){
        document.querySelector('.s1').setAttribute('id', 's1')
        body.classList.add('correct');
        document.querySelector('h3').classList.remove('display-block')
    }
    setTimeout(() => {
        body.classList.remove('correct')
    }, '1000')
}