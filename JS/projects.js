import { renderProjectGrid } from "./data/single-project.js";


let types = ['all', 'college', 'unreal', 'blender'];

renderProjects();


function renderProjects() {

  renderProjectGrid();

  function filterSelection(type) {
    // Show projects that have the same button type
    const list = document.querySelectorAll('.column');
    list.forEach((project) => {
      if (type === 'all' || project.classList.contains(type)) {
        showProject(project, 'show');
      } else {
        removeProject(project, 'show');
      }
    });
  }

  // class = 'column type show'
  function showProject(element, name) {
    if(!element.classList.contains(name)) {
      element.classList.add(name);
    }
  }
  // class = 'column type'
  function removeProject(element, name) {
    if(element.classList.contains(name)) {
      element.classList.remove(name);
    }
  }

  // Start filter with all
  filterSelection('all');

 types.forEach((type) => {
    const button = document.querySelector(`.js-btn-${type}`);
    if(button) {
      button.addEventListener('click', (event) => {
        // Remove active class from buttons
        types.forEach((t) => {
          const btn = document.querySelector(`.js-btn-${t}`);
          if(btn) { btn.classList.remove('active'); }
        });

        // Add the active class to button
        button.classList.add('active');

        // Filter projects
        filterSelection(type);
      });
    } 
  });

};
