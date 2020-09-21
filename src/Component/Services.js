import React, { Component, Fragment } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ServicesInfo from './JSON/Services_JSON'
import ServiceHeading from './JSON/ServiceHeading_JSON'
import ServModalInfo from './JSON/ServicesModal_JSON'
import {Container, Row, Col} from 'react-bootstrap'

export default class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,
            filteredModal: {}
        }
    }
    handleShow = (index) => {        
        const servInfo = ServModalInfo.filter( i => i.serviceId === index.serviceId )         
        this.setState({
            isModalVisible: true,
            filteredModal: servInfo[0]
        })
    }
    handleClose = () => {
        this.setState({
            isModalVisible: false
        })
    }
    render() {
        return (
            <section id="services">
                <div className = "sectionDiv">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Services</h2>
                            <p>{ServiceHeading.servHead.content1}</p>
                            <p style={{'text-align': 'justify', 'padding-top': '10px'}}>{ServiceHeading.servHead.content2}</p>
                            <p style={{'text-align': 'justify', 'padding-top': '10px'}}>{ServiceHeading.servHead.content3}</p>
                        </div>                        
                        <div className="row">
                            { ServicesInfo.map((serv) =>
                                <div className="col-lg-4 col-md-6">
                                    <div className="services" data-aos="fade-up" data-aos-delay="100">
                                        <img src={process.env.PUBLIC_URL + serv.imgUrl} alt="Service {serv.serviceId}" className="img-fluid"/>
                                            <div className="details">
                                                <h3><a onClick={this.handleShow.bind(this,serv)}>{serv.title}</a></h3>
                                                <p>{serv.description}</p>                                            
                                            </div>
                                    </div>
                                </div>
                            )}                            
                        </div>
                    </div>
                </div>
                <Modal show={this.state.isModalVisible} onHide={this.handleClose}
                    scrollable='true'
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <h2>{this.state.filteredModal.title}</h2>                        
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>                                 
                                <div class="col-md-3">
                                    <img src={process.env.PUBLIC_URL + this.state.filteredModal.imgUrl} alt="Speaker 1" class="img-fluid"/>
                                </div>
                                <div class="col-md-9">
                                    <div style={{'text-align': 'justify', 'font-weight': '700', 'color': 'black'}}>{this.state.filteredModal.subTitle}</div>
                                    <br></br>
                                    <div class="details">
                                        {this.state.filteredModal.description_Full}
                                        <p style={{'text-align': 'justify', 'padding-top': '10px'}}>{this.state.filteredModal.description_Full1}</p>
                                        <p style={{'text-align': 'justify', 'padding-top': '5px'}}>{this.state.filteredModal.description_Full2}</p>
                                        <p style={{'text-align': 'justify', 'padding-top': '5px'}}>{this.state.filteredModal.description_Full3}</p>
                                        <p style={{'text-align': 'justify', 'padding-top': '5px'}}>{this.state.filteredModal.description_Full4}</p>
                                    </div>
                                </div>                               
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
