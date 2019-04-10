import React from 'react';
import ReactDOM from 'react-dom'; // Step 1a: Import 'ReactDOM'.
import renderer from 'react-test-renderer'; // Step 1b: Install + import this npm module as a dev dependency.

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Step 2: Write this test.
  it('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
