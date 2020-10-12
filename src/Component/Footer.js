import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-3 col-md-6 footer-info">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/PurohitMoshaiLogo.png"} alt="TheEvenet"/>
                                    <p>Purohit Moshay in Bangalore always strives to help many through his sadhanas and educational knowledge so that you can spend your life happily and peacefully. Let him know your problems and help you getting the best options to overcome the life challenges and day to day life worries.</p>
                                </div>

                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                    <li><i className="fa fa-angle-right"></i> <a href="#">Home</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="#about">About us</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="#services">Services</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="#gallery">Gallery</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="#faq">FAQ</a></li>
                                    <li><i className="fa fa-angle-right"></i> <a href="#contact">Contact</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                <li><i className="fa fa-angle-right"></i> <a href="http://www.bangalorekalibari.com/">Bangalore Kalibari WebSite</a></li>
                                {/* <li><i className="fa fa-angle-right"></i> <a href="#">About us</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="#">Services</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="#">Privacy policy</a></li> */}
                                </ul>
                            </div>

                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h4>Contact Us</h4>
                                    <p></p>
                                    Electronic city phase 1, kalibari<br></br>
                                    <strong>Phone:</strong><br></br>+91 96323 94275<br></br>+91 96329 99444<br></br> +91 94825 81387
                                    <br></br>
                                    {/* <strong>Email:</strong> info@example.com<br></br> */}
                                    <p></p>
                                    <div class="social-links">
                                        {/* <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> */}
                                        <a href="https://www.facebook.com/purohitmoshay.bangalore" class="facebook"><i class="fa fa-facebook"></i></a>
                                        <a href="https://www.instagram.com/purohitmoshay/" class="instagram"><i class="fa fa-instagram"></i></a>
                                        <a href="https://www.youtube.com/user/purohitmoshay" class="google-plus"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                                        <a href="https://wa.me/919632999444?text=Hi%20PurohitMoshay" class="whatsapp"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                                        {/* <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>                    
                </footer>
        )
    }
}
