import { register, mount } from 'riot';
// import sinon from 'sinon'

import ShoppingCart from './shopping-cart.riot';

beforeAll(() => {
  register('shopping-cart', ShoppingCart);
});

describe('shopping-cart', () => {
  let props = null,
    subject = null,
    wrapper = null;

  beforeEach(() => {
    subject = (customProps) => {
      props = {};

      const div = document.createElement('div');
      document.body.appendChild(div);
      return mount(div, { ...props, ...customProps }, 'shopping-cart');
    };

    wrapper = subject();
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });
});
