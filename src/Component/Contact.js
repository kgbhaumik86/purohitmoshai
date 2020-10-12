import React, { Component } from 'react'
import Iframe from 'react-iframe'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col} from 'react-bootstrap'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false
        }
    }
    handleShow = () => {                
        this.setState({
            isModalVisible: true
        })
    }
    handleClose = () => {
        this.setState({
            isModalVisible: false
        })
    }

    render() {
        return (
            <section id="contact" class="section-bg">

                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Contact Us</h2>
                        <p>Please contact us with the below mentioned information. For payment please <a style={{'color': '#f82249'}} onClick={this.handleShow.bind(this)}>Click here</a></p>
                    </div>

                    <div class="row contact-info">

                        <div class="col-md-4">
                            <div class="contact-address">
                                <i class="ion-ios-location-outline"></i>
                                <h3>Address</h3>
                                <address>Electronic city phase 1, kalibari</address>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="contact-phone">
                                <i class="ion-ios-telephone-outline"></i>
                                <h3>Phone Number</h3>
                                <p><a href="tel:+919632999444">+91 96323 94275</a></p>
                                <p><a href="tel:+919632999444">+91 96329 99444</a></p>
                                <p><a href="tel:+919482581387">+91 94825 81387</a></p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="contact-email">
                                <i class="ion-ios-email-outline"></i>
                                <h3>Email</h3>
                                <p><a href="mailto:purohitmoshay@gmail.com">purohitmoshay@gmail.com</a></p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="form">
                        {/* <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div class="validate"></div>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                    <div class="validate"></div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div class="validate"></div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div class="validate"></div>
                            </div>
                            <div class="mb-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form> */}
                        <p></p>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.978541466471!2d77.62424531430325!3d12.844662421127502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b1274d6ca49%3A0xf99173f21914eb39!2sKali%20Bari%2C%20Electronics%20City!5e0!3m2!1sen!2sin!4v1600261958762!5m2!1sen!2sin"
                                        frameborder="0"
                                        style="border:0"
                                        width="100%"
                                        height="200px"
                                        id="myId"
                                        className="myClassname"
                                        display="initial"
                                        position="relative" />
                                        
                    </div>

                </div>
                <Modal show={this.state.isModalVisible} onHide={this.handleClose}
                    scrollable='true'
                    size="auto"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <h2>Qr Code information</h2>                        
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>                                 
                                <img src={process.env.PUBLIC_URL + "/assets/img/qr.jpeg"} alt="Speaker 1" class="img-fluid1"/>                              
                            </Row>                            
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>  
            </section>
        )
    }
}
