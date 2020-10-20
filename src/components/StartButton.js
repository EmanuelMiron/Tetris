import React from 'react';
import { StyledStartButton } from './styles/styledStartButton';

const Startbutton = ({ callback }) => (
    <StyledStartButton 
        onClick={callback}
    >
        Start Game
    </StyledStartButton>
);

export default Startbutton;