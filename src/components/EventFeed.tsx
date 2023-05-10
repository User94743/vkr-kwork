import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/EventFeed.module.scss";
import axios from "axios";



interface Event {
    id: number;
    date: string;
    description: string;
    title: string;
    imageUrl: string;
}



const SliderComponent: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect( () => {
        axios.get('http://localhost:3001/events').then(res => {
            console.log(res.data)
            setSlides(res.data)
        })
    }, [])

    const [slides, setSlides] = useState<Event[]>([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "5",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        beforeChange: (current: number, next: number) => setActiveSlide(next),
    };

    return (<>
        <div className={styles.events}>
            <h2 className={styles.title}>Последние события</h2>

            <div className={styles.slider}>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <div
                                className={`${styles.slide} ${
                                    activeSlide === index ? styles.active : ""
                                }`}
                            >
                                <img src={slide.imageUrl} alt={slide.title} />
                                <div className={styles.details}>
                                    <div className={styles.date}>{slide.date}</div>
                                    <div className={styles.title}>{slide.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </>

    );
};

export default SliderComponent;