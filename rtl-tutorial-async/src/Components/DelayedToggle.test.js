import React from 'react';
import DelayedToggle from './DelayedToggle';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    
    await waitFor(()=>getByText('야호!!'));
    
  });
});