document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        button();
    }
});

let messageI = 1;
let canUseButton = true;

function typing() {
    let charI = 0;
    const answer = document.getElementById('answer');
    const massege = [
        "Correct!",
        "Wrong code...",
        "Achievement!"
    ];
    const currentMessage = massege[messageI];

    function type() {
        if (charI < currentMessage.length) {
            answer.innerHTML += currentMessage.charAt(charI);
            charI++;
            setTimeout(type, 100);
            setTimeout(vanish, 3800);
        }
    }

    function vanish() {
        answer.innerHTML = '';
    }
    type();
}


function button() {
    if (canUseButton) {
        console.log('Button pressed!');
        canUseButton = false;
        const code = document.getElementById('code').value;
    const tip = document.querySelector('.tip');
    const secrets = document.querySelector('.secrets');
    const body = document.querySelector('body');
    messageI = 1;
    setTimeout(() => {
        document.querySelector('#answer').classList.add('answer');
        typing()
    }, '100');

    switch (code) {
        case 'CODE':
            messageI = 0
            secrets.classList.add('display-flex');
            tip.classList.add('display-block');
            body.classList.add('correct');
            document.querySelector('h2').classList.add('display-none');
            document.querySelector('h3').classList.add('display-block');
            break;
        case 'HELP':
            alert("So... you need to transfer the letters to ciphers. For example, if you mean a cat, then you need to type it like this: 3120.");
            body.classList.add('correct');
            messageI = 0;
            break;
        case '3120':
            alert("OK, take your cat and now try to write B32B, but in ciphers of course");
            document.querySelector('.cat').classList.add('display-block');
            body.classList.add('achive');
            messageI = 2;
            break; 
        case '2322':
            document.querySelector('.s1').setAttribute('id', 's1');
            body.classList.add('correct');
            document.querySelector('h3').classList.remove('display-block');
            messageI = 0;
            break;
        case '18151920911':
            alert("Yes, it's me, who just make this site with crazy idea because i get bored and you don't get my photo because i don't see any good photo with me... but you can get this picture for send this code");
            body.classList.add('correct');
            document.querySelector('.me').classList.add('display-block');
            messageI = 0;
            break;
        case '25581518':
            body.classList.add('correct');
            document.querySelector('.s2').setAttribute('id', 's2');
            messageI = 0;
            break;
        case '513185':
            body.classList.add('correct');
            document.querySelector('.s3').setAttribute('id', 's3');
            messageI = 0;
            break;
        case '11820251513':
            body.classList.add('correct');
            document.querySelector('.s4').setAttribute('id', 's4');
            messageI = 0;
            break;
        case '11820513':
            body.classList.add('correct');
            document.querySelector('.s5').setAttribute('id', 's5');
            messageI = 0;
            break;
        case '215144114':
            body.classList.add('correct');
            document.querySelector('.s6').setAttribute('id', 's6');
            messageI = 0;
            break;
        case '10211920914':
            body.classList.add('correct');
            document.querySelector('.s7').setAttribute('id', 's7');
            messageI = 0;
            break;
        case '135135':
            break;
        case 'LeiKei':
            secrets.classList.add('display-flex');
            tip.classList.add('display-block');
            body.classList.add('achive');
            document.querySelector('h2').classList.add('display-none');
            document.querySelector('h3').classList.add('display-block');
            document.querySelector('.cat').classList.add('display-block');
            document.querySelector('.s1').setAttribute('id', 's1');
            document.querySelector('h3').classList.remove('display-block');
            document.querySelector('.me').classList.add('display-block');
            document.querySelector('.s2').setAttribute('id', 's2');
            document.querySelector('.s3').setAttribute('id', 's3');
            document.querySelector('.s4').setAttribute('id', 's4');
            messageI = 2;
            break;
        default:
            body.classList.add('wrong');
            break;
    }
    setTimeout(() => {
        body.removeAttribute('class')
    }, '1000');
    setTimeout(() => {
        document.querySelector('#answer').removeAttribute('class')
    }, '4000');
        setTimeout(() => {
            canUseButton = true;
        }, 4300);
    }
}