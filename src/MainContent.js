import './App.css';
import React from 'react';

class MainContent extends React.Component {
increaseCounter = () => {
this.setState({counter: "1"});  }

  render() {
    return (
      <div>
        <div class='main_page_body'>
          <h1>Comfortable work everywhere</h1>
          <p class="large_text">Choose workset and we'll deliver it next day. <br></br>So far only on Phuket</p>
        </div>
        <div class='items'>
        <div class='item'>
          <h2>Triefty set</h2>
          <p class="default_text">Chair + desk</p>
          <input type="button" onclick = {this.increaseCounter} value="Add to shopping cart"></input><br></br>
          <a class="default_text" padding-top="16px">View set</a>
        </div>
        <div class='item'>
          <h2>Gaming set</h2>
          <p class="default_text">Gaimer's chair + desk</p>
          <input type="button" onclick = "plus()" value="Add to shopping cart"></input><br></br>
          <a class="default_text" padding-top="16px">View set</a>
        </div>
        <div class='item'>
          <h2>Standing set</h2>
          <p class="default_text">Chair + sit/stay desk</p>
          <input type="button" onclick = "plus()" value="Add to shopping cart"></input><br></br>
          <a class="default_text" padding-top="16px">View set</a>
        </div>
        </div>
      </div>
    );
  }
}



export default MainContent;
