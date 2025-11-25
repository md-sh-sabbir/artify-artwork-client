import React from 'react';
import Slider from '../components/Slider';
import LatestArtworks from '../components/LatestArtworks';
import TopArtistsSection from '../components/TopArtistSection';
import CommunityHighlights from '../components/CommunityHighlights';

const HomeLayout = () => {
    return (
        <div>
            <section>
                <Slider></Slider>
            </section>
            <section>
                <LatestArtworks></LatestArtworks>
            </section>
            <section>
                <TopArtistsSection></TopArtistsSection>
            </section>
            <section>
                <CommunityHighlights></CommunityHighlights>
            </section>
        </div>
    );
};

export default HomeLayout;