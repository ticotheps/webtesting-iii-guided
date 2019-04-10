import React from 'react';
import ReactDOM from 'react-dom'; // Step 1a: Import 'ReactDOM'.
import renderer from 'react-test-renderer'; // Step 1b: Install + import this npm module as a dev dependency.
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

afterEach(cleanup);

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Step 2: Write this test.
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  describe('speak()', () => {
    it('updates the message when the speak button is clicked', () => {
      const { getByText, queryByText } = render(<App />);

      const button = getByText(/speak/i);
      expect(queryByText(/not mocking me/i)).toBeFalsy();
      
      fireEvent.click(button);
      // getByText(/not mocking me/i); // if getByText cannot find this text it will throw an error
      expect(queryByText(/not mocking me/i)).toBeTruthy(); // this is a more complete assertion than using 'getByText' 
    });
  });

  describe('mocking', () => {
    it('is mocking me', () => {
      const mock = jest.fn(() => 'hello');
      // const mock = jest.fn().mockImplementation(() => 'hello');
      // const mock = jest(); mock.mockReturnValue('hello');

      const actual = mock('smile');
      // mock('another smile');

      expect(actual).toBe('hello');
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledTimes(1);
      // expect(mock).toHaveBeenCalledWith('frown'); // => fails b/c it was called with something else
      expect(mock).toHaveBeenCalledWith('smile');
    });
  });
});
