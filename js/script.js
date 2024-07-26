document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.elemento');
    const grupos = document.querySelectorAll('.grupo');

    elementos.forEach(elemento => {
        elemento.addEventListener('dragstart', iniciarArrastre);
    });

    grupos.forEach(grupo => {
        grupo.addEventListener('dragover', arrastrarSobre);
        grupo.addEventListener('drop', soltar);
    });

    function iniciarArrastre(e) {
        e.dataTransfer.setData('text', e.target.textContent);
        e.dataTransfer.setData('grupo', e.target.dataset.group);
    }

    function arrastrarSobre(e) {
        e.preventDefault();
    }

    function soltar(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        const grupo = e.dataTransfer.getData('grupo');
        const elementoSoltado = Array.from(elementos).find(elemento => elemento.textContent === data);
        
        if (elementoSoltado) {
            if (e.target.id === `grupo-${grupo}`) {
                e.target.appendChild(elementoSoltado);
                elementoSoltado.classList.remove('incorrecto');
                elementoSoltado.classList.add('correcto');
            } else {
                elementoSoltado.classList.remove('correcto');
                elementoSoltado.classList.add('incorrecto');
            }
        }
    }
});
