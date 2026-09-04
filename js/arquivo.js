function sizeme(element) {
    // Remove a classe "project-active" de todos os elementos com a classe "project"
    const projects = document.querySelectorAll('.project');
    //verifica se estou clicando num item já clicado, se sim, remove a classe e retorna
    if (element.classList.contains('project-active')) {
        element.classList.remove('project-active');
        return;
    }
    // Tira a classe "project-active" de todos os elementos com a classe "project"
    projects.forEach(project => {
        project.classList.remove('project-active');
    });
    // Adiciona a classe "project-active" ao elemento clicado
    element.classList.add('project-active');
}

