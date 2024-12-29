import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ContentSection = () => {
    const testimonials = [
        {
            quote: "Bodsphere has made Yoga accessible and affordable for everyone. So grateful!",
            name: "Alejandra Martinez",
            location: "Argentina",
        },
        {
            quote: "Super happy to be a part of the Bodsphere Revolution!",
            name: "Katerina Smith",
            location: "United States of America",
        },
        {
            quote: "Bodsphere's Platform is a gift for this World",
            name: "Diego Rodriguez",
            location: "Spain",
        },
        {
            quote: "Bodsphere Accreditation, etc- So powerful!",
            name: "Susana Fernandes",
            location: "Thailand",
        },
    ];

    return (
        <div className="bg-white-100 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to the Yogic World!
                </h1>

                {/* Subheading */}
                <p className="text-lg text-gray-600 mb-8">
                    Yoga Teacher Trainings, Classes, Meditation, Pranayama, Music,
                    Philosophy & More. <br />
                    <span className="font-semibold text-orange-500">Everything under $10.</span>
                </p>

                {/* Call to Action */}
                <div className="flex justify-center">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-orange-600 transition">
                        Explore Now
                    </button>
                </div>
            </div>
            <div>
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-2xl font-semibold mb-2">190+</h2>
                            <p className="text-gray-500">Countries</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-2xl font-semibold mb-2">1,000+</h2>
                            <p className="text-gray-500">On-Demand Classes</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-2xl font-semibold mb-2">100K</h2>
                            <p className="text-gray-500">Members</p>
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="container mx-auto py-16 text-center">
                    <h1 className="text-3xl font-bold mb-4">Discover Your Yogic Path</h1>
                    <p className="text-lg mb-6">Join our community and transform your yoga practice today.</p>
                </div>

                {/* Bottom Section */}
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Yoga Teacher Trainings</h2>
                            <p className="text-gray-500">Become certified Yoga Teachers and transform your practice with World's most accessible & affordable programs.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Yoga Classes</h2>
                            <p className="text-gray-500">Join revitalizing Yoga classes of Yin, Hatha, Ashtanga, Vinyasa and a lot more, to enhance your well-being.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Calm Music</h2>
                            <p className="text-gray-500">Experience tranquility with our calming music, perfect for relaxation and mindfulness.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Pranayama & Meditation</h2>
                            <p className="text-gray-500">Explore the power of breath and enhance your self-awareness and inner peace.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 min-h-screen flex flex-row items-center justify-center">
                <div className="max-w-xl text-center">
                    <h1 className="text-3xl font-bold mb-4">Get Internationally Accredited by Bodsphere, from the comfort of your home</h1>
                    <p className="text-lg mb-6">Join the Bodsphere Community and take the first step towards joining the World's Biggest Community of Yoga Schools and Teachers that represent high quality, safe, affordable, accessible and equitable Yoga.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Accredited</button>
                </div>

                {/* <div className="mt-16">
            
                    <div className="relative w-96 h-64 bg-gray-200 rounded-lg shadow-lg">
                        <img src="mobile.png" alt="Phone Screen" className="absolute top-0 left-0 w-96 h- object-cover rounded-lg" />

                        <div className="absolute top-4 left-4 w-88 h-56 bg-black rounded-lg"></div>
                    </div>
                </div> */}
            </div>
            <div className="bg-gray-100 min-h-screen">
                {/* Testimonials Section */}
                <div className="container mx-auto py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                                <blockquote className="text-gray-500 mb-2">
                                    <span className="text-gray-400">“</span>
                                    {testimonial.quote}
                                    <span className="text-gray-400">”</span>
                                </blockquote>
                                <p className="text-sm text-gray-500">{testimonial.name}</p>
                                <p className="text-xs text-gray-400">{testimonial.location}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Benefits Section */}
                <div className="container mx-auto py-16 bg-pink-500 rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="md:w-1/2 p-8 text-left">
                            <h2 className="text-white text-3xl font-bold mb-4">Get unlimited access to everything</h2>
                            <ul className="text-white text-sm list-disc list-inside">
                                <li>Unlimited Access to all Yoga Teacher Trainings</li>
                                <li>30-Hrs Yoga Nidra Teacher Training</li>
                                <li>40-Hrs Chakra Teacher Training</li>
                                <li>50-Hrs Pranayama Teacher Training</li>
                                <li>60-hrs Yin Yoga Teacher Training</li>
                                <li>200-Hrs Yoga Teacher Training</li>
                                <li>300-Hrs Yoga Teacher Training</li>
                                <li>Unlimited Access to trainings on Ayurveda, Anatomy & Physiology</li>
                                <li>Unlimited Yoga Classes, Meditations, Pranayama & Music</li>
                                <li>Free Accreditation by Bodsphere to teach Yoga globally</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 p-8 bg-pink-600 rounded-md">
                            <h2 className="text-white text-3xl font-bold mb-4">Become a part of Bodsphere's Yogic Revolution</h2>
                            <p className="text-white">
                                <span className="text-5xl font-bold">$15</span> / Month
                            </p>
                            <div className="flex flex-col items-start">
                                <p className="text-white mb-2">Yearly</p>
                                <p className="text-white font-bold">$149</p>
                            </div>
                            <div className="flex flex-col items-start mt-4">
                                <p className="text-white mb-2">Monthly</p>
                                <p className="text-white font-bold">$29</p>
                            </div>
                            <button className="bg-white text-pink-500 hover:bg-pink-100 rounded-md px-4 py-2 mt-4">Subscribe Now</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-white py-16 mt-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-4xl font-bold mb-4">Download the app</h2>
                        <p className="text-lg mb-6">
                            Get unlimited access to Yoga Teacher Trainings, Yoga classes, Meditation and Pranayama, Yogic Wisdom and more.
                        </p>
                        <div className="flex space-x-4">
                            <a  className="bg-transparent text-gray-900 rounded-full px-4 py-2">
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    className="h-10"
                                />
                            </a>
                            <a className="bg-transparent text-gray-900 rounded-full px-4 py-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play Store"
                                    className="h-10"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-end">
                        <div className="flex flex-col items-end">
                            {/* <img src="desktop-mockup.png" alt="Desktop Mockup" className="w-96 md:w-auto" />
                            <img src="mobile-mockup.png" alt="Mobile Mockup" className="w-64 mt-8" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
