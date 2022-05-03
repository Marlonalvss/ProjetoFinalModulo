function nextStep(){
    let question1;

    while(question1 !== 1 && question1 !== 2 ){
        question1 = Number(prompt("Escolha a alternativa 1 ou 2"));

        if(question1 === 1){
            location.href ="../question1/gameover.html";
        } else if (question1 === 2){
            location.href ="../question2/q2.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }
}

function nextStep2(){
    let question2;

    while(question2 !== 1 && question2 !== 2 ){
        question2 = Number(prompt("Escolha a alternativa 1 ou 2"));

        if(question2 === 1){
            location.href ="../question3/q3.html";
        } else if (question2 === 2){
            location.href ="../question2/gameoverq2.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }
}

function nextStep3(){
    let question3;

    while(question3 !== 1 && question3 !== 2 ){
        question3 = Number(prompt("Escolha a alternativa 1 ou 2"));

        if(question3 === 1){
            location.href ="../question3/gameoverq3.html";
        } else if (question3 === 2){
            location.href ="../final/end.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }
}

function nextStep4(){
    let question4;

    while(question4 !== 1 && question4 !== 2 ){
        question4 = Number(prompt("Escolha a alternativa 1 ou 2"));

        if(question4 === 1){
            location.href ="../final/aboutmovie.html";
        } else if (question4 === 2){
            location.href ="https://marlonalvss.github.io/ProjetoFinalModulo/";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }
}