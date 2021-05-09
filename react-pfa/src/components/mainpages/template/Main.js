// App.js

import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default Main;