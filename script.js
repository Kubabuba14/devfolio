const projects = [
    { id: 1, imageURL: 'https://unsplash.com/photos/-5rA4DRrEXU/download?force=true' },
    { id: 23, imageURL: 'https://unsplash.com/photos/ZO4rHqkCat4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHNwbGFzaHxlbnwwfHx8fDE3MDAxNTAzODl8MA&force=true' },
    // Add more project details as needed
  ];
  
  function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.id = `project${project.id}`;
  
    const projectImage = document.createElement('div');
    projectImage.style.backgroundImage = `url(${project.imageURL})`;
    projectImage.className = 'project-image';
  
    // Add overlay styling
    projectElement.style.position = 'relative';
    projectElement.style.zIndex = '1';
    projectElement.style.overflow = 'hidden';
  
    const overlay = document.createElement('div');
    overlay.style.content = '';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.left = '0';
    overlay.style.background = 'linear-gradient(rgba(17, 17, 24, 0.1), rgba(17, 17, 24, 0.9))';
    overlay.style.zIndex = '1';
  
    projectElement.appendChild(projectImage);
    projectElement.appendChild(overlay);
  
    return projectElement;
  }
  
  function addProjectsToContainer() {
    const projectsContainer = document.querySelector('.projects-container');
  
    projects.forEach((project) => {
      const projectElement = createProjectElement(project);
      projectsContainer.appendChild(projectElement);
    });
  }
  
  addProjectsToContainer();
  