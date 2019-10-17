import React from 'react';
import ReactDOM from 'react-dom';
import BlockTransactionValueSum from './BlockTransactionValueSum';

// Example element i/o functionality test on a single component
it('renders without crashing', () => {
    const div = document.createElement('div');
    const input = [
        { value: "4" },
        { value: "4" }
    ];
    ReactDOM.render(<BlockTransactionValueSum transactions={ input } />, div);
    expect(div.children[0].innerHTML).toContain("Total Block Value: 8");
    ReactDOM.unmountComponentAtNode(div);
});
