import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Character } from '../../types/Character';


type CharacterState = {
    characters: Character[];
    selectedCharacter: Character | null;
};

const initialState: CharacterState = {
    characters: [],
    selectedCharacter: null,
};

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacters: (state, action: PayloadAction<Character[]>) => {
            state.characters = action.payload;
        },
        setSelectedCharacter: (state, action: PayloadAction<Character>) => {
            state.selectedCharacter = action.payload;
        },
        clearSelectedCharacter: (state) => {
            state.selectedCharacter = null;
        },
    },
});

export const {
    setCharacters,
    setSelectedCharacter,
    clearSelectedCharacter,
} = characterSlice.actions;

export default characterSlice.reducer;