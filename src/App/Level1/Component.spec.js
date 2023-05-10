// Component.test.js

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
    it('should display correct result when comparing two numbers', () => {
        const { getByLabelText, getByText } = render(<Component />);
        const input1 = getByLabelText('Comparison between');
        const input2 = getByLabelText('and');
        const compareButton = getByText('Click to compare');

        fireEvent.change(input1, { target: { value: '8' } });
        fireEvent.change(input2, { target: { value: '3' } });
        fireEvent.click(compareButton);

        expect(getByText('8 is greater than 3')).toBeInTheDocument();
    });
});
