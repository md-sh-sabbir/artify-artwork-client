import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">Send us an email anytime</p>
            <a href="mailto:support@artify.com" className="text-blue-600 hover:text-blue-700 font-medium">
              support@artify.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">Mon-Fri from 9am to 6pm</p>
            <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-medium">
              +1 (234) 567-890
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-3">Come say hello at our office</p>
            <p className="text-blue-600 font-medium">
              123 Art Street, Creative City, CC 12345
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h2>
          
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help you?"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I upload my artwork?</h3>
              <p className="text-gray-600">
                Simply navigate to "Add Artwork" in the navigation menu, fill in the details, and upload your image. Your artwork will be visible in your gallery immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Is Artify free to use?</h3>
              <p className="text-gray-600">
                Yes! Artify offers a free tier that allows you to upload and showcase your artwork. We also offer premium features for artists who want additional functionality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Can I sell my artwork on Artify?</h3>
              <p className="text-gray-600">
                Currently, Artify is focused on showcasing and sharing artwork. However, we're working on e-commerce features that will be available soon.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">How do I report inappropriate content?</h3>
              <p className="text-gray-600">
                If you see content that violates our community guidelines, please use the report button on the artwork or contact us directly through this form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;