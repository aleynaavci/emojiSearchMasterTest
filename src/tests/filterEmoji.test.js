import React from "react"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import App from "../App"

test('check filter emoji list render', () => {
    render(<App/>);
    const text = screen.getByText("Wink");
    expect(text).toBeInTheDocument("Wink");
  }); 