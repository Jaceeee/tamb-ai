import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import '../stylesheets/FeedCarousel.css';

export default class FeedCarousel extends Component {
    render() {
        return(
            <Carousel pauseOnHover={false} controls={false} className="CarouselContainer">
                <Carousel.Item>
                    <Image className="CarouselImage" src="https://upload.wikimedia.org/wikipedia/commons/1/17/Year_of_The_Dragon.jpg" responsive/>
                    <Carousel.Caption>
                        <h3>Taoist Temple</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="CarouselImage" src="https://res.cloudinary.com/qhodegray/image/upload/v1484132287/simala-cebu-bohol-adventure-1_svnkd5.jpg" responsive/>
                    <Carousel.Caption>
                        <h3>Simala Shrine</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="CarouselImage" src="https://t-ec.bstatic.com/images/hotel/max1024x768/479/47974212.jpg" responsive/>
                    <Carousel.Caption>
                        <h3>Maribago Blue Water</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}