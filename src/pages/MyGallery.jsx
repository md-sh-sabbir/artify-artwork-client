import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import Container from '../components/Container';
import ArtworkCard from '../components/ArtworkCard';
import { FaRegThumbsUp } from 'react-icons/fa6';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MyGallery = () => {

    const { user } = use(AuthContext)
    const [artworks, setArtworks] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedArtwork, setSelectedArtwork] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/my-gallery?email=${user.email}`)
            .then(data => {
                console.log(data.data);
                setArtworks(data.data)
                setLoading(false)
            })
    }, [user])

    if (loading) {
        <div className='text-center mt-5'><span className="loading loading-spinner loading-xl"></span></div>
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            title: e.target.title.value,
            medium_tools: e.target.medium.value,
            image: e.target.image.value,
            visibility: e.target.visibility.value,
            category: e.target.category.value,
            dimensions: e.target.dimensions.value,
            price: parseInt(e.target.price.value),
            description: e.target.description.value,
            user_name: e.target.user_name.value,
            user_email: e.target.user_email.value,
            likes_count: 0,
            artist_name: e.target.user_name.value
        }


        axios.put(`http://localhost:3000/artworks/${selectedArtwork._id}`, formData)
            .then(data => {
                console.log(data.data);
                toast.success("Successfully updated!")
                document.getElementById('my_modal_5').close();

                axios.get(`http://localhost:3000/my-gallery?email=${user.email}`)
                    .then(data => setArtworks(data.data))
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleDelete = (artworkId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/artworks/${artworkId}`)
                    .then(data => {
                        console.log(data.data);

                        axios.get(`http://localhost:3000/my-gallery?email=${user.email}`)
                        .then(data => setArtworks(data.data))

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
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
                <h2 className='font-[Montserrat] text-5xl font-bold text-center'>My Gallery</h2>
                <p className='font-[Jost] text-lg mt-5 text-center'>You can find our latest artworks here. Explore our arts for better visuality of artworks</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                    {
                        artworks.map(artwork => (
                            <div key={artwork._id} className="card bg-base-100 h-[550px] shadow-sm transition hover:scale-105 duration-400">
                                <figure className='px-5 pb-0 mt-5'>
                                    <img
                                        src={artwork.image}
                                        className='object-cover w-full rounded-2xl'
                                        alt="Artwork" />
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

                                    <button
                                        className="btn bg-[#2F4464] text-white"
                                        onClick={() => {
                                            setSelectedArtwork(artwork)
                                            document.getElementById('my_modal_5').showModal()
                                        }}
                                    >
                                        Update Artwork
                                    </button>
                                    <button
                                        className="btn bg-red-500 text-white"
                                        onClick={() => handleDelete(artwork._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="card-body p-6 relative">
                            <h2 className="text-2xl font-bold text-center mb-6">Update Artwork</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="label font-medium">User Name</label>
                                    <input
                                        type="text"
                                        defaultValue={user?.displayName}
                                        readOnly
                                        name="user_name"
                                        required
                                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div>
                                    <label className="label font-medium">User Email</label>
                                    <input
                                        type="text"
                                        defaultValue={user?.email}
                                        readOnly
                                        name="user_email"
                                        required
                                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div>
                                    <label className="label font-medium">User Photo URL</label>
                                    <input
                                        type="text"
                                        defaultValue={user?.photoURL}
                                        readOnly
                                        name="user_photo"
                                        required
                                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                        placeholder="Photo URL"
                                    />
                                </div>
                                <div>
                                    <label className="label font-medium">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        key={selectedArtwork?.title}
                                        defaultValue={selectedArtwork?.title}
                                        required
                                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                        placeholder="Enter title"
                                    />
                                </div>
                                <div>
                                    <label className="label font-medium">Medium/Tools</label>
                                    <input
                                        type="text"
                                        name="medium"
                                        key={selectedArtwork?.medium_tools}
                                        defaultValue={selectedArtwork?.medium_tools}
                                        required
                                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                        placeholder="Enter medium"
                                    />
                                </div>
                                <div>
                                    <label className="label font-medium">Image URL</label>
                                    <input
                                        type="url"
                                        name="image"
                                        key={selectedArtwork?.image}
                                        defaultValue={selectedArtwork?.image}
                                        required
                                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                                <div>
                                    <label className="label font-medium">Visibility</label>
                                    <select
                                        key={selectedArtwork?.visibility}
                                        defaultValue={selectedArtwork?.visibility || ""}
                                        name="visibility"
                                        required
                                        className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                                    >
                                        <option value="" disabled>Select visibility</option>
                                        <option value="public">public</option>
                                        <option value="private">private</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label font-medium">Category</label>
                                    <select
                                        key={selectedArtwork?.category}
                                        defaultValue={selectedArtwork?.category || ""}
                                        name="category"
                                        required
                                        className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                                    >
                                        <option value="" disabled>Select category</option>
                                        <option value="Digital Art">Digital Art</option>
                                        <option value="Painting">Painting</option>
                                        <option value="Photography">Photography</option>
                                        <option value="Sculpture">Sculpture</option>
                                        <option value="Illustration">Illustration</option>
                                        <option value="Mixed Media">Mixed Media</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label font-medium">Dimensions</label>
                                    <input
                                        type="text"
                                        name="dimensions"
                                        key={selectedArtwork?.dimensions}
                                        defaultValue={selectedArtwork?.dimensions}
                                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                        placeholder="Enter dimensions"
                                    />
                                </div>
                                <div>
                                    <label className="label font-medium">Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        key={selectedArtwork?.price}
                                        defaultValue={selectedArtwork?.price}
                                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                        placeholder="Enter price"
                                    />
                                </div>
                                <div>
                                    <label className="label font-medium">Description</label>
                                    <textarea
                                        name="description"
                                        required
                                        key={selectedArtwork?.description}
                                        defaultValue={selectedArtwork?.description}
                                        rows="3"
                                        className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[120px]"
                                        placeholder="Enter description"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                                >
                                    Update Artwork
                                </button>
                            </form>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </Container>
        </div>
    );
};

export default MyGallery;