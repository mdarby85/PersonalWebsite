import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// Sections
import AboutMe from "views/HomePage/Sections/AboutMe.jsx";

// Library Components
import Particles from "react-particles-js";
import ScrollableAnchor from "react-scrollable-anchor";

// Style Sheets
import ProfilePage from "assets/jss/material-kit-react-master/src/views/ProfilePage.jsx";

const bodyStyle = { backgroundColor: "#202020" };

class HomePage extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
        document.body.scrollTop = 0;
    }
}

export default withStyles(ProfilePage)(HomePage);