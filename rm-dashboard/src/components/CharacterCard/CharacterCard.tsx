import './CharacterCard.css';

type Props = {
    name: string;
    image: string;
};

function CharacterCard({ name, image }: Props) {
    return (
        <div className="character-card">
            <img src={image} alt={name} className="character-img" />
            <p className="character-name">{name}</p>
        </div>
    );
}

export default CharacterCard;