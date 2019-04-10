import React from 'react';
import banana from 'react-test-renderer'; // Step 1: Install this npm module as a dev dependency.

import App from './App';

describe('<App />', () => {
  // Step 2: Write this test.
  it('matches snapshot', () => {
    const tree = banana.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
