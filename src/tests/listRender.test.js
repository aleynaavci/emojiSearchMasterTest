import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import emojiList from '../emojiList.json'

test('check emoji list render first opened', () => {
    let emojiList;
    render(< App/> );
    emojiList = [...document.querySelectorAll('.emoji-item')].slice(0, 10);
    emojiList.map((item)=>{
        expect(screen.getByText(item.title)).toBeInTheDocument();
    })
});