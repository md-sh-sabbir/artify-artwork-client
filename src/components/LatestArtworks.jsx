import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtworkCard from './ArtworkCard';
import Container from './Container';

const LatestArtworks = () => {

    const [artworks, setArtworks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/latest-artworks')
            .then(data => {
                console.log(data.data);
                setArtworks(data.data)
            })
    }, [])

    return (
        <div className='my-16'>
            <Container>
                <h2 className='font-[Montserrat] text-5xl font-bold text-center'>Featured & Latest Artworks</h2>
                <p className='font-[Jost] text-lg mt-5 text-center'>You can find our latest artworks here. Explore our arts for better visuality of artworks</p>
                <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10 my-10'>
                    {
                        artworks.map(artwork => <ArtworkCard key={artwork._id} artwork={artwork}></ArtworkCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default LatestArtworks;