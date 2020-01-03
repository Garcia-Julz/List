import React, { Component } from 'react';
import Logo from './AboutAssets/Logo_list.png'
import ReactLogo from './AboutAssets/react.svg'
import FigmaLogo from './AboutAssets/Figma.svg'
import ExcelLogo from './AboutAssets/Excel.png'
import CSSLogo from './AboutAssets/CSS.svg'
import npmLogo from './AboutAssets/npmLogo.png'
import ReactStrapLogo from './AboutAssets/ReactStrap.png'
import PixelmatorLogo from './AboutAssets/Pixelmator-Pro.png'
import './About.css'


class AboutPage extends Component {
    
    render() {
        return (
            <>
                {/* // <!-- First Parallax Image with Logo Text --> */}
                <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                    <div className="w3-display-middle">
                        <span className="w3-center w3-padding-large w3-light-blue w3-xlarge w3-wide w3-opacity-min">ALL <span className="w3-hide-small">IN</span> ONE</span>
                    </div>
                </div>
                    
                    {/* // <!-- Container (About Section) --> */}
                <div className="w3-content w3-container w3-padding-64" id="about">
                    <h3 className="w3-center">ABOUT LIST</h3>
                    <p className="w3-center"><em>An Application For Employers</em></p>
                    <p>Currently many health care facilities use Nursys as a way to verify a nurse's license. From there once when the user finds the information they need, they would then go and print out the report or attach the results to another application 
                        where it then would be stored. Nowhere on that application or any other applications do users have the power to do all what they need on one application.
                    </p>
                    <div className="w3-row">
                        <div className="w3-col m6 w3-center w3-padding-large">
                            <p><b>LIST</b></p>
                            <img src={Logo} className="w3-round w3-image w3-hover-opacity-off" alt="App Logo" width="180" height="180"></img>
                        </div>
                    
                        {/* <!-- Hide this text on small devices --> */}
                        <div className="w3-col m6 w3-hide-small w3-padding-large">
                            <p>Introducing LIST. This application is build for employers looking to validate nurse licenses associated with resumes sent to them. With an application that can facilitate the luxury of being able to save, add notes as well as resumes associated
                                to nurses who are applying through head hunters, it's an easy choice. Information is pulled from the department of health and gets updated once every week. </p>
                        </div>
                    </div>
                </div>
                    
                <div className="w3-row w3-center w3-dark-grey w3-padding-16">
                    <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">4+</span>
                        States
                    </div>
                    <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">600k+</span>
                        Nurses
                    </div>
                    <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">3+</span>
                        Users Created
                    </div>
                    <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">21+</span>
                        Notes
                    </div>
                </div>
                    
                {/* // Second Parallax Image with Portfolio Text */}
                <div className="bgimg-2 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide">PROJECT BUILD</span>
                    </div>
                </div>
                    
                    {/* <!-- Container (Portfolio Section) --> */}
                <div className="w3-content w3-container w3-padding-64" id="portfolio">
                    <h3 className="w3-center">Technologies Used</h3>
                    <p className="w3-center"><em>Here are some of the technologies used to create LIST. Some of thises I was familiar with from past projects, others were new to me.</em></p>
                    
                    {/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
                    <div className="w3-row-padding w3-center">
                        <div className="w3-col m3">
                            <img src={ReactLogo} onclick="onClick(this)" className="w3-hover-opacity" id="ReactLogo" alt="The mist over the mountains" width="150" height="150"></img>
                        </div>
                    
                        <div className="w3-col m3">
                            <img src={FigmaLogo} onclick="onClick(this)" className="w3-hover-opacity" alt="Coffee beans" width="150" height="150"></img>
                        </div>
                    
                        <div className="w3-col m3">
                            <img src={ExcelLogo} onclick="onClick(this)" className="w3-hover-opacity" id="ExcelLogo" alt="Bear closeup" width="100" height="150"></img>
                        </div>
                    
                        <div className="w3-col m3">
                            <img src={CSSLogo} onclick="onClick(this)" className="w3-hover-opacity" alt="Quiet ocean" width="150" height="150"></img>
                        </div>
                    </div>
                    
                    <div className="w3-row-padding w3-center w3-section">
                        <div className="w3-col m3">
                            <img src={npmLogo} onclick="onClick(this)" className="w3-hover-opacity" id="npmLogo" alt="The mist"></img>
                        </div>
                    
                        <div className="w3-col m3">
                            <img src={ReactStrapLogo} onclick="onClick(this)" className="w3-hover-opacity" alt="My beloved typewriter" width="100" height="200"></img>
                        </div>
                    
                        <div className="w3-col m3">
                            <img src={PixelmatorLogo} onclick="onClick(this)" className="w3-hover-opacity" alt="Empty ghost train"></img>
                        </div>
                    
                        <div className="w3-col m3">
                            <img src="https://www.w3schools.com/w3images/p8.jpg" onclick="onClick(this)" className="w3-hover-opacity" alt="Sailing"></img>
                        </div>
                        <button className="w3-buttonLargeLight-grey">LOAD MORE</button>
                    </div>
                </div>
                    
                    // {/* <!-- Modal for full size images on click--> */}
                <div id="modal01" className="w3-modal w3-black" onclick="this.style.display='none'">
                    <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i className="fa fa-remove"></i></span>
                    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                        <img id="img01" className="w3-image"></img>
                        <p id="caption" className="w3-opacity w3-large"></p>
                    </div>
                </div>
                    
                    // {/* <!-- Third Parallax Image with Portfolio Text --> */}
                <div className="bgimg-3 w3-display-container w3-opacity-min">
                    <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
                    </div>
                </div>
                    
                    // {/* <!-- Container (Contact Section) --> */}
                <div className="w3-content w3-container w3-padding-64" id="contact">
                    <h3 className="w3-center">WHERE I WORK</h3>
                    <p className="w3-center"><em>I'd love your feedback!</em></p>
                    
                    <div className="w3-row w3-padding-32 w3-section">
                        <div className="w3-col m4 w3-container">
                            <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image-round"></img>
                        </div>
                        <div className="w3-col m8 w3-panel">
                            <div className="w3-large w3-margin-bottom">
                                <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Chicago, US
                                <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +00 151515
                                <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: mail@mail.com
                            </div>
                            <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
                            <form action="/action_page.php" target="_blank">
                                <div className="w3-row-padding">
                                    <div className="w3-half">
                                        <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
                                    </div>
                                    <div className="w3-half">
                                        <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email"/>
                                    </div>
                                </div>
                                <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message"/>
                                <button className="w3-button w3-black w3-right w3-section" type="submit">
                                    <i className="fa fa-paper-plane"></i> SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AboutPage 