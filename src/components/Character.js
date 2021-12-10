import React from 'react'
import styled from 'styled-components';

export default function Character(props){
    const {name, birthDate} = props;
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                Born: {birthDate}
            </div>
        </div>
    )
}