import React from 'react';
import { shallow } from 'enzyme';
import Heading from './';

const props = {
  level: 1
};

it('should render a heading', () => {
  const actual = shallow(<Heading {...props}>Heading</Heading>);
  expect(actual).toMatchSnapshot();
});
