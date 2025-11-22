import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const defaultSlides = [
        {
            id: 1,
            title: "Abstract Expressions",
            artist: "Featured: Marina Santos",
            description: "Explore bold geometric patterns and vibrant color palettes that push the boundaries of contemporary art",
            // imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=600&fit=crop"
            imageUrl: "https://i.ibb.co.com/bjtyBSjB/photo-1.jpg"
        },
        {
            id: 2,
            title: "Digital Renaissance",
            artist: "Trending: Alex Chen",
            description: "Where traditional art meets cutting-edge digital techniques in a stunning fusion of old and new",
            // imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&h=600&fit=crop"
            imageUrl: "https://i.ibb.co.com/gZwHD26W/photo-2.jpg"
        },
        {
            id: 3,
            title: "Contemporary Minimalism",
            artist: "Rising Star: Emma Rodriguez",
            description: "Finding beauty in simplicity and negative space through thoughtful composition and restraint",
            imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=600&fit=crop"
        }
    ];

    const slideData = defaultSlides;

    return (
        <div className="h-[calc(100vh-182px)] w-11/12 mx-auto mt-8">
            <Swiper
                pagination={{
                    type: 'bullets',
                    clickable: true
                }}
                navigation={true}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper h-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {slideData.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className='w-full h-full relative font-[Montserrat]'>
                            <img 
                                src={slide.imageUrl} 
                                alt={slide.title} 
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(17,17,17,0)] to-[rgba(17,17,17,1)] pointer-events-none rounded-b-lg"></div>
                            <div className="absolute inset-0 text-white flex flex-col justify-center items-center overflow-hidden text-center space-y-4 md:space-y-8">
                                <h2 className="font-bold text-3xl md:text-5xl lg:text-7xl">
                                    <Typewriter words={[slide.title]} loop={0} cursor={true} cursorBlinking={true}>
                                        
                                    </Typewriter>
                                    
                                </h2>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                                    {slide.artist}
                                </h3>
                                <p className="w-4/5 md:w-full text-xs md:text-sm xl:text-base">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;