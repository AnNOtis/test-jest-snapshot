import React from 'react';
import { shallow } from 'enzyme';

import ReturnNull from '../ReturnNull';

describe('<ReturnNull />', () => {

  it('should render', () => {
    const component = shallow(<ReturnNull />);

    expect(component).toMatchSnapshot();
  });
});
