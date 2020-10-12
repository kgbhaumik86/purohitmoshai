import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col} from 'react-bootstrap'

export default class IntroPage extends Component {
    constructor(props) {
        super(props)     
        this.state = {
            isContVisible: false,                        
        }        
    }
    contShow = () => {        
        this.setState({
            isContVisible: true        
        })
    }
    contClose = () => {
        this.setState({
            isContVisible: false
        })
    }
    handleClick() {
        let name = document.getElementById("frm_name").value;
        let date = document.getElementById("frm_date").value;
        let purpose = document.getElementById("frm_purpose").value;
        let email = document.getElementById("frm_email").value;
        let phone = document.getElementById("frm_phone").value;
        let num = 917003370165

        var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${purpose}`, '_blank');
        alert("Test")

    }
    render() {        
        return (
            <section id="intro">
                <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 className="mb-4 pb-0"><span>PurohitMoshay</span> <br />Bangalore</h1>
                    <p className="mb-4 pb-0">Electronic City Phase 1, Kalibari</p>
                    <a href="https://youtu.be/BrUZ34PIe1U" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                    <div className="row">
                        <a href="#about" className="about-btn scrollto">About Kalibari</a>
                        <a onClick={this.contShow} className="about-btn scrollto">Book Appoinment</a>
                    </div>                    
                </div>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.isContVisible} onHide={this.contClose}
                    animationType="fade"
                    transparent={true}                    
                    style={{
                        "background-color": "#000000"
                     }}
                id="ItroModal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h1 style={{ 'color': '#ffffff'}}>Book your Appoinment</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div id="booking" class="section">
                            <div class="section-center">
                                <div class="container">
                                    <div class="row">
                                        <div class="booking-form">
                                            {/* <div class="form-header">
                                                <h1>Make your reservation</h1>
                                            </div> */}
                                            <form>
                                                <div className="form-group">                                                    
                                                    <input id="frm_name" className="form-control" type="text" placeholder="Full Name.." />
                                                    <span className="form-label">Please fill your full name</span>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">                                                            
                                                            <input id="frm_date" className="form-control" type="date" required />
                                                            <span className="form-label">Mention the date when you need Appoinment</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">                                                            
                                                            <input id="frm_purpose" className="form-control" type="text" placeholder="Please write the purpose" />
                                                            <span className="form-label">Purpose</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <span id="frm_email" className="form-label">Email</span>
                                                            <input className="form-control" type="email" placeholder="Enter your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <span id="frm_phone" className="form-label">Phone</span>
                                                            <input className="form-control" type="tel" placeholder="Enter you Phone" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-btn">
                                                    <button variant="primary" className="submit-btn" onClick={() => this.handleClick()}>Book Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>                    
                    <Button color="warning" onClick={this.contClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </section>   
        )
    }
}
