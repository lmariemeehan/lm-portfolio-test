import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
    <div>
    <section id="welcome-section">
          <div className="featured-image ">
            <!--Top navbar-->
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: #3F3D56;">
                <a className="navbar-brand text-light" href="#">Laura Meehan</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>

                <div className="collapse navbar-collapse" id="navbar">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link text-light" href="#about-me">About Me</a></li>
                    <li className="nav-item"><a className="nav-link text-light" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link text-light" href="#contact">Contact</a></li>
                  </ul>
                </div>
              </nav>

            <div className="caption">
              <h1>{"Hi, I\'m Laura :)"}</h1>
              <p>{"I\'m a full-stack web developer."}</p>
            </div>
          </div>
        </section>

      <!-- About me -->
        <section id="about-me">
          <div className="container pt-5">
            <h2 className="headers d-flex justify-content-center">About</h2>
            <div className="row py-5">
              <div className="col">
                <div className="card mr-5 mb-5" id="about-story">
                  <div className="card-body">
                    <img className="card-img" src="./images/undraw_dreamer_gxxi.svg" alt="">
                    <p>{"I\'ve decided to make a career change after four years in payroll accounting to pursue web development because it embodies what I love to do most, which is to create. After discovering web development and spending upwards to a year of learning on my own, I decided to immerse myself in Bloc's (now Thinkful's) web development apprenticeship program where my love for code and problem-solving only intensified."}
                    </p>

                    <p>My current focus is now on more frontend development using HTML5, CSS3, Sass, JavaScript, and React for building user interfaces. I also have experience building with Node.js, TDD Testing, Wordpress, PostgreSQL, and other fun, collaborating tools. Even with all of these nifty things in my tool belt, I am always open to learning new technologies and exploring possibilities.</p>
                  </div>
                </div>
            </div>

              <div className="col-4 text-center" id="skills">
                <h4 className="my-4">Front-End Skills</h4>
                  <p><i className="fab fa-html5"></i>HTML</p>
                  <p><i className="fab fa-css3-alt"></i>CSS</p>
                  <p><i className="fab fa-js"></i>JavaScript</p>
                  <p><i className="fab fa-react"></i>React</p>
                  <p><img src="./images/icons/babel-1.svg" alt="">Babel</p>
                  <p><img src="./images/icons/responsive-design-117.svg">Responsive Design</p>
                  <p><i className="fab fa-bootstrap"></i>Bootstrap</p>
                  <p><i className="fab fa-sass"></i>Sass</p>

                <h4 className="my-4">Back-End Skills</h4>
                  <p><i className="fab fa-node-js"></i>Node.js</p>
                  <p><img src="./images/icons/express-8.svg" alt="express.js icon">Express</p>
                  <p><img src="./images/icons/jasmine-16.svg" alt="jasmine icon">Jasmine Testing</p>
                  <p><img src="./images/icons/heroku-8.svg" alt="heroku icon">Heroku</p>
                  <p><img src="./images/icons/postgresql-7.svg" alt="">PostgreSQL</p>

                  <h4 className="my-4">Other Skills & Tools</h4>
                  <p><i className="fab fa-github"></i>Github</p>
                  <p><i className="fab fa-trello"></i>Trello</p>
                  <p><img src="./images/icons/computer-network-34.svg" alt="mvc architecture icon">MVC Architecture</p>
                  <p><img src="images/icons/cloudinary_icon_for_black_bg.svg" alt="">Cloudinary</p>
                  <p><img src="./images/icons/terminal-10.svg" alt="">Command Line</p>
                  <p><img src="./images/icons/webpack-3.svg" alt="">Webpack</p>
              </div>

            </div>
          </div>
        </section>

      <!-- Projects showcase -->
        <section id="projects">
          <hr>
          <div className="container py-2">
            <h2 className="headers d-flex justify-content-center">Projects</h2>
            <div id="test" className="row my-2">
              <div className="card-deck mt-3">

                <div className="card mb-5 animated slideInUp " id="resonate-project">
                  <span className="d-flex justify-content-center p-3 rounded"><i className="fas fa-headphones"></i></span>
                  <div className="card-body">
                    <h3 className="card-title text-center">Resonate</h3>
                    <p className="card-text text-white">A SPA music player app built with React.js from the ground-up. Similar to Spotify.</p>
                    <div className="links">
                      <a href="https://lmariemeehan-bloc-jams-react.herokuapp.com/" target="_blank">See it live</a>
                      <a href="https://github.com/lmariemeehan/Resonate" target="_blank">Github</a>
                    </div>
                  </div>
                  <div className="card-footer">
                    <small className="text-white">Project checklist: React, JSX, CSS, JavaScript, Bootstrap</small>
                  </div>
                </div>

                <div className="card mb-5 animated slideInUp" id="hello-project">
                  <span className="d-flex justify-content-center p-3 rounded"><i className="far fa-comment-dots"></i></span>
                  <div className="card-body">
                    <h3 className="card-title text-center">Hello</h3>
                    <p className="card-text text-white">A SPA front-end chat app built with React.js and Firebase for user authentication and database needs.</p>
                    <div className="links">
                      <a href="https://lmariemeehan-bloc-chat-react.herokuapp.com/" target="_blank">See it live</a>
                      <a href="https://github.com/lmariemeehan/Hello" target="_blank">GitHub</a>
                    </div>
                  </div>
                    <div className="card-footer">
                      <small className="text-white">Project checklist: React, JSX, CSS, JavaScript, Bootstrap, Firebase</small>
                    </div>
                </div>

                <div className="card mb-5 animated slideInUp" id="inquisitive-project">
                  <span className="d-flex justify-content-center p-3 rounded"><i className="fab fa-leanpub"></i></span>
                  <div className="card-body">
                    <h3 className="card-title text-center ">Inquisitive</h3>
                    <p className="card-text text-white">An MVC structured Node.js app that allows users to create, collaborate, and share wikis.</p>
                    <div className="links">
                      <a href="https://lmariemeehan-blocipedia.herokuapp.com/" target="_blank">See it live</a>
                      <a href="https://github.com/lmariemeehan/InQuisitive" target="_blank">GitHub</a>
                    </div>
                  </div>
                  <div className="card-footer px-4">
                    <small className="text-white">Project checklist: Node, SendGrid, Jasmine, Stripe, Bootstrap, PostgreSQL...</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="card mx-auto px-5" id="work-in-progress">
                <div className="card-body">
                  <img className="card-image img-fluid rounded" style="max-width: 540px"  src="https://res.cloudinary.com/laurameehan/image/upload/v1577864076/undraw_in_progress_ql66_wvcvnc.svg" alt="">
                </div>
              </div>
            </div>


          </div>
        </section>

      <!-- Contact section -->
        <section id="contact">

          <div className="container py-5">
            <h2 className="headers d-flex justify-content-center mb-5">Contact</h2>

            <div className="row">
              <div className="col">
                <div className="card my-5 mx-auto border-0" id="contact-card" style="max-width: 840px;">
                  <div className="row no-gutters">
                    <div className="col-md-8">
                      <img className="img img-fluid rounded" src="https://res.cloudinary.com/laurameehan/image/upload/v1577870096/undraw_result_5583_ikidkn.svg" alt="svg portrait">
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <h5 className="mt-2 mb-4"><a className="card-text" href="https://github.com/lmariemeehan" target="_blank"><i className="fab fa-github"></i> Github</a></h5>
                        <h5 className="mb-4"><a className="card-text" href="https://www.linkedin.com/in/laura-meehan/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></h5>
                        <h5 className="mt-2 mb-4"><a href="mailto:lmariemeehan@gmail.com"><i className="far fa-envelope"></i> Email</a></h5>
                        <h5 className="mb-4"><a className="card-text" href="#" target="_blank"><i className="far fa-file"></i> Resume</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

    </div>
)

export default IndexPage
