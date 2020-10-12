import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
import './Bookingfromstyle/Appointment.css';

export default class IntroPage extends Component {
    constructor() {
        super()     
        this.state = {
            isContVisible: false,
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);      
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
  //   handleClick() {
  //       let name = document.getElementById("frm_name").value;
  //       let date = document.getElementById("frm_date").value;
  //       let purpose = document.getElementById("frm_purpose").value;
  //       let email = document.getElementById("frm_email").value;
  //       let phone = document.getElementById("frm_phone").value;
  //       let num = 9836952545
  //       //var win = window.open(`https://wa.me/${num}?text=Hi%20I%20am%20${name}%20and%20to%20contact%20you%20for%20this%20${purpose}`, '_blank');
  //       //var win = Linking.openURL('whatsapp://send?text=hello&phone=9836952545')
  //  // var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${purpose}`, '_blank');
  //      // alert("Test")
  //   }

    handleChange(event) {
        let input = this.state.input;
        let error = this.state.errors;
        input[event.target.name] = event.target.value;
        
        if(!input[event.target.name])
        {
          error[event.target.name] = "Please enter  " + event.target.name;
          this.setState({
            errors: error
          });
        }
        else{
          error[event.target.name] = "";
          this.setState({
            errors: error
          });
        }
        this.setState({
          input
        });
      }
    
      SendWatsapp(objmsg)
      {
        //alert(objmsg.name);
        //let num = 91+objmsg.phone;
        let num = 919632394275;
        let name = objmsg.name;
        let purpose = objmsg.purpose;
        let email = objmsg.email;
        //alert(num)
        //var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${purpose}`, '_blank');
        var win = window.open(`https://wa.me/${num}?text=Hi%20PurohitMoshay%20I%20am%20${name}%20and%20want%20to%20contact%20you%20for-%20"${purpose}"`, '_blank');
      }
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
            let inputfinal = this.state.input;
            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["phone"] = "";
            input["purpose"] = "";
            
      
            // alert('Your request is redirecting to Watsapp');
            this.SendWatsapp(inputfinal);
            this.setState({input:input});
        }
      }

    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
    
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!input["purpose"]) {
          isValid = false;
          errors["purpose"] = "Please enter your purpose.";
        }
        if (!input["phone"]) {
          isValid = false;
          errors["phone"] = "Please enter your phone no.";
        }
  
        if (typeof input["phone"] !== "undefined") {
            
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(input["phone"])) {
            isValid = false;
            errors["phone"] = "Please enter only number.";
          }else if(input["phone"].length != 10){
            isValid = false;
            errors["phone"] = "Please enter your valid 10 digit phone number.";
          }
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    
    render() {        
        return (
            <section id="intro">
                <div className="intro-container" data-aos="zoom-in" data-aos-delay="100">
                    <h1 className="mb-4 pb-0"><span>Purohitmoshay</span> <br />Bangalore</h1>
                    <p className="mb-4 pb-0">Electronic City Phase 1, Kalibari</p>
                    <a href="https://youtu.be/BrUZ34PIe1U" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                    <div className="row">
                        <a href="#about" className="about-btn scrollto">About Kalibari</a>
                        <a onClick={this.contShow} className="about-btn scrollto">Book Appointment</a>
                    </div>                    
                </div>
                <Modal size="lg sm md xs"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.isContVisible} onHide={this.contClose}
                    animationType="fade"
                    transparent={true}                    
                    style={{
                        "background-color": ""
                     }}
                id="ItroModal">
                    <Modal.Header closeButton style={{'background-color': 'rgba(248, 34, 73, 1)'}}>
                        <Modal.Title id="contained-modal-title-vcenter" style={{'width': '100%'}}>
                            <h3>Book your Appointment</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ 'height':'auto','background-color': 'lightgrey'}}>
                        <div id="booking" class="section" style={{ 'height':'auto'}}>
                            <div class="section-center">
                                <div class="container">
                                    <div class="row">
                                      <div class="col">
                                        <div class="booking-form" style={{ 'height':'auto'}}>
                                            {/* <div class="form-header">
                                                <h1>Make your reservation</h1>
                                            </div> */}
                                                  
                                            {/* <h1 style={{'font-size':'larger','text-decoration':'underline'}}>BOOK APPOINTMENT</h1> */}
                                            <form onSubmit={this.handleSubmit}>
                                    
                                            <div class="form-group">
                                                <label for="name" class="textHeader">Name: <span class="spanstar">*</span></label>
                                                <input 
                                                type="text" 
                                                name="name" 
                                                value={this.state.input.name}
                                                onChange={this.handleChange}
                                                class="form-control" 
                                                placeholder="Enter name" 
                                                id="name" />
                                    
                                                <div className="text-danger errortext">{this.state.errors.name}</div>
                                            </div>
                                    
                                            <div class="form-group">
                                                <label for="email" class="textHeader">Email Address: <span class="spanstar">*</span></label>
                                                <input 
                                                type="text" 
                                                name="email" 
                                                value={this.state.input.email}
                                                onChange={this.handleChange}
                                                class="form-control" 
                                                placeholder="Enter email" 
                                                id="email" />
                                    
                                                <div className="text-danger errortext">{this.state.errors.email}</div>
                                            </div>

                                            <div class="form-group">
                                                <label for="phone" class="textHeader">Phone: <span class="spanstar">*</span></label>
                                                <input 
                                                type="number" 
                                                name="phone" 
                                                value={this.state.input.phone}
                                                onChange={this.handleChange}
                                                class="form-control" 
                                                placeholder="Enter phone no." 
                                                id="phone"
                                                />
                                    
                                                <div className="text-danger errortext">{this.state.errors.phone}</div>
                                            </div>
                                            <div class="row">
                                            <div class="col">
                                            <div class="form-group">
                                                <label for="purpose" class="textHeader">Purpose: <span class="spanstar">*</span></label>
                                                <textarea 
                                                name="purpose"
                                                maxLength="200"
                                                rows={6}
                                                style={{ 'max-height':'100px','min-height':'60px'}}
                                                value={this.state.input.purpose} 
                                                onChange={this.handleChange}
                                                placeholder="Enter purpose"
                                                class="form-control" />
                                    
                                                <div className="text-danger errortext">{this.state.errors.purpose}</div>
                                            </div>
                                            </div>
                                            </div>
                                                <div class="btnposition">
                                                <input type="submit" value="Submit" class="btn btn-success btn-appt" />
                                                </div>
                                            
                                            </form>
                                        </div>
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer style={{'background-color': 'lightgrey'}}>  
                    <input type="submit" value="Close" onClick={this.contClose} class="btn btn-success btn-appt" />            
                    {/* <Button onClick={this.contClose} class="btn-appt">Close</Button> */}
                    </Modal.Footer>
                </Modal>
            </section>   
        )
    }
}
