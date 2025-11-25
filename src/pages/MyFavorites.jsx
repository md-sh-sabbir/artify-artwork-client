import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import Container from '../components/Container';
import { FaRegThumbsUp } from 'react-icons/fa6';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyFavorites = () => {

    const { user } = use(AuthContext)
    const [artworks, setArtworks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://artify-artwork-server.vercel.app/favorites`)
            .then(data => {
                // console.log(data.data);
                setArtworks(data.data)
                setLoading(false)
            })
    }, [user])

    if (loading) {
        <div className='text-center mt-5'><span className="loading loading-spinner loading-xl"></span></div>
    }

    const handleDelete = (artworkId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Unfavorite it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://artify-artwork-server.vercel.app/favorites/${artworkId}`)
                    .then(data => {
                        // console.log(data.data);

                        axios.get(`https://artify-artwork-server.vercel.app/my-gallery?email=${user.email}`)
                            .then(data => setArtworks(data.data))

                        Swal.fire({
                            title: "Unfavorited!",
                            text: "You succefully unfavorite it.",
                            icon: "success",
                        });
                    })


                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
    };

    return (
        <div className='my-16'>
            <Container>
                <h2 className="text-4xl font-[Montserrat] md:text-5xl font-bold mb-4 text-center">My Favorites</h2>
                <p className='font-[Jost] text-lg mt-5 text-center'>You can find our latest artworks here. Explore our arts for better visuality of artworks</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                    {
                        artworks.map(artwork => (<div key={artwork._id} className="card bg-base-100 h-[550px] shadow-sm transition hover:scale-105 duration-400">
                            <figure className='px-5 pb-0 mt-5'>
                                <img
                                    src={artwork.image}
                                    className='object-cover w-full rounded-2xl'
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body -mt-2">
                                <h2 className="card-title">{artwork.title}</h2>
                                <div className="bg-[#F1F5E8] font-medium text-[#00D390] w-[46px] px-[10px] py-[6px] rounded-sm flex items-center">
                                    <h2 className='flex items-center gap-1'><FaRegThumbsUp />  <span>{artwork.likes_count}</span></h2>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="badge badge-soft badge-primary">{artwork.artist_name}</div>
                                    <div className="badge badge-soft badge-secondary">{artwork.category}</div>
                                </div>
                                <p>{artwork.description}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelete(artwork._id)} className="btn bg-[#2F4464] text-white w-full">Unfavorite</button>
                                </div>
                            </div>
                        </div>))
                    }
                </div>
            </Container>
        </div>
    );
};

export default MyFavorites;