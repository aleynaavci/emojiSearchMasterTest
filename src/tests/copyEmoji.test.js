import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import App from '../App'

test('check copy emoji when clicked', () => { 
    let copyEmoji;
    render(<App/>);
    copyEmoji = screen.getByText('Wink');
    userEvent.click(copyEmoji)
    expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😉")
 })