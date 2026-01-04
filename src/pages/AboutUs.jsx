import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Artify</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where creativity meets community. We're building a vibrant platform that empowers artists to share their vision and connect with art enthusiasts around the world.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Artify was born from a simple belief: every artist deserves a beautiful space to showcase their work and every art lover deserves an inspiring platform to discover new talent. In a world overflowing with content, we wanted to create something different—a curated, elegant space dedicated entirely to the appreciation of creative artwork.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We understand that art is more than just images on a screen. It's expression, emotion, and connection. That's why we've designed Artify to be more than just a gallery—it's a community where artists and admirers can come together to celebrate creativity in all its forms.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Artist Galleries</h3>
              <p className="text-gray-600">
                Create your personalized portfolio and showcase your artwork in stunning galleries that reflect your unique style.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Discover & Explore</h3>
              <p className="text-gray-600">
                Browse through diverse collections of artwork, discover emerging artists, and explore different styles and mediums.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Curate Favorites</h3>
              <p className="text-gray-600">
                Build your personal collection by saving and organizing your favorite pieces from artists around the platform.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Connect & Engage</h3>
              <p className="text-gray-600">
                Foster meaningful connections through appreciation, comments, and interactions with fellow artists and enthusiasts.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-lg shadow-md p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Creativity First</h3>
              <p className="text-gray-600">
                We celebrate originality and provide artists with the tools to express their unique vision.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                Art thrives in connection. We foster a supportive environment where artists inspire each other.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Simplicity</h3>
              <p className="text-gray-600">
                Beautiful design shouldn't be complicated. Our interface lets the art take center stage.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve with modern features that enhance the art-sharing experience.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Creative Community</h2>
          <p className="text-lg mb-8 opacity-95">
            Whether you're an artist looking to share your work or an art lover seeking inspiration, Artify is your canvas.
          </p>
          <button className="bg-white text-blue-600 font-semibold text-lg px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;