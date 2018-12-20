import $ from 'jquery';
import './technologies.scss';

const createTechnologies = () => {
  const domString = `
    <div class="container d-flex justify-content-center header">
      <h1 class="text-dark mt-4">Technologies</h1>
    </div>
    <div class="container d-flex flex-column p-5">
        <div>
          <h4 class="skillz">"What I do have is a very particular set of skills."</h4>
        </div>
        <div class="icons container d-flex flex-wrap justify-content-center">
          <i class="devicon-html5-plain-wordmark"></i>
          <i class="devicon-css3-plain-wordmark"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-bootstrap-plain-wordmark"></i>
          <i class="devicon-sass-original"></i>
          <i class="devicon-jquery-plain-wordmark"></i>
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-nodejs-plain"></i>
          <i class="devicon-git-plain-wordmark"></i>
          <i class="devicon-github-plain-wordmark"></i>
          <i class="devicon-webpack-plain-wordmark"></i>
        </div>
    </div>
  `;
  $('#content').html(domString);
};

export default createTechnologies;
