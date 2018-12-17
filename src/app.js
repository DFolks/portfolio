import React from 'react';
import CoDApp from './img/CoDApp.jpg';
import BookmarkApp from './img/BookmarkApp.png';
import GoSeeThis from './img/GoSeeThis.jpg';
import SpanishApp from './img/SpanishApp.jpg';
import { SocialIcon } from 'react-social-icons';

import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <main className="app" role="main">
        <div className="mainBody">
          <section id="intro" className="section1">
            <h1>David Folks</h1>
            <h3>Software Developer</h3>
            <p>
              I am an ambitious developer who builds creative and simple
              solutions, interactive web applications with a focus on
              functionality and testability.
            </p>
            <div className="contact-info">
              <SocialIcon
                url="mailto:aldwyn.wot@gmail.com"
                color="white"
                rel="noopener noreferrer"
                target="_blank"
              />
              <SocialIcon
                url="https://github.com/DFolks"
                color="white"
                rel="noopener noreferrer"
                target="_blank"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/david-folks-98657155"
                color="white"
                rel="noopener noreferrer"
                target="_blank"
              />
            </div>
          </section>
          <section id="projects" className="section1">
            <h2>Projects:</h2>
            <ul>
              <li className="border-bottom">
                <div className="project-text">
                  <h3>Go See This</h3>
                  <p>
                    This app was created for movie and film buffs to share
                    recommendations for movies they enjoy with others without
                    the negativity that comes with similar sites. There is no
                    rating system, instead just offering users the ability to
                    read or leave reasons why they would recommend particular
                    movie. If a user finds another person with similar tastes
                    they can follow them to get a filtered list of
                    recommendations only from those people they follow. A Demo
                    user is available with username, 'DemoUser', and password,
                    'password12'.
                  </p>
                  <p>
                    Interesting challenges and lessons taken from this project
                    include: autofilling the dropdown search functionality,
                    utilization of overflow containers
                  </p>
                  <p>
                    Open{' '}
                    <a
                      href="https://github.com/thinkful-ei23/GoSeeThis-Client"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>{' '}
                    to view the repository for the front-end. Or for the{' '}
                    <a
                      href="https://github.com/thinkful-ei23/GoSeeThis-server"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      back-end
                    </a>
                    .
                  </p>
                </div>
                <div className="project-image">
                  <a
                    href="https://goseethis-client.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={GoSeeThis}
                      alt="Go See This"
                      height="auto"
                      width="75%"
                    />
                  </a>
                  <p>
                    {' '}
                    Skill set: Javascript, React/Redux, RESTful APIs,
                    Mongo/Mongoose, Bcrypt/Passport, JsonWebTokens, React-tabs
                  </p>
                </div>
              </li>
              <li>
                <div className="project-text">
                  <h3>Chronicles of Darkness Character App</h3>
                  <p>
                    CoD Character App is a creation, editable storage app for
                    creating and storing characters for the Chronicles of
                    Darkness tabletop roleplaying game. It combines forms (using
                    redux-form) to make a simple, easy-to-use way for people to
                    generate their character data. The data is easily editable
                    with each field being clickable to open an input for the new
                    data. This project is ongoing with new features planned for
                    and being added.
                  </p>
                  <p>
                    Interesting challenges and lessons taken from this project
                    include: working with nested objects using React and Redux,
                    and utilizing recursion to build the paths to the correct
                    place in said nested objects.
                  </p>
                  <p>
                    Open{' '}
                    <a
                      href="https://github.com/DFolks/cod-character-client"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>{' '}
                    to view the repository for the front-end. Or for the{' '}
                    <a
                      href="https://github.com/DFolks/cod-character-server"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      back-end
                    </a>
                    .
                  </p>
                </div>
                <div className="project-image">
                  <a
                    href="https://cod-characters-client.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={CoDApp}
                      alt="CoD Character App"
                      height="auto"
                      width="75%"
                    />
                  </a>
                  <p>
                    {' '}
                    Skill set: Javascript, React, redux-form, MongoDB, mongoose,
                    node.js, RESTful APIs, express, jwt, passport.js, bcrypt
                  </p>
                </div>
              </li>
              <li>
                <div className="project-text">
                  <h3>Speak Spanish</h3>
                  <p>
                    This is an app to help learn Spanish that utilizes a spaced
                    repetition algorithm and a linked list data structure to
                    repeat words that the user struggles with more often. There
                    is a demo account available for the site. Username:
                    DemoUser, and password: password12.
                  </p>
                  <p>
                    Interesting challenges and lessons taken from this project
                    include: utilizing a linked list data structure and
                    constructing an algorithm to reflect spaced repetition
                    theory, as well as utilizing a text to speech pattern to add
                    the audio element to the project.
                  </p>
                  <p>
                    Open{' '}
                    <a
                      href="https://github.com/DFolks/speak-spanish-client"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>{' '}
                    to view the repository for the front-end. Or for the{' '}
                    <a
                      href="https://github.com/DFolks/speak-spanish-server"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      back-end
                    </a>
                    .
                  </p>
                </div>
                <div className="project-image">
                  <a
                    href="https://speak-spanish-client.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={SpanishApp}
                      alt="Spanish App"
                      height="auto"
                      width="75%"
                    />
                  </a>
                  <p>
                    {' '}
                    Skill set: Javascript, Node.js, RESTful APIs, React, Redux,
                    Express, Mongo/Mongoose, Bcrypt/Passport,
                    Responsivevoice.org
                  </p>
                </div>
              </li>
              <li>
                <div className="project-text">
                  <h3>Bookmark App</h3>
                  <p>
                    This bookmark app is designed to bookmark web pages while
                    assigning them a rating and a description to help other
                    viewers decide which sites are worth visiting. It is open to
                    all visitors, not requiring a log-in. It is primarily shown
                    here to demonstrate understanding of jQuery.
                  </p>
                  <p>
                    Interesting challenges and lessons taken from this project
                    include: Utilizing a store and using CRUD to manipulate it.
                  </p>
                  <p>
                    Open{' '}
                    <a
                      href="https://github.com/thinkful-ei23/DavidF-bookmarks-app"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>{' '}
                    to view the repository.
                  </p>
                </div>
                <div className="project-image">
                  <a
                    href="https://thinkful-ei23.github.io/DavidF-bookmarks-app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={BookmarkApp}
                      alt="Bookmark App"
                      height="auto"
                      width="75%"
                    />
                  </a>
                  <p> Skill set: Javascript, jQuery, RESTful APIs</p>
                </div>
              </li>
            </ul>
          </section>
          <section id="skills" className="section2">
            <h2>Skills:</h2>
            <ul className="skill-list">
              <li>
                Front-End:
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JS</li>
                  <li>jQuery</li>
                  <li>ES6</li>
                  <li>React</li>
                  <li>Redux</li>
                </ul>
                <p>
                  I can build and style an interactive, responsive webpage or
                  app interface from scratch (like this one) with HTML, CSS, and
                  jQuery. For full-stack apps, I'm a fan of writing modular JS
                  components in ES6 using React as a front-end framework.
                </p>
              </li>
              <li>
                Back-End:
                <ul>
                  <li>RESTful APIs</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Postgres</li>
                  <li>Mongoose</li>
                  <li>Knex</li>
                </ul>
                <p>
                  I can build full-stack apps with RESTful APIs that perform
                  CRUD operations using Node.js and Express as my server-side
                  programming framework. I use JSON data in my applications and
                  MongoDB as my database along with Mongoose to create data
                  schema.
                </p>
              </li>
              <li>
                Authentication:
                <ul>
                  <li>Passport.js</li>
                  <li>bcrypt</li>
                  <li>JsonWebTokens</li>
                </ul>
                <p>
                  I can build apps that allow for user log-in, using Passport.js
                  as an authentication framework and bcrypt for password hasing.
                  I utilize JWTs for providing authorization to a user once
                  setup that controls what they can access.
                </p>
              </li>
              <li>
                Development Environment:
                <ul>
                  <li>VS Code</li>
                  <li>Chrome DevTools</li>
                  <li>command-line</li>
                  <li>Git</li>
                  <li>npm</li>
                  <li>Mocha</li>
                  <li>Chai</li>
                  <li>Travis Cl</li>
                  <li>Heroku</li>
                  <li>Enzyme</li>
                </ul>
                <p>
                  I work from VS code using Chrome DevTools for trouble-shooting
                  errors and analyzing fornt-end elements. I use npm to install
                  and manage dependencies that are utilized in my apps. I use
                  Mocha, Chai, Enzyme, and Travis for testing and deploy my apps
                  on Heroku.
                </p>
              </li>
              <li>
                Architecture Principles:
                <ul>
                  <li>Responsive web design</li>
                  <li>Mobile-first development</li>
                </ul>
                <p>
                  All of my work takes into consideration that users view
                  content from different browsers and devices that vary in
                  screen size. I build webpages and apps to be stylistically
                  responsive to the screen size. By developing first for mobile
                  devices, I ensure that functionality is not lost in any sized
                  device.
                </p>
              </li>
            </ul>
          </section>
          <section id="about" className="section1">
            <h2>About Me:</h2>
            <p>
              I got into web development because I love the changing environment
              that keeps me having to learn and push myself to adapt and evolve.
              It gives an opportunity for me to be creative and to come up with
              real solutions that can help people. I get to work with other
              great developers as part of a team.
            </p>
            <p>
              Outside of work I enjoy writing stories, creating imaginative
              tabletop game scenarios and campaigns for people to enjoy. They
              give me a chance to express myself creatively while having to
              think critically and overcome obstacles. I also enjoy cooking
              great food, because I get the opportunity to be creative and
              discover new combinations of flavors or techniques to prepare
              things that I can share with others. One of my biggest joys though
              is to be continuously learning new things, there is so much
              knowledge and ideas in the world.
            </p>
          </section>
        </div>
        <section>
          <small>Copyright &copy;2018 David Folks</small>
        </section>
      </main>
    );
  }
}
