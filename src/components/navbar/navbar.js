import $ from 'jquery';
import './navbar.scss';
import createHomeView from '../home/home';
import loadProjects from '../projects/projects';
import createAboutMe from '../aboutme/aboutme';
import writeConnect from '../connect/connect';

const navbarEvents = () => {
  $('.nav-link').on('click', (e) => {
    if (e.target.id === 'navbar-button-home') {
      createHomeView();
    } else if (e.target.id === 'navbar-button-projects') {
      loadProjects();
    } else if (e.target.id === 'navbar-button-aboutme') {
      createAboutMe();
    } else if (e.target.id === 'navbar-button-connect') {
      writeConnect();
    }
  });
};

const createNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" id="navbar-button-home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="navbar-button-aboutme">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="navbar-button-projects">Projects</a>
        </li>    
        <li class="nav-item">
        <a class="nav-link" id="navbar-button-connect">Connect</a>
      </li>
      </ul>
    </div>
  </nav>
  `;
  $('#navbar').html(domString);
  navbarEvents();
};

export default createNavbar;