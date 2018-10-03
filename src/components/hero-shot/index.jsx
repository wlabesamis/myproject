import React, { Component } from 'react';
import {Carousel, Thumbnail, Grid, Row, Col} from 'react-bootstrap';


class HeroShot extends Component {
    render () {
        return (

                        <Carousel>
                            <Carousel.Item>
                                <Thumbnail src="https://cdn.mobify.com/sites/usap-jcw/production/static/img/homepage_carousel/heroshot-1.jpg" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Thumbnail src="https://cdn.mobify.com/sites/usap-jcw/production/static/img/homepage_carousel/slide-1.png" />
                            </Carousel.Item>
                        </Carousel>

        )
    }
}

export default HeroShot