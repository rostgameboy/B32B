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
            document.querySelector('#answer').classList.remove('anim');
            typing();
            document.getElementById('code').value = '';
        }, '100');

        switch (code) {
            case 'CODE':
                messageI = 0
                secrets.style.display = 'flex';
                tip.style.display = 'flex';
                body.classList.add('correct');
                document.querySelector('h2').style.display = 'none';
                document.querySelector('.wellcome').style.display = 'block';
                break;
            case 'HELP':
                document.querySelector('.help').style.display = 'block';
                document.querySelector('.help').style.animation = 'typing2 1s ease-out';
                document.querySelector('.wellcome').style.display = 'none';
                body.classList.add('correct');
                messageI = 0;
                setTimeout(() => {
                    document.querySelector('.help').style.animation = 'typing2 0.5s ease reverse';
                    setTimeout(() => {document.querySelector('.help').style.display = 'none';}, 500);
                }, 3000);
                break;
            case '3120': //cat
                document.querySelector('.cat').style.display = 'flex';
                body.classList.add('achive');
                messageI = 2;
                break; 
            case '2322': //B32B
                document.querySelector('.s1').setAttribute('id', 's1');
                body.classList.add('correct');
                document.querySelector('h3').style.display = 'none';
                messageI = 0;
                break;
            case '18151920911': //Rostik
                body.classList.add('correct');
                document.querySelector('.me').style.display = 'flex';
                messageI = 0;
                break;
            case '25581518': //Yehor
                body.classList.add('correct');
                document.querySelector('.s2').setAttribute('id', 's2');
                messageI = 0;
                break;
            case '513185': //Emre
                body.classList.add('correct');
                document.querySelector('.s3').setAttribute('id', 's3');
                messageI = 0;
                break;
            case '11820251513': //Artyom
                body.classList.add('correct');
                document.querySelector('.s4').setAttribute('id', 's4');
                messageI = 0;
                break;
            case '11820513': //Artem
                body.classList.add('correct');
                document.querySelector('.s5').setAttribute('id', 's5');
                messageI = 0;
                break;
            case '21584114': //Bohdan
                body.classList.add('correct');
                document.querySelector('.s6').setAttribute('id', 's6');
                messageI = 0;
                break;
            case '10211920914': //Justin
                body.classList.add('correct');
                document.querySelector('.s7').setAttribute('id', 's7');
                messageI = 0;
                break;
            case '135135': //meme
                break;
            case 'LeiKei':
                secrets.style.display = 'flex';
                tip.style.display = 'flex';
                body.classList.add('achive');
                document.querySelector('h2').style.display = 'none';
                document.querySelector('h3').style.display = 'none';
                document.querySelector('.cat').style.display = 'flex';
                document.querySelector('.s1').setAttribute('id', 's1');
                document.querySelector('.me').style.display = 'flex';
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
            document.querySelector('#answer').classList.remove('answer')
            document.querySelector('#answer').classList.add('anim')
        }, '4000');
        setTimeout(() => {
            canUseButton = true;
        }, 5200);
    }
}