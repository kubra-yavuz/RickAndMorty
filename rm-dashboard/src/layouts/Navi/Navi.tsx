import { useState } from 'react';
import Button from '@mui/material/Button';
import './Navi.css';
import DataTable from '../../components/DataTable/DataTable';
import { getAllCharacters } from '../../api/characterApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters } from '../../redux/slices/characterSlice';
import { type RootState } from '../../redux/store';
import HomePage from '../../pages/HomePage/HomePage';
import Filter from '../../components/Filter/Filter';
import HomeIcon from '@mui/icons-material/Home';

function Navi() {
    const [activePage, setActivePage] = useState<'home' | 'characters'>('home');
    const dispatch = useDispatch();
    const characters = useSelector((state: RootState) => state.character.characters);

    const handleCharactersClick = async () => {
        setActivePage('characters');
        if (characters.length > 0) return;

        try {
            const data = await getAllCharacters();
            dispatch(setCharacters(data));
        } catch (err) {
            console.error('Veri çekilemedi', err);
        }
    };

    return (
        <header>
            <div className="banner-half" />
            <div className="nav-buttons">
                <Button onClick={() => setActivePage('home')}><HomeIcon /></Button>
                <Button onClick={handleCharactersClick}>Characters</Button>
            </div>

            <div className="content-area">
                {activePage === 'home' && <HomePage />}
                {activePage === 'characters' && (
                    <>
                        <Filter />
                        <DataTable data={characters} />
                    </>

                )}

            </div>
        </header>
    );
}

export default Navi;