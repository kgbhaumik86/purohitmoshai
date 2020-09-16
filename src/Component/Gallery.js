import React, { Component } from 'react'
import GalaryInfo from './JSON/Galary_JSON'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import OwlCarousel from 'react-owl-carousel';

export default class Gallery extends Component {
    state= {
        responsiveImage: {
            0: {
              items: 1
            },
            768: {
              items: 3
            },
            992: {
              items: 4
            },
            1200: {
              items: 5
            }
          },
        responsiveVideo: {
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            }
          }
    }
    render() {
        return (
            <section id="gallery">
                <div className = "sectionDiv11">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                        <h2>Gallery</h2>
                        <p>Check our gallery from the recent events</p>
                        </div>
                    </div>                
                   <div className="GalImage"><h2>Images</h2></div>
                    <OwlCarousel
                            loop
                            margin={0}
                            smartSpeed
                            autoplay
                            dots
                            center
                            items = {2}
                            responsive={this.state.responsiveImage}>
                            {GalaryInfo.map((gal) => 
                                <div>
                                    <a href={process.env.PUBLIC_URL + gal.imgUrl} className="venobox" data-gall="gallery-carousel">
                                        <img src={process.env.PUBLIC_URL + gal.imgUrl}></img>                           
                                    </a> 
                                </div>
                        )}
                    </OwlCarousel>                    
                    <div className="GalVideo" style={{"paddingTop" : "50px"}}><h2>Videos</h2></div>
                    
                    <OwlCarousel
                            loop
                            margin={10}
                            smartSpeed
                            autoplay
                            items = {2}
                            responsive={this.state.responsiveVideo}>
                            {GalaryInfo.map((video) => 
                                <div>
                                    <iframe id="ytplayer" type="text/html" width="420" height="345"
                                    src={video.videoUrl}
                                    frameBorder="0"></iframe>
                                </div>
                        )}
                    </OwlCarousel> 
                </div>
            </section>
        )
    }
}
