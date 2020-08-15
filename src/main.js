'use strict';

import { component } from 'riot'
import { createStream } from 'riot-meiosis'

import ShoppingCart from './shopping-cart'

const state = {
  cart: {}
}

const reducer = (newState, oldState) => ({
  ...oldState,
  ...newState
});

createStream(reducer, state)

component(ShoppingCart)(document.querySelector('shopping-cart'))