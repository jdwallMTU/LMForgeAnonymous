// No Warranty
// This software is provided "as is" without any warranty of any kind, express or implied. This includes, but is not limited to, the warranties of merchantability, fitness for a particular purpose, and non-infringement.
//
// Disclaimer of Liability
// The authors of this software disclaim all liability for any damages, including incidental, consequential, special, or indirect damages, arising from the use or inability to use this software.


import React, { Component } from "react";
import homeBackground from "../Asset/Image/home-background.jpg";

class Home extends Component {
    background = {
      backgroundImage: `url(${homeBackground})`
    }

    render() {
        return (
            <div className="page" style={this.background}>
                <h1>Welcome to AutoProphet!</h1>
                <div className="homeContainer">
                  <p>Open source</p>
                  <p>AI-enabled</p>
                  <p>Configurable</p>
                  <p>this is a test</p>
                </div>
            </div>
        );
    }
}

export default Home;
