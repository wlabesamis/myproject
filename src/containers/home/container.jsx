import React, { Component } from 'react';

//Components
import Header from "../../components/header";
import HeroShot from "../../components/hero-shot";

class Home extends Component {
    render(){

        return (
            <div>
                <Header />
                <HeroShot />
            </div>
        )
    }
}

export default Home;