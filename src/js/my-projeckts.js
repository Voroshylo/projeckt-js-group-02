import project1 from '../img/my-projeckts/1.jpg';
import project1Retina from '../img/my-projeckts/1-2x.jpg';
import project2 from '../img/my-projeckts/2.jpg';
import project2Retina from '../img/my-projeckts/2-2x.jpg';
import project3 from '../img/my-projeckts/3.jpg';
import project3Retina from '../img/my-projeckts/3-2x.jpg';
import project4 from '../img/my-projeckts/4.jpg';
import project4Retina from '../img/my-projeckts/4-2x.jpg';
import project5 from '../img/my-projeckts/5.jpg'
import project5Retina from '../img/my-projeckts/5-2x.jpg';
import project6 from '../img/my-projeckts/6.jpg';
import project6Retina from '../img/my-projeckts/6-2x.jpg';
import project7 from '../img/my-projeckts/7.jpg';
import project7Retina from '../img/my-projeckts/7-2x.jpg';
import project8 from '../img/my-projeckts/8.jpg';
import project8Retina from '../img/my-projeckts/8-2x.jpg';
import project9 from '../img/my-projeckts/9.jpg';
import project9Retina from '../img/my-projeckts/9-2x.jpg';
import project10 from '../img/my-projeckts/10.jpg';
import project10Retina from '../img/my-projeckts/10-2x.jpg';
import spriteSvg from '../img/sprite.svg'

const projects = [
  {
    imgSrc: project1,
    imgSrcSet: `${project1} 1x, ${project1Retina} 2x`,
    alt: "power-pulse-webservice",
    tech: "React, JavaScript, Node JS, Git",
    description: "power pulse webservice",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
  {
    imgSrc: project2,
    imgSrcSet: `${project2} 1x, ${project2Retina} 2x`,
    alt: "mimino-website",
    tech: "React, JavaScript, Node JS, Git",
    description: "mimino website",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
  {
    imgSrc: project3,
    imgSrcSet: `${project3} 1x, ${project3Retina} 2x`,
    alt: "vyshyvanka",
    tech: "React, JavaScript, Node JS, Git",
    description: "vyshyvanka vibes Landing Page",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
  {
    imgSrc: project4,
    imgSrcSet: `${project4} 1x, ${project4Retina} 2x`,
    alt: "green-harvest-online-store",
    tech: "React, JavaScript, Node JS, Git",
    description: "green harvest online store",
    link: "https://voroshylo.github.io/project-group-3/"
  },
  {
    imgSrc: project5,
    imgSrcSet: `${project5} 1x, ${project5Retina} 2x`,
    alt: "wallet-webservice",
    tech: "React, JavaScript, Node JS, Git",
    description: "wallet webservice",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
  {
    imgSrc: project6,
    imgSrcSet: `${project6} 1x, ${project6Retina} 2x`,
    alt: "chego-jewelry-website",
    tech: "React, JavaScript, Node JS, Git",
    description: "chego jewelry website",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
  {
    imgSrc: project7,
    imgSrcSet: `${project7} 1x, ${project7Retina} 2x`,
    alt: "energy-flow-webservice",
    tech: "React, JavaScript, Node JS, Git",
    description: "energy flow webservice",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
  {
    imgSrc: project8,
    imgSrcSet: `${project8} 1x, ${project8Retina} 2x`,
    alt: "fruitbox-online-store",
    tech: "React, JavaScript, Node JS, Git",
    description: "fruitbox online store",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
  {
    imgSrc: project9,
    imgSrcSet: `${project9} 1x, ${project9Retina} 2x`,
    alt: "English-excellence-webservice",
    tech: "React, JavaScript, Node JS, Git",
    description: "English excellence webservice",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
  {
    imgSrc: project10,
    imgSrcSet: `${project10} 1x, ${project10Retina} 2x`,
    alt: "starlight-studio-landing-page",
    tech: "React, JavaScript, Node JS, Git",
    description: "starlight studio landing page",
    link: "https://github.com/Voroshylo/projeckt-js-group-02"
  },
];
const projectsPerPage = 3;
let currentPage = 0;
const projectsUl = document.querySelector('.projects-ul');
const loadMoreBtn = document.querySelector('.btn-load-more');

function loadProjects() {
  const start = currentPage * projectsPerPage;
  const end = start + projectsPerPage;
  const projectsToLoad = projects.slice(start, end);

  projectsToLoad.forEach(project => {
    const li = document.createElement('li');
    li.classList.add('projects-li');
    
    li.innerHTML = `
    <div class="div-projects">
      <img
        class="projects-img"
        srcset="${project.imgSrcSet}"
        src="${project.imgSrc}"
        alt="${project.alt}"
        width="320"
      />
      </div>
        <h3 class="projects-h">${project.tech}</h3>
        <div class="div-p-a">
        <p class="projects-p">${project.description}</p>
        <a href="${project.link}" class="projects-btn" target="_blank" rel="noopener noreferrer">
          VISIT
          <svg class="btn-projects-icon" width="14" height="14">
            <use href="${spriteSvg}#icon-Vector-Projects"></use>
          </svg>
        </a>
        </div>
      
    `;

    projectsUl.appendChild(li);
  });

  currentPage++;

  if (currentPage * projectsPerPage >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', loadProjects);

loadProjects()