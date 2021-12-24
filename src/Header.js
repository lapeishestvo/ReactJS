import buy from './buy.svg';
import './App.css';
import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {counter: "0"};
  }

  render() {
    return (
      <div class='default_background'>
        <div class='header'>
          <div class="logo">
            <h2>Digitzen</h2>
          </div>
          <div class="menu">
            <p class="default_text">Our products</p>
            <p class="default_text">Contacts</p>
            <p class="default_text">Login or Register</p>
            <div class="shopping_cart">
              <img src={buy} alt="Shopping cart"></img>
              <div class="items_in_cart">
                <div class='default_text counter_items_in_cart'>
                  <div id='i'>{this.state.counter}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
  }
}

export default Header;
