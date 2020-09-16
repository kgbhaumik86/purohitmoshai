import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" class="section-bg">

                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Contact Us</h2>
                        <p>Nihil officia ut sint molestiae tenetur.</p>
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
                                <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="contact-email">
                                <i class="ion-ios-email-outline"></i>
                                <h3>Email</h3>
                                <p><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="form">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
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
                        </form>
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
            </section>
        )
    }
}
