import React from 'react';
import { shallow } from 'enzyme';

import ReturnNestedNull from '../ReturnNestedNull';

describe('<ReturnNestedNull />', () => {

  it('should render', () => {
    const component = shallow(<ReturnNestedNull />);

    expect(component).toMatchSnapshot();
  });
});
