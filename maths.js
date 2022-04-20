var answer;
var score = 0;
var backgroundImages = [];


function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2
    // const n2 = Math.random()*;
}

function checkAnswer() {

    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction: ${prediction}`)

    if (prediction == answer) {
        score++;
        console.log(`correct, score:${score}`);
        if (score < 7) {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
            
        }else{ alert('congrats');
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;

                }

    } else {
            score--;

            if (score < 0) { score = 0 }
            setTimeout(function () {
                alert('Wrong');
                backgroundImages.pop(`url('images/background${score}.svg')`);
                document.body.style.backgroundImage = backgroundImages;
                
            },3000)
            console.log(`wrong, score: ${score}`);
        }
    }
