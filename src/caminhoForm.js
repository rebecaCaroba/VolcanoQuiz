document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btnJanelaFlutuante');

    btn.addEventListener('click', function(){
        var url = 'quiz.html';
        let janelaFlutuante = window.open(url, "Quiz Vulcão", "width=970,height=700");

        if(!janelaFlutuante) {
            alert('ERRO! Janela bloqueada pelo navegador');
        }
    })
})