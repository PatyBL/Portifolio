// Clicar e colocar o projeto em tamanho grande e quando clicar novamente, voltar ao tamanho normal
function sizeme(element){
    const projects = document.querySelectorAll('.project');
    // Se o projeto já estiver maximizado, fecha
    if(element.classList.contains('project-active')){
        element.classList.remove('project-active');
        // Força a galeria desse projeto a voltar para uma imagem
        const galleryElement = element.querySelector('.img-a');

        if(galleryElement){
            galleryElement.classList.remove('img-a');
            galleryElement.classList.add('img');
        }
        return;
    }
    // Fecha todos os outros projetos
    projects.forEach(project => {
        project.classList.remove('project-active');
        // Força qualquer galeria aberta a fechar também
        const galleryElement = project.querySelector('.img-a');

        if(galleryElement){
            galleryElement.classList.remove('img-a');
            galleryElement.classList.add('img');
        }
    });
    // Maximiza o projeto clicado
    element.classList.add('project-active');
}

// Clicar na imagem e abrir/fechar a galeria com a verificação de active já
function gallery(event, element, id){
    event.stopPropagation();
    // Impede a galeria de abrir caso o projeto não esteja maximizado sendo a unica verifaicação de active
    const project = element.closest('.project');
    const button = document.getElementById(id)

    if(!project.classList.contains('project-active')){
        return;
    }

    if(button){
        button.classList.remove("btn-fechar")
        button.classList.add("btn-fecharON")
    }
    // Abre a galeria
    if(element.classList.contains('img')){
        element.classList.remove('img');
        element.classList.add('img-a');
        return;
    }

}
//button de exit da galeria
function exit_gallery(event, element, eu){
    event.stopPropagation();

    if(eu){
        eu.classList.remove("btn-fecharON")
        eu.classList.add("btn-fechar")
    }

    if(element.classList.contains('img-a')){

        element.classList.remove('img-a');
        element.classList.add('img');
    }
}


//Segurar na imagem para zoom
let imagemFlutuante = null;
//Criação da copia no comeo do clique
document.addEventListener('pointerdown', (event) => {
    //pega a imagem clicada
    const img = event.target.closest('.project-active .img-a img');
    //se a imagem realmente existir ele continua
    if (!img) return;

    //puxa as informações físicas do elemento, como altura, largura, top e left
    const pos = img.getBoundingClientRect();
    //pega o CSS da imagem original
    const estilo = getComputedStyle(img);

    //cria uma cópia da imagem para que ela possa sair da div pai
    imagemFlutuante = img.cloneNode(true);
    //adiciona a classe css a copia
    imagemFlutuante.classList.add('menor-off');

    //mantém as características e a posição da imagem original
    Object.assign(imagemFlutuante.style, {
        position: 'fixed',
        left: `${pos.left}px`,
        top: `${pos.top}px`,
        width: `${pos.width}px`,
        height: `${pos.height}px`,
        margin: '0',
        objectFit: estilo.objectFit,
        borderRadius: estilo.borderRadius,
        boxShadow: estilo.boxShadow,
        zIndex: '999999'
    });

    //coloca a cópia diretamente no body, fora das limitações do card
    document.body.appendChild(imagemFlutuante);
});

//Delete da copia ao clique terminar
document.addEventListener('pointerup', () => {
    //remove a cópia ampliada
    imagemFlutuante?.remove();
    //limpa a variável para permitir uma nova copia
    imagemFlutuante = null;
});
