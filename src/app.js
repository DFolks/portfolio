import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <main className="app" role="main">
        <section id="intro">
          <h1>David Folks</h1>
          <h3>Software Developer</h3>
          <p>
            I am an ambitious developer who builds creative and simple
            solutions, interactive web applications, and intuitive and
            responsive UI/UX.
          </p>
        </section>
        <section>
          <h2>Contact Information:</h2>
          <p>
            Email:
            <a href="mailto:aldwyn.wot@gmail.com" className="contact-link">
              aldwyn.wot@gmail.com
            </a>
          </p>
          <p>
            Github:
            <a href="https://github.com/DFolks">https://github.com/DFolks</a>
          </p>
          <p>
            LinkedIn:
            <a href="https://www.linkedin.com/in/david-folks-98657155">
              https://www.linkedin.com/in/david-folks-98657155
            </a>
          </p>
        </section>
        <section id="projects">
          <h2>Projects:</h2>
          <ul>
            <li>
              <h4>Chronicles of Darkness Character App</h4>
              <p>
                CoD Character App is a creation, editable storage app for
                creating and storing characters for the Chronicles of Darkness
                tabletop roleplaying game. It combines forms (using redux-form)
                to make a simple, easy-to-use way for people to generate their
                character data. The data is easily editable with each field
                being clickable to open an input for the new data. This project
                is ongoing with new features planned for and being added.
              </p>
              <a href="https://cod-characters-client.herokuapp.com/">
                <img
                  src="./img/CoDApp.jpg"
                  alt="screenshot of CoD Character App"
                  height="200"
                  width="400"
                />
              </a>
            </li>
          </ul>
        </section>
        <section id="skills">
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
              </ul>
              <p>
                I can build and style an interactive, responsive webpage or app
                interface from scratch (like this one) with HTML, CSS, and
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
                I can build full-stack apps with RESTful APIs that perform CRUD
                operations using Node.js and Express as my server-side
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
                as an authentication framework and bcrypt for password hasing. I
                utilize JWTs for providing authorization to a user once setup
                that controls what they can access.
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
                All of my work takes into consideration that users view content
                from different browsers and devices that vary in screen size. I
                build webpages and apps to be stylistically responsive to the
                screen size. By developing first for mobile devices, I ensure
                that functionality is not lost in any sized device.
              </p>
            </li>
          </ul>
        </section>
        <section id="About Me">
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
            tabletop game scenarios and campaigns for people to enjoy. They give
            me a chance to express myself creatively while having to think
            critically and overcome obstacles. I also enjoy cooking great food,
            because I get the opportunity to be creative and discover new
            combinations of flavors or techniques to prepare things that I can
            share with others. One of my biggest joys though is to be
            continuously learning new things, there is so much knowledge and
            ideas in the world.
          </p>
        </section>
      </main>
    );
  }
}