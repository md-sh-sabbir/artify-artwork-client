import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const ArtworkDetails = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id);
    const [artwork, setArtwork] = useState({})
    const [artist, setArtist] = useState({})
    const [loading, setLoading] = useState(true)
    const { user } = use(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/artworks/${id}`)
            .then(data => {
                setArtwork(data.data)
                console.log(data.data);
                setLoading(false)
            })
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:3000/artworks/artist/${id}`)
            .then(data => {
                console.log(data.data.artist);
                setArtist(data.data.artist)
            })
    }, [id])



    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                    <div className="shrink-0 w-full md:w-1/2">
                        <img
                            src={artwork?.image}
                            alt=""
                            className="w-full object-cover rounded-xl shadow-md"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {artwork?.title}
                        </h1>

                        <div className="flex gap-3">
                            <div className="badge badge-lg badge-outline text-yellow-600 border-yellow-600 font-medium">
                                {artwork?.category}
                            </div>

                            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                {artwork?.medium_tools}
                            </div>
                            <div className="badge badge-lg badge-outline text-blue-600 border-blue-600 font-medium">
                                Likes : {artwork?.likes_count}
                            </div>

                        </div>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {artwork?.description}
                        </p>

                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <img
                                        className='w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover'
                                        src={artist?.photo || 'https://via.placeholder.com/40'}
                                        alt="User Profile"
                                    />
                                </div>
                                <div>
                                    <h2 className='font-semibold'>{artist.name}</h2>
                                </div>
                            </div>
                            <div>
                                <div className="badge badge-soft badge-warning">Total Artworks : {artist.total_artworks}</div>
                            </div>
                        </div>


                        <div className="flex gap-3 mt-6">
                            <Link
                                to={`/update-artwork/${artwork._id}`}
                                className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
                            >
                                Add to Favorites
                            </Link>
                            <button
                                // onClick={handleFavourite}
                                className="btn btn-secondary rounded-full"
                            >
                                Like
                            </button>
                            <button
                                // onClick={handleDlete}
                                className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetails;