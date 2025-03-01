let tiempoRestante = 10;

        function actualizarCuentaRegresiva() {
            if (tiempoRestante > 0) {
                let dias = Math.floor(tiempoRestante / (24 * 60 * 60));
                let horas = Math.floor((tiempoRestante % (24 * 60 * 60)) / 3600);
                let minutos = Math.floor((tiempoRestante % 3600) / 60);
                let segundos = tiempoRestante % 60;

                document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
                document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
                document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
                document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");

                tiempoRestante--;
            } else {
                document.querySelector(".cuenta-regresiva").innerHTML = "<h4>¡Felices 10 Años Xeneize!</h4><br><h4>¡El gran día ha llegado!</h4>";
            }
        }

        setInterval(actualizarCuentaRegresiva, 1000);

        const musicIcon = document.querySelector('.bxs-music');
        const music = document.querySelector('#music');
        
        musicIcon.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                musicIcon.style.color = "var(--color-primary)";
                musicIcon.style.border = "3px solid var(--color-primary)";
            } else {
                music.pause();
                music.currentTime = 0;
                musicIcon.style.color = "var(--color-terciario)";
                musicIcon.style.border = "3px solid var(--color-terciario)";
            }
        });
        


document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("ver");
    const nuevoTextoElemento = document.getElementById("nuevoTxtVer");
    const textoAMostrar = "'Elegante-sport'";

    function escribirTexto(elemento, texto) {
        let i = 0;
        elemento.textContent = "";
        const intervalo = setInterval(() => {
            if (i < texto.length) {
                elemento.textContent += texto[i];
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, 50); 
    }

    boton.addEventListener("click", () => {
        escribirTexto(nuevoTextoElemento, textoAMostrar);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("CBU");
    const NCBUElemento = document.getElementById("N°CBU");
    const aliasElemento = document.getElementById("Alias");

    const textoCBU = "Número de CBU: 0101001001001001010";
    const textoAlias = "AliasMP:aaaabbbbcccc";

    function escribirTexto(elemento, texto) {
        let i = 0;
        elemento.textContent = ""; 
        const intervalo = setInterval(() => {
            if (i < texto.length) {
                elemento.textContent += texto[i];
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, 50); 
    }

    boton.addEventListener("click", () => {
        escribirTexto(NCBUElemento, textoCBU);
        setTimeout(() => {
            escribirTexto(aliasElemento, textoAlias);
        }, textoCBU.length * 50);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".efect");
  
    const observar = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observar.unobserve(entry.target);
            }
        });
    });
  
    elements.forEach(element => observar.observe(element));
  });
