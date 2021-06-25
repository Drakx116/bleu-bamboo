import Slider from 'react-slick';
import '../../assets/scss/slick/main.scss';

const DirtyToClean = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider { ...settings }>
                <div id="slider-clean"> </div>
                <div id="slider-dirty"> </div>
            </Slider>
        </div>
    );
}

export default DirtyToClean;
