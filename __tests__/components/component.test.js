import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../src/components/Header'
import {render} from '@testing-library/react';


it('Header component render', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/Initial/i).textContent).toBe("Bla Bla Shop")
 })