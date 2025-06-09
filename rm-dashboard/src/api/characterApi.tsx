import axios from 'axios';
import type { Character } from '../types/Character';

export const getAllCharacters = async (): Promise<Character[]> => {
    const allCharacters: Character[] = [];

    for (let i = 1; i <= 13; i++) {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
            const charactersOnPage = response.data.results;
            allCharacters.push(...charactersOnPage);
        } catch (error) {
            console.error('Hata oluştu', error);
        }
    }

    return allCharacters;
};