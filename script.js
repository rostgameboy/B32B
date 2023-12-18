function button(){
    var code = document.getElementById('code').value;
    const tip = document.querySelector('.tip');
    const secrets = document.querySelector('.secrets');
    const body = document.querySelector('body');
    if (code == 'CODE'){
        secrets.classList.add('display-flex');
        tip.classList.add('display-block');
        body.classList.add('correct');
        document.querySelector('h2').classList.add('display-none');
        document.querySelector('h3').classList.add('display-block');
    }
    if (code == 'HELP'){
        alert("So... you need to transfer the letters to ciphers. For example, if you mean a cat, then you need to type it like this: 3120.");
        body.classList.add('correct');
    }
    if (code == '3120'){
        alert("OK, take your cat and now try to write B32B, but in ciphers of course");
        document.querySelector('.cat').classList.add('display-block');
        body.classList.add('correct');
    }//CAT
    if (code == '2322'){
        document.querySelector('.s1').setAttribute('id', 's1');
        body.classList.add('correct');
        document.querySelector('h3').classList.remove('display-block');
    }//B32B
    if (code == '18151920911'){
        alert("Yes, it's me, who just make this site with crazy idea because i get bored and you don't get my photo because i don't see any good photo with me... but you can get this picture for send this code");
        body.classList.add('correct');
        document.querySelector('.me').classList.add('display-block');
    }
    if (code == '25581518'){
        body.classList.add('correct');
        document.querySelector('.s2').setAttribute('id', 's2');
    }
    if (code == '513185'){
        body.classList.add('correct');
        document.querySelector('.s3').setAttribute('id', 's3');
    }
    if (code == '11820251513'){
        body.classList.add('correct');
        document.querySelector('.s4').setAttribute('id', 's4');
    }
    if (code == '11820513'){
        body.classList.add('correct');
        document.querySelector('.s5').setAttribute('id', 's5');
    }
    if (code == '215144114'){
        body.classList.add('correct');
        document.querySelector('.s6').setAttribute('id', 's6');
    }
    if (code == '10211920914'){
        body.classList.add('correct');
        document.querySelector('.s7').setAttribute('id', 's7');
    }
    if (code == '135135'){

    }
    if (code == 'LeiKei'){
        secrets.classList.add('display-flex');
        tip.classList.add('display-block');
        body.classList.add('correct');
        document.querySelector('h2').classList.add('display-none');
        document.querySelector('h3').classList.add('display-block');
        document.querySelector('.cat').classList.add('display-block');
        document.querySelector('.s1').setAttribute('id', 's1');
        document.querySelector('h3').classList.remove('display-block');
        document.querySelector('.me').classList.add('display-block');
        document.querySelector('.s2').setAttribute('id', 's2');
        document.querySelector('.s3').setAttribute('id', 's3');
        document.querySelector('.s4').setAttribute('id', 's4');
    }
    setTimeout(() => {
        body.classList.remove('correct');
    }, '1000');
}