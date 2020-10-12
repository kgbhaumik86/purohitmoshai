import React, { Component } from 'react'
import AboutData from './JSON/About_JSON'

export default class About extends Component {
    render() {
        return (
            <section id="about">   
                <div className = "sectionDiv">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                        <div className="col-lg-12">
                            <h2 style={{'color': '#f82249'}}>{AboutData.kalibari.aboutTitle}</h2>
                            <p style={{'text-align': 'justify'}}>{AboutData.kalibari.content1}</p>
                            <p style={{'text-align': 'justify'}}>{AboutData.kalibari.content2}</p>
                        </div>
                        <div className="col-lg-7">
                            <h3>Where it is?</h3>
                            <p>Electronic city phase 1, Bangalore </p>
                        </div>
                        <div className="col-lg-3">
                            <h3>Temple timing</h3>
                            <p>Everday - 9 AM to 1 PM, 5 PM to 9 PM</p>
                        </div>
                        <div className="col-lg-12">
                            <h2 style={{'color': '#f82249'}}>{AboutData.purohitMoshai.title}</h2>
                            <p style={{'text-align': 'justify'}}>{AboutData.purohitMoshai.content1}</p>
                            <p style={{'text-align': 'justify'}}>{AboutData.purohitMoshai.content2}</p>
                            <p style={{'text-align': 'justify'}}>{AboutData.purohitMoshai.content3}</p>
                            <p style={{'text-align': 'justify'}}>{AboutData.purohitMoshai.content4}</p>
                            <p style={{'text-align': 'justify'}}>{AboutData.purohitMoshai.content5}</p>
                        </div>
                        {/* <div className="col-lg-12">
                            <h2>More Info2</h2>
                            <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                        </div> */}
                        </div>                                        
                    </div>
                </div>             
            </section>
        )
    }
}
