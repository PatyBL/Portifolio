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