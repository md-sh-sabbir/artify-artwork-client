import React, { useEffect } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const TopArtistsSection = () => {
    
    const topArtists = [
        {
            id: 1,
            name: "Marina Santos",
            photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            specialty: "Abstract Art",
            artworks: 45,
            followers: "12.5K"
        },
        {
            id: 2,
            name: "Alex Chen",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            specialty: "Digital Renaissance",
            artworks: 38,
            followers: "10.2K"
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            specialty: "Minimalism",
            artworks: 52,
            followers: "15.8K"
        },
        {
            id: 4,
            name: "James Wilson",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            specialty: "Photography",
            artworks: 67,
            followers: "18.3K"
        },
        {
            id: 5,
            name: "Sofia Martinez",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
            specialty: "Illustration",
            artworks: 41,
            followers: "9.7K"
        },
        {
            id: 6,
            name: "David Kim",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
            specialty: "Sculpture",
            artworks: 29,
            followers: "8.4K"
        }
    ];




    return (
        <div className="py-16 px-4 bg-[#E8DCC4]">
            <div className="max-w-7xl mx-auto">
                <Fade direction="down" triggerOnce>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Top Artists of the Week
                        </h2>
                        <p className="text-lg">
                            Discover talented artists who are making waves in the art community
                        </p>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topArtists.map((artist, index) => (
                        <Zoom key={artist.id} delay={index * 100} triggerOnce>
                            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={artist.photo}
                                        alt={artist.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#2F4464] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        #{index + 1}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#2F4464] mb-2">
                                        {artist.name}
                                    </h3>
                                    <p className="text-pink-600 font-medium mb-4">
                                        {artist.specialty}
                                    </p>
                                    <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                                        <div>
                                            <p className="text-sm text-gray-600">Artworks</p>
                                            <p className="text-lg font-bold text-[#2F4464]">
                                                {artist.artworks}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Followers</p>
                                            <p className="text-lg font-bold text-[#2F4464]">
                                                {artist.followers}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full bg-[#2F4464] hover:bg-[#1e2d42] text-white font-semibold py-3 rounded-full transition-colors duration-300">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopArtistsSection;