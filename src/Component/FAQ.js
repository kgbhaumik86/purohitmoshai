import React, { Component } from 'react'
import Faq from "react-faq-component";
import faqData from './JSON/FAQ_JSON'

const styles = {
    // bgColor: 'white',    
    rowTitleColor: '#092352',    
    //rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    // rowContentPaddingRight: '150px',
    arrowColor: "red",
};
 
const config = {
    // animate: true,
    // arrowIcon: "V",
};

export default class FAQ extends Component {
    render() {
        return (
            <section id="faq">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>F.A.Q </h2>
                    </div>
                    
                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-9">
                            <Faq data={faqData} styles={styles} config={config} />                            
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}
