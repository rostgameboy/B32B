document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        button();
    }
});
function cancel() {
    document.querySelector('.help').style.display = 'none';
    document.querySelector('.wellcome').style.display = 'none';
    document.querySelector('.cancel').style.display = 'none';
}

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
                document.querySelector('.cancel').style.display = 'block';
                break;
            case 'HELP':
                document.querySelector('.help').style.display = 'block';
                document.querySelector('.cancel').style.display = 'block';
                document.querySelector('.help').style.animation = 'typing2 1s ease-out';
                body.classList.add('correct');
                messageI = 0;
                setTimeout(() => {
                    document.querySelector('.help').style.animation = 'typing2 0.5s ease reverse';
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
            case '135135': //meme
                body.classList.add('achive');
                messageI = 2;
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
            case '51820217182112': //Ertugrul
                body.classList.add('correct');
                document.querySelector('.s8').setAttribute('id', 's8');
                messageI = 0;
                break;
            case '45149112': //Denial
                body.classList.add('correct');
                document.querySelector('.s9').setAttribute('id', 's9');
                messageI = 0;
                break;
            case '11822914': //Arvin
                body.classList.add('correct');
                document.querySelector('.s10').setAttribute('id', 's10');
                messageI = 0;
                break;
            case '201182114': //Tarun
                body.classList.add('correct');
                document.querySelector('.s11').setAttribute('id', 's11');
                messageI = 0;
                break;
            case '124211218526111': //Abdulrezak
                body.classList.add('correct');
                document.querySelector('.s12').setAttribute('id', 's12');
                messageI = 0;
                break;
            case '1242112181813114': //Abdulrahman
                body.classList.add('correct');
                document.querySelector('.s13').setAttribute('id', 's13');
                messageI = 0;
                break;
            case '11811294': //Khalid
                body.classList.add('correct');
                document.querySelector('.s14').setAttribute('id', 's14');
                messageI = 0;
                break;
            case '13111118': //Makar
                body.classList.add('correct');
                document.querySelector('.s15').setAttribute('id', 's15');
                messageI = 0;
                break;
            case '141187519': //Narges
                body.classList.add('correct');
                document.querySelector('.s16').setAttribute('id', 's16');
                messageI = 0;
                break;
            case '11411920119991': //Anastasiia
                body.classList.add('correct');
                document.querySelector('.s17').setAttribute('id', 's17');
                messageI = 0;
                break;
            case '125141': //Lena
                body.classList.add('correct');
                document.querySelector('.s18').setAttribute('id', 's18');
                messageI = 0;
                break;
            case '9129141': //Ilina
                body.classList.add('correct');
                document.querySelector('.s19').setAttribute('id', 's19');
                messageI = 0;
                break;
            case '1994181': //Sidra
                body.classList.add('correct');
                document.querySelector('.s20').setAttribute('id', 's20');
                messageI = 0;
                break;
            case '1251': //Aya
                body.classList.add('correct');
                document.querySelector('.s21').setAttribute('id', 's21');
                messageI = 0;
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
                document.querySelector('.s5').setAttribute('id', 's5');
                document.querySelector('.s6').setAttribute('id', 's6');
                document.querySelector('.s7').setAttribute('id', 's7');
                document.querySelector('.s8').setAttribute('id', 's8');
                document.querySelector('.s9').setAttribute('id', 's9');
                document.querySelector('.s10').setAttribute('id', 's10');
                document.querySelector('.s11').setAttribute('id', 's11');
                document.querySelector('.s12').setAttribute('id', 's12');
                document.querySelector('.s13').setAttribute('id', 's13');
                document.querySelector('.s14').setAttribute('id', 's14');
                document.querySelector('.s15').setAttribute('id', 's15');
                document.querySelector('.s16').setAttribute('id', 's16');
                document.querySelector('.s17').setAttribute('id', 's17');
                document.querySelector('.s18').setAttribute('id', 's18');
                document.querySelector('.s19').setAttribute('id', 's19');
                document.querySelector('.s20').setAttribute('id', 's20');
                document.querySelector('.s21').setAttribute('id', 's21');
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