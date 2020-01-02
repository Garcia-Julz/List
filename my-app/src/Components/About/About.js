import React, { Component } from 'react';
import Banner from './AboutAssets/Banner.jpeg'
import './About.css'


class AboutPage extends Component {
    
            render() {
                return (
                    <>
                    {/* // <!-- First Parallax Image with Logo Text --> */}
                    <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                      <div className="w3-display-middle">
                        <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">ALL <span className="w3-hide-small">IN</span> ONE</span>
                      </div>
                    </div>
                    
                    {/* // <!-- Container (About Section) --> */}
                    <div className="w3-content w3-container w3-padding-64" id="about">
                      <h3 className="w3-center">ABOUT ME</h3>
                      <p className="w3-center"><em>I love photography</em></p>
                      <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <div className="w3-row">
                        <div className="w3-col m6 w3-center w3-padding-large">
                          <p><b><i className="fa fa-user w3-margin-right"></i>My Name</b></p>
                          <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333"></img>
                        </div>
                    
                        {/* <!-- Hide this text on small devices --> */}
                        <div className="w3-col m6 w3-hide-small w3-padding-large">
                          <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                      </div>
                      <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
                      <p className="w3-wide"><i className="fa fa-camera"></i>Photography</p>
                      <div className="w3-light-grey">
                        <div className="containerPaddingGreyCenter90">90%</div>
                      </div>
                      <p className="w3-wide"><i className="fa fa-laptop"></i>Web Design</p>
                      <div className="w3-light-grey">
                        <div className="containerPaddingGreyCenter85">85%</div>
                      </div>
                      <p className="w3-wide"><i className="fa fa-photo"></i>Photoshop</p>
                      <div className="w3-light-grey">
                        <div className="containerPaddingGreyCenter75">75%</div>
                      </div>
                    </div>
                    
                    <div className="w3-row w3-center w3-dark-grey w3-padding-16">
                      <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">14+</span>
                        Partners
                      </div>
                      <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">55+</span>
                        Projects Done
                      </div>
                      <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">89+</span>
                        Happy Clients
                      </div>
                      <div className="w3-quarter w3-section">
                        <span className="w3-xlarge">150+</span>
                        Meetings
                      </div>
                    </div>
                    
                    {/* // Second Parallax Image with Portfolio Text */}
                    <div className="bgimg-2 w3-display-container w3-opacity-min">
                      <div className="w3-display-middle">
                        <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
                      </div>
                    </div>
                    
                    {/* <!-- Container (Portfolio Section) --> */}
                    <div className="w3-content w3-container w3-padding-64" id="portfolio">
                      <h3 className="w3-center">MY WORK</h3>
                      <p className="w3-center"><em>Here are some of my latest lorem work ipsum tipsum. Click on the images to make them bigger</em></p>
                    
                      {/* <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) --> */}
                      <div className="w3-row-padding w3-center">
                        <div className="w3-col m3">
                          <img src="https://www.w3schools.com/w3images/p1.jpg" onclick="onClick(this)" className="w3-hover-opacity" alt="The mist over the mountains"></img>
                        </div>
                    
                        <div className="w3-col m3">
                          <img src="https://www.w3schools.com/w3images/p2.jpg" onclick="onClick(this)" className="w3-hover-opacity" alt="Coffee beans"></img>
                        </div>
                    
                        <div className="w3-col m3">
                          <img src="https://www.w3schools.com/w3images/p3.jpg" onclick="onClick(this)" className="w3-hover-opacity" alt="Bear closeup"></img>
                        </div>
                    
                        <div className="w3-col m3">
                          <img src="https://www.w3schools.com/w3images/p4.jpg" onclick="onClick(this)" className="w3-hover-opacity" alt="Quiet ocean"></img>
                        </div>
                      </div>
                    
                      <div className="w3-row-padding w3-center w3-section">
                        <div className="w3-col m3">
                          <img src="https://www.w3schools.com/w3images/p5.jpg" onclick="onClick(this)" className="w3-hover-opacity" alt="The mist"></img>
                        </div>
                    
                        <div className="w3-col m3">
                          <img src="https://www.w3schools.com/w3images/p6.jpg" onclick="onClick(this)" className="w3-hover-opacity" alt="My beloved typewriter"></img>
                        </div>
                    
                        <div className="w3-col m3">
                          <img src="https://www.w3schools.com/w3images/p7.jpg" onclick="onClick(this)" className="w3-hover-opacity" alt="Empty ghost train"></img>
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