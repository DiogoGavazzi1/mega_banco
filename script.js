const botao = document.getElementById('botao');
const texto = document.getElementById('texto');
const usernameInput = document.getElementById('exampleInputEmail1');

botao.addEventListener('click', function(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username === "JoAo_SoUsa_Dx14r") {

        // Efeito de "apagão"
        document.body.style.transition = "0.5s";
        document.body.style.opacity = "0";

        setTimeout(() => {

            const scare = document.getElementById("jumpscare");
            const video = document.getElementById("videoScare");

            document.body.style.opacity = "1";

            scare.classList.remove("d-none");

            video.muted = false;
            video.volume = 1;
            video.play();

            // Tremor violento
            setInterval(() => {
                scare.style.transform =
                `translate(${Math.random()*40-20}px, ${Math.random()*40-20}px)`;
            }, 30);

        }, 1500);

    } else {

        texto.innerText =
        "Essa senha já está a ser utilizada por JoAo_SoUsa_Dx14r, por favor tente outra senha.";
    }

});