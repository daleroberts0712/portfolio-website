import React, {useState} from 'react'
import { Container } from 'react-bootstrap' 
import { Nav, Navbar, NavbarBrand, NavLink, Modal, Button } from 'react-bootstrap';
import Image from '../img/background.jpg';

function Home() {

    // Modal
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    // Close Modal
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    // Open Modal
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    // TypeWriter Effect
    class TypeWriter {
        constructor(txtElement, words, wait = 3000) {
          this.txtElement = txtElement;
          this.words = words;
          this.txt = '';
          this.wordIndex = 0;
          this.wait = parseInt(wait, 10);
          this.type();
          this.isDeleting = false;
        }
      
        type() {
          // Current index of word
          const current = this.wordIndex % this.words.length;
          // Get full text of current word
          const fullTxt = this.words[current];
      
          // Check if deleting
          if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
      
          // Insert txt into element
          this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      
          // Initial Type Speed
          let typeSpeed = 300;
      
          if(this.isDeleting) {
            typeSpeed /= 2;
          }
      
          // If word is complete
          if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = false;
          } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
          }
      
          setTimeout(() => this.type(), typeSpeed);
        }
      }
      
      // Init On DOM Load
      document.addEventListener('DOMContentLoaded', init);
      
      // Init App
      function init() {
        const txtElement = document.querySelector('.txt-type');
        const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        // Init TypeWriter
        new TypeWriter(txtElement, words, wait);
      }

    return (
        <>

        <section id="home">

            <div id="card">

                <Nav className="navbar">
                    <Container>
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#about" onClick={handleShow}>About</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact" onClick={handleShow2}>Contact</NavLink>
                    </Container>
                </Nav>

                <Container>
                    <div id="content">
                        <p className="lead">HELLO! I AM DALE.</p>
                        <h1 class="txt-type" data-wait="3000" data-words='["Creative Frontend <br/> Developer"]'></h1>
                    </div>
                </Container>
                
            </div>

        </section>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id="about">
        <Modal.Header closeButton>
        <Modal.Title>About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="lead">A general description ...</p>
            Since the first line of "Hello World" in the console, and the amount of excitement and amazement that such a simple line of code brought me, I knew that the journey ahead would be a fulfilling one. <hr/>
            Couple that with my fascination for the world of technology and being able to interact with that world on a constant basis, it's a match made in heaven. <hr/>
            With me, you will get a hardworker, that's passionate and aspires to constantly evolve and perfect his craft, as well as someone who willingly takes on any new challenges.
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleShow2}>You're Hired!</Button>
        </Modal.Footer>
        </Modal>

        <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        id="contact">
        <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="lead">My contact information ...</p>
            <i class="fas fa-envelope"></i> daleroberts0712@gmail.com <hr/>
            <i class="fas fa-phone"></i> 067 781 4630 <hr/>
            <i class="fab fa-linkedin"> </i> <a href="https://www.linkedin.com/in/dale-roberts-92b42421b/" target="_blank">Linkedin</a> <br/>
            <i class="fab fa-github"></i> <a href="https://github.com/daleroberts0712" target="_blank">Github</a>
        </Modal.Body>
        <Modal.Footer>
            <p className="lead">Thank You! For taking the time to review my application</p>
        </Modal.Footer>
        </Modal>

        </>
    )
}

export default Home
