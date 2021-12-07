import React from 'react'
import { Container, Button, Card, CardImg } from 'react-bootstrap';
import TechHub from '../img/TechHub.png'
import Smartwatch from '../img/Product Landing Page.png';
import Microsoft from '../img/microsoft-homepage.png';
import Appeal from '../img/online-store.png';
import Form from '../img/form.png';
import Infinite from '../img/movie-streaming.png';

function Projects() {
    return (
        <section id="projects">
            <Container>
                <div id="header">
                    <h1>Projects</h1>
                    <p className="lead">Some of my projects ...</p>
                </div>

                <div id="cards">
                    <Card>
                        <Card.Img src={TechHub} />
                        <Card.Body>
                            <Card.Title><h3>TechHub</h3></Card.Title>
                            <Card.Text>
                                <p>A Ecommerce homepage built with React.js, Bootstrap and Saas.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>React-Bootstrap was used for the layout and structure of the website.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>I used Saas for the color scheme and general feel of the website.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>JavaScript is used for the hamburger menu when on smaller devices.</p>
                            </Card.Text>
                        </Card.Body>
                            <Button href="https://daleroberts0712.github.io/TechHub-react/" target="_blank">Website</Button>
                            <Button href="https://github.com/daleroberts0712/TechHub-react" target="_blank">Github Code</Button>
                    </Card>

                    <Card>
                        <Card.Img src={Smartwatch} />
                        <Card.Body>
                            <Card.Title><h3>SmartWatch Webpage</h3></Card.Title>
                            <Card.Text>
                                <p>A Product Landing Page built with CSS, Bootstrap and JavaScript.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Bootstrap is used for the layout of the website.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>JavaScript is used for the Hamburger menu.</p>
                            </Card.Text>
                        </Card.Body>
                            <Button href="https://daleroberts0712.github.io/landing-page/" target="_blank">Website</Button>
                            <Button href="https://github.com/daleroberts0712/landing-page" target="_blank">Github Code</Button>
                    </Card>

                    <Card>
                        <Card.Img src={Form} />
                        <Card.Body>
                            <Card.Title><h3>Login/Register Form</h3></Card.Title>
                            <Card.Text>
                                <p>A Basic Login/Register Form built with a Php Backend and a MySql Database</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Php was used for the backend of the form, also the alerts when the login is successful or failed!</p>
                                <p>MySql was used as the database, where the registered passwords and usernames are saved to and on login retrieved.</p>
                                <p>The Google and Facebook Login Api's are used as forms of login.</p>
                            </Card.Text>
                        </Card.Body>
                            <Button href="https://daleroberts0712.github.io/account-login/login.html" target="_blank">Website</Button>
                            <Button href="https://github.com/daleroberts0712/account-login" target="_blank">Github Code</Button>
                    </Card>

                    <Card>
                        <Card.Img src={Microsoft} />
                        <Card.Body>
                            <Card.Title><h3>Microsoft Homepage Clone</h3></Card.Title>
                            <Card.Text>
                                <p>A Microsoft Homepage Clone built with CSS, Bootstrap and JavaScript.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>CSS was used for mainly the layout, Bootstrap was used for the Carousel Slide.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>JavaScript was used for the Carousel Slideshow, for the Hamburger menu and for the all-microsoft dropdown.</p>
                            </Card.Text>
                        </Card.Body>
                            <Button href="https://daleroberts0712.github.io/microsoft-clone/" target="_blank">Website</Button>
                            <Button href="https://github.com/daleroberts0712/microsoft-clone" target="_blank">Github Code</Button>
                    </Card>

                    <Card>
                        <Card.Img src={Appeal} />
                        <Card.Body>
                            <Card.Title><h3>Appeal.com</h3></Card.Title>
                            <Card.Text>
                                <p>An Online Store built with CSS, Bootstrap and JavaScript.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Bootstrap was used for the layout of the website.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>JavaScript was used to make the Carousel a Slide show.</p>
                            </Card.Text>
                        </Card.Body>
                            <Button href="https://daleroberts0712.github.io/online-store/" target="_blank">Website</Button>
                            <Button href="https://github.com/daleroberts0712/online-store" target="_blank">Github Code</Button>
                    </Card>

                    <Card>
                        <Card.Img src={Infinite} />
                        <Card.Body>
                            <Card.Title><h3>Movie API</h3></Card.Title>
                            <Card.Text>
                                <p>A Movie Streaming App built with CSS, Bootstrap and JavaScript.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>Boostrap is mainly used for the layout, CSS for minor tweeks.</p>
                            </Card.Text>
                            <Card.Text>
                                <p>JavaScript is used for the hamburger menu when on smaller devices and is used for retrieving the OMDB Api and displaying it when the user requests it.</p>
                            </Card.Text>
                        </Card.Body>
                            <Button href="https://daleroberts0712.github.io/movie-api/index.html" target="_blank">Website</Button>
                            <Button href="https://github.com/daleroberts0712/movie-api" target="_blank">Github Code</Button>
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default Projects

// import React, { useState } from 'react'
// import { useSpring, a } from '@react-spring/web'

// import styles from './styles.module.css'

// export default function App() {
//   const [flipped, set] = useState(false)
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 },
//   })
//   return (
//     <div className={styles.container} onClick={() => set(state => !state)}>
//       <a.div
//         className={`${styles.c} ${styles.back}`}
//         style={{ opacity: opacity.to(o => 1 - o), transform }}
//       />
//       <a.div
//         className={`${styles.c} ${styles.front}`}
//         style={{
//           opacity,
//           transform,
//           rotateX: '180deg',
//         }}
//       />
//     </div>
//   )
// }
