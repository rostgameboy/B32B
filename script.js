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
        body.classList.add('correct');
    }
    if (code == '3120'){
        alert("OK, take your cat and now try to write B32B, but in ciphers of course")
        document.querySelector('.cat').classList.add('display-block')
        body.classList.add('correct');
    }
    if (code == '2322'){
        document.querySelector('.s1').setAttribute('id', 's1')
        body.classList.add('correct');
        document.querySelector('h3').classList.remove('display-block')
    }
    if (code == '18151920911'){
        alert("Yes, it's me, who just make this site with crazy idea because i get bored and you don't get my photo because i don't see any good photo with me... but you can get this picture for send this code")
        body.classList.add('correct');
        document.querySelector('.me').classList.add('display-block')
    }
    setTimeout(() => {
        body.classList.remove('correct')
    }, '1000')
}