import React from 'react'
import styled from 'styled-components';

const StyledCharacter = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 1%;
    margin: 0 auto;
    color: white;
    background-color: black;
    border-bottom: 2px solid white;

    &:hover {
        transition: all 0.2s ease-in-out;
        background-color: lightgreen;
        color: black;
    }
` 

export default function Character(props){
    const {name, birthDate} = props;
    return (
        <StyledCharacter>
            <div>
                {name}
            </div>
            <div>
                Born: {birthDate}
            </div>
        </StyledCharacter>
    )
}