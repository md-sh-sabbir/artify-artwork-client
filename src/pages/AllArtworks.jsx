import React, { useState } from 'react';
import Container from '../components/Container';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import ArtworkCard from '../components/ArtworkCard';

const AllArtworks = () => {

    const data = useLoaderData()
    console.log(data);
    const [artworks, setArtworks] = useState(data)
    const [loading, setLoading] = useState(false)

    const handleSearch = e => {
        e.preventDefault()
        const search_text = e.target.search.value 
        console.log(search_text);
        setLoading(true)

        axios.get(`http://localhost:3000/search?search=${search_text}`)
            .then(data => {
                console.log(data.data);
                setArtworks(data.data)
                setLoading(false)
            })
            
    }



    return (
        <div className='my-16'>
            <Container>
                <h2 className='font-[Montserrat] text-5xl font-bold text-center'>Explore Artworks</h2>
                <p className='font-[Jost] text-lg mt-5 text-center'>You can find our latest artworks here. Explore our arts for better visuality of artworks</p>
                <form onSubmit={handleSearch} className='mt-5 mb-10 flex gap-2 justify-center items-center'>
                    <label className="input rounded-full ">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input name="search" type="search" placeholder="Search" />
                    </label>
                     <button className="btn bg-[#2F4464] py-5 text-white rounded-full ">Search</button>
                </form>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                    {
                        artworks.map(artwork => <ArtworkCard key={artwork._id} artwork={artwork}></ArtworkCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllArtworks;