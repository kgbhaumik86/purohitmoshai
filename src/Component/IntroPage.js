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
    render() {
        return (
            <section id="intro">
                <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 className="mb-4 pb-0"><span>Purohitmoshai</span> <br />Bangalore</h1>
                    <p className="mb-4 pb-0">Electronic City Phase 1, Kalibari</p>
                    <a href="https://youtu.be/BrUZ34PIe1U" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                    <a href="#about" className="about-btn scrollto">About Kalibari</a>
                    <a onClick={this.contShow} className="about-btn scrollto">Book Appoinment</a>
                </div>
                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.isContVisible} onHide={this.contClose}
                    animationType="fade"
                    transparent={true}
                    // style={{
                    //     "background-image": `url("https://upload.wikimedia.org/wikipedia/commons/8/8a/Tree_icon_w_outline.png")`
                    //  }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        <h1>Book your Appoinment</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Country, ZIP, city..."/>
                                    <span className="form-label">Destination</span>
							</div>
                            <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input className="form-control" type="date" required/>
                                                <span className="form-label">Check In</span>
									</div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" type="date" required/>
                                                    <span className="form-label">Check out</span>
									</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select className="form-control" required>
                                                        <option value="" selected hidden>no of rooms</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                    <span className="form-label">Rooms</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select className="form-control" required>
                                                        <option value="" selected hidden>no of adults</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                    <span className="form-label">Adults</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select className="form-control" required>
                                                        <option value="" selected hidden>no of children</option>
                                                        <option>0</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                    <span className="form-label">Children</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" placeholder="Enter your Email"/>
                                                        <span className="form-label">Email</span>
									</div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="tel" placeholder="Enter you Phone"/>
                                                            <span className="form-label">Phone</span>
									</div>
                                                    </div>
                                                </div>
                                                <div className="form-btn">
                                                    <button className="submit-btn">Book Now</button>
                                                </div>
						</form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.contClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </section>   
        )
    }
}
