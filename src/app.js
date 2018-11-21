import React from 'react';
import CoDApp from './img/CoDApp.jpg';
import BookmarkApp from './img/BookmarkApp.png';
import GoSeeThis from './img/GoSeeThis.jpg';
import SpanishApp from './img/SpanishApp.png';

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
          </section>
          <section id="contact" className="section2">
            <h2>Contact Information:</h2>
            <p>
              Email:
              <a href="mailto:aldwyn.wot@gmail.com" className="contact-link">
                aldwyn.wot@gmail.com
              </a>
            </p>
            <p>
              Github:
              <a href="https://github.com/DFolks" className="contact-link">
                https://github.com/DFolks
              </a>
            </p>
            <p>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/david-folks-98657155"
                className="contact-link"
              >
                https://www.linkedin.com/in/david-folks-98657155
              </a>
            </p>
          </section>
          <section id="projects" className="section1">
            <h2>Projects:</h2>
            <ul>
              <li>
                <h4>Go See This</h4>
                <p>
                  This app was created for movie and film buffs to share
                  recommendations for movies they enjoy with others without the
                  negativity that comes with similar sites. There is no rating
                  system, instead just offering users the ability to read or
                  leave reasons why they would recommend particular movie. If a
                  user finds another person with similar tastes they can follow
                  them to get a filtered list of recommendations only from those
                  people they follow.
                </p>
                <p>
                  Click{' '}
                  <a href="https://github.com/thinkful-ei23/GoSeeThis-Client">
                    here
                  </a>{' '}
                  to view the Github repository for the front-end. Or{' '}
                  <a href="https://github.com/thinkful-ei23/GoSeeThis-server">
                    here
                  </a>{' '}
                  for the back-end
                </p>
                <a href="https://goseethis-client.herokuapp.com/">
                  <img
                    src={GoSeeThis}
                    alt="Go See This"
                    height="auto"
                    width="50%"
                  />
                </a>
                <p>
                  {' '}
                  Skill set: Javascript, React/Redux, RESTful APIs,
                  Mongo/Mongoose, Bcrypt/Passport, JsonWebTokens, React-tabs
                </p>
              </li>
              <li>
                <h4>Chronicles of Darkness Character App</h4>
                <p>
                  CoD Character App is a creation, editable storage app for
                  creating and storing characters for the Chronicles of Darkness
                  tabletop roleplaying game. It combines forms (using
                  redux-form) to make a simple, easy-to-use way for people to
                  generate their character data. The data is easily editable
                  with each field being clickable to open an input for the new
                  data. This project is ongoing with new features planned for
                  and being added.
                </p>
                <p>
                  Click{' '}
                  <a href="https://github.com/DFolks/cod-character-client">
                    here
                  </a>{' '}
                  to view the Github repository for the front-end. Or{' '}
                  <a href="https://github.com/DFolks/cod-character-server">
                    here
                  </a>{' '}
                  for the back-end
                </p>
                <a href="https://cod-characters-client.herokuapp.com/">
                  <img
                    src={CoDApp}
                    alt="CoD Character App"
                    height="auto"
                    width="100%"
                  />
                </a>
                <p>
                  {' '}
                  Skill set: Javascript, React, redux-form, MongoDB, mongoose,
                  node.js, RESTful APIs, express, jwt, passport.js, bcrypt
                </p>
              </li>
              <li>
                <h4>Bookmark App</h4>
                <p>
                  This bookmark app is designed to bookmark web pages while
                  assigning them a rating and a description to help other
                  viewers decide which sites are worth visiting.
                </p>
                <p>
                  Click{' '}
                  <a href="https://github.com/thinkful-ei23/DavidF-bookmarks-app">
                    here
                  </a>{' '}
                  to view the Github repository.
                </p>
                <a href="https://thinkful-ei23.github.io/DavidF-bookmarks-app/">
                  <img
                    src={BookmarkApp}
                    alt="Bookmark App"
                    height="auto"
                    width="50%"
                  />
                </a>
                <p> Skill set: Javascript, jQuery, RESTful APIs</p>
              </li>
              <li>
                <h4>Spanish App</h4>
                <p>
                  This is an app to help learn Spanish that utilizes a spaced
                  repetition algorithm and a linked list data structure to
                  repeat words that the user struggles with more often.
                </p>
                <p>
                  Click{' '}
                  <a href="https://github.com/thinkful-ei23/Spanish-Client-Alex-David">
                    here
                  </a>{' '}
                  to view the Github repository for the front-end. Or{' '}
                  <a href="https://github.com/thinkful-ei23/Spanish-Server-Alex-DavidF">
                    here
                  </a>{' '}
                  for the back-end
                </p>
                <a href="https://spanish-app-client.herokuapp.com/">
                  <img
                    src={SpanishApp}
                    alt="Spanish App"
                    height="auto"
                    width="50%"
                  />
                </a>
                <p>
                  {' '}
                  Skill set: Javascript, Node.js, RESTful APIs, React, Redux,
                  Express, Mongo/Mongoose, Bcrypt/Passport, Responsivevoice.org
                </p>
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
              developers and both learn from and help them progress.
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
      </main>
    );
  }
}
