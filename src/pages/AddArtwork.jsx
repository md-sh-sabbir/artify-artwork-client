import React, { use, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const AddArtwork = () => {

    const { user } = use(AuthContext)
    console.log(user?.photoURL);

    const handleSubmit = e => {
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

        axios.post('http://localhost:3000/artworks', formData)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Artwork has been added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    const artistData = {
                        name: e.target.user_name.value,
                        photo: e.target.user_photo.value,
                        total_artworks: 1,
                        arts: [data.data.insertedId]

                    }

                    axios.post('http://localhost:3000/artists', artistData)
                        .then(data => {
                            console.log('Artist updated', data.data);
                        })
                        .catch(err => {
                            console.log('Artist udpate error:', err);
                        })
                }
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to add artwork!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })


    }


    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-xl mx-auto shadow-2xl rounded-2xl my-5">
            <div className="card-body p-6 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Artwork</h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4">
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
                            placeholder="Enter name"
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
                            placeholder="Enter name"
                        />
                    </div>
                    <div>
                        <label className="label font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>
                    <div>
                        <label className="label font-medium">Medium/Tools</label>
                        <input
                            type="text"
                            name="medium"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    <div>
                        <label className="label font-medium">image URL</label>
                        <input
                            type="url"
                            name="image"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    <div>
                        <label className="label font-medium">Visibility</label>
                        <select
                            defaultValue={""}
                            name="visibility"
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="" disabled>
                                Select visibility
                            </option>
                            <option value="public">public</option>
                            <option value="private">private</option>
                        </select>
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="label font-medium">Category</label>
                        <select
                            defaultValue={""}
                            name="category"
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="" disabled>
                                Select category
                            </option>
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
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    <div>
                        <label className="label font-medium">Price</label>
                        <input
                            type="number"
                            name="price"
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Description Textarea */}
                    <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                            name="description"
                            required
                            rows="3"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]"
                            placeholder="Enter description"
                        ></textarea>
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                    >
                        Add Artwork
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddArtwork;