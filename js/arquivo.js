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
function gallery(event, element){
    event.stopPropagation();
    // Impede a galeria de abrir caso o projeto não esteja maximizado sendo a unica verifaicação de active
    const project = element.closest('.project');

    if(!project.classList.contains('project-active')){
        return;
    }
    // Abre a galeria
    if(element.classList.contains('img')){
        element.classList.remove('img');
        element.classList.add('img-a');
        return;
    }
    // Fecha a galeria
    if(element.classList.contains('img-a')){
        element.classList.remove('img-a');
        element.classList.add('img');
    }
}

function maximizar(element){
    const certificado = document.querySelectorAll('.certificado');
    // Se o projeto já estiver maximizado, fecha
    if(element.classList.contains('certificado-maximizado')){
        element.classList.remove('certificado-maximizado');
        return;
    }
    // Fecha todos os outros projetos
    certificado.forEach(card => {
        card.classList.remove('certificado-maximizado');
    });
    // Maximiza o projeto clicado
    element.classList.add('certificado-maximizado');
}
     
