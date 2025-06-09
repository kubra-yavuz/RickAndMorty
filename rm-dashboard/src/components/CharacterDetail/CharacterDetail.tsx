import '../CharacterDetail/CharacterDetail.css'
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import type { RootState } from '../../redux/store';
import { clearSelectedCharacter } from '../../redux/slices/characterSlice';

function CharacterDetail() {
    const selectedCharacter = useSelector(
        (state: RootState) => state.character.selectedCharacter
    );

    const dispatch = useDispatch();
    const detailRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (selectedCharacter && detailRef.current) {
            detailRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedCharacter]);

    if (!selectedCharacter) return null;

    return (
        <div ref={detailRef}>
            <Card className='card-style'>
                <CardMedia
                    component="img"
                    image={selectedCharacter.image}
                    alt={selectedCharacter.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {selectedCharacter.name}
                    </Typography>
                    <Typography>Status: {selectedCharacter.status}</Typography>
                    <Typography>Species: {selectedCharacter.species}</Typography>
                    <Typography>Location: {selectedCharacter.location.name}</Typography>
                    <Button className='close-button'
                        onClick={() => {
                            dispatch(clearSelectedCharacter());
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Close
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default CharacterDetail;