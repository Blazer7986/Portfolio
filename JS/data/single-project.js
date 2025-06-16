let projects = [
  {
    type: 'college',
    file: 'Trash.html',
    name: "Clean Cycle's Trash Bin",
    image: 'Trash/TrashBin1.png',
    description: `A trash bin that can track and detect handmovements.`,
  },
  {
    type: 'college',
    file: 'Database1.html',
    name: 'Fantasy League Database Website',
    image: 'Database1/Login.jpeg',
    description: `A Database project that can create Baseball Game 
      tourament with your teams.`,
  },
  {
    type: 'blender',
    file: 'Donuts.html',
    name: 'Blender Donut Tray',
    image: 'Donuts/Donuts1.png',
    description: `A dounut Tray using all features from Blender 
      including 3D Modeling, lighting, and etc.`,
  },
  {
    type: 'blender',
    file: 'Sushi.html',
    name: 'Blender Sushi Platter',
    image: 'Sushi/Basic_Sushi.png',
    description: `An arrangement of sushi platters and a soysause 
      container that is cartoony and enticing for viewers.`,
  },
  {
    type: 'unreal',
    file: 'Pixel1.html',
    name: 'Unreal Project #1',
    image: 'comingSoon.jpg',
    description: `Create a 2D Pixel Platform videogame in Unreal Engine. 
      Check out the link on <a href="Ichio"> Ichio </a> .`,
  },
  {
    type: 'unreal',
    file: 'Card.html',
    name: 'Unreal Project #2',
    image: 'comingSoon.jpg',
    description: `Create a Story Card Game that can be play with other players 
      and even play with a Bot. Please check it out on my game account.`,
  },
];


export function renderProjectGrid() {
  let projectsHTML = '';

  projects.forEach((project) => {

    const columnProject = `
      <div class="column ${project.type}">
        <div class="project-image">
          <a href="Projects/${project.file}">
            <img src="Images/Projects/${project.image}" alt="${project.name}" />
          </a>
        </div>
        <div class="content">
          <h4>
            <a class = "js-project-name" href="Projects/${project.file}"
              >${project.name}</a>
          </h4>
          <p>${project.description}</p>
        </div>
      </div>
    `;
    
    projectsHTML += columnProject;
  });

  document.querySelector('.js-project-grid').innerHTML = projectsHTML;
}

