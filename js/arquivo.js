//clicar e colocar o projeto em tamanho grande e clicar novamente para voltar ao tamanho normal
function sizeme(element){
    const projects = document.querySelectorAll('.project');

    if(element.classList.contains('project-active')){
        element.classList.remove('project-active');
        return;
    }

    projects.forEach(project => {
        project.classList.remove('project-active');
    });

    element.classList.add('project-active');
}
//clicar e colocar todas as imagens em tamanho grande e clicar novamente para voltar ao tamanho normal
function gallery(event, element){
    event.stopPropagation();

    if(element.classList.contains('img')){
        element.classList.remove('img');
        element.classList.add('img-a');
        return;
    }

    if(element.classList.contains('img-a')){
        element.classList.remove('img-a');
        element.classList.add('img');
    }
}