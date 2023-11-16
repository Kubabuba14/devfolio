// Array of project details
const projects = [
    { id: 1, imageURL: 'https://unsplash.com/photos/-5rA4DRrEXU/download?force=true' },
    { id: 23, imageURL: 'https://unsplash.com/photos/ZO4rHqkCat4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHNwbGFzaHxlbnwwfHx8fDE3MDAxNTAzODl8MA&force=true' },
];

// Function to create a project element
function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.id = `project${project.id}`;

    const projectOverlay = document.createElement('div');
    projectOverlay.className = 'project-overlay';
    projectOverlay.style.background = 'linear-gradient(rgba(17, 17, 24, 0.1), rgba(17, 17, 24, 0.9))';

    const projectImage = document.createElement('div');
    projectImage.style.backgroundImage = `url(${project.imageURL})`;
    projectImage.className = 'project-image';

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = `Project ${project.id}`;

    projectElement.appendChild(projectOverlay); // Add the overlay
    projectElement.appendChild(projectImage);
    projectElement.appendChild(projectTitle);

    return projectElement;
}

// Function to add projects to the projects container
function addProjectsToContainer() {
    const projectsContainer = document.querySelector('.projects-container');

    projects.forEach((project) => {
        const projectElement = createProjectElement(project);
        projectsContainer.appendChild(projectElement);
    });
}

// Call the function to add projects to the container
addProjectsToContainer();


