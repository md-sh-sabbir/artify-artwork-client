import React from 'react';
import Slider from '../components/Slider';
import LatestArtworks from '../components/LatestArtworks';

const HomeLayout = () => {
    return (
        <div>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <LatestArtworks></LatestArtworks>
            </section>
        </div>
    );
};

export default HomeLayout;