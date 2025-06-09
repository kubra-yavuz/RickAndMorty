import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import { getAllCharacters } from '../../api/characterApi';
import { setCharacters } from '../../redux/slices/characterSlice';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

function HomePage() {
    const dispatch = useDispatch();
    const characters = useSelector((state: RootState) => state.character.characters);

    useEffect(() => {
        if (characters.length === 0) {
            getAllCharacters().then((data) => {
                dispatch(setCharacters(data));
            });
        }
    }, [characters.length, dispatch]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="slider-container">
            <h3 className="slider-title">Popular Characters</h3>
            <Slider {...settings}>
                {characters.slice(0, 9).map((char) => (
                    <CharacterCard key={char.id} name={char.name} image={char.image} />
                ))}
            </Slider>
        </div>
    );
}

export default HomePage;