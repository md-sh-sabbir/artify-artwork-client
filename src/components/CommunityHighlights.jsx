import React from 'react';

const CommunityHighlights = () => {
    // Sample community posts - replace with your API data
    const highlights = [
        {
            id: 1,
            type: "Featured",
            title: "Artist Collaboration Event",
            description: "Join us for an exciting collaboration event where artists from around the world come together to create stunning masterpieces.",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
            author: "Community Admin",
            date: "2 days ago",
            likes: 245,
            comments: 38
        },
        {
            id: 2,
            type: "Trending",
            title: "Digital Art Workshop Series",
            description: "Learn the latest digital art techniques from industry professionals. Free for all community members!",
            image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=800&h=600&fit=crop",
            author: "Sarah Johnson",
            date: "4 days ago",
            likes: 189,
            comments: 52
        },
        {
            id: 3,
            type: "Popular",
            title: "Monthly Art Challenge",
            description: "This month's theme is 'Urban Dreams'. Submit your artwork and win exciting prizes and recognition!",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
            author: "Michael Chen",
            date: "1 week ago",
            likes: 312,
            comments: 67
        }
    ];


    return (
        <div className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Community Highlights
                    </h2>
                    <p className="text-lg">
                        Stay updated with the latest events, workshops, and challenges from our vibrant art community
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight) => (
                        <div
                            key={highlight.id}
                            className="bg-[#F5F1E8] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={highlight.image}
                                    alt={highlight.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className={`absolute top-4 left-4 bg-[#2F4464] text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                                    {highlight.type}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-[#2F4464] mb-3">
                                    {highlight.title}
                                </h3>
                                <p className="text-gray-700 mb-4 flex-grow">
                                    {highlight.description}
                                </p>

                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-300">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-[#2F4464] rounded-full flex items-center justify-center text-white font-bold">
                                            {highlight.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#2F4464]">
                                                {highlight.author}
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                {highlight.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors">
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                            </svg>
                                            <span className="text-sm font-medium">
                                                {highlight.likes}
                                            </span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium">
                                                {highlight.comments}
                                            </span>
                                        </button>
                                    </div>
                                    <button className="text-[#2F4464] hover:text-pink-500 font-semibold text-sm transition-colors">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-[#2F4464] hover:bg-[#1e2d42] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg">
                        View All Community Posts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommunityHighlights;