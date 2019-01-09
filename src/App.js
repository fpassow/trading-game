import React, { Component } from 'react';
import TabsDemo1 from './TabsDemo1'
import TabsDemo2 from './TabsDemo2'

const ibWrapperStyle = {display:"inline-block"}

class App extends Component {
  render() {
    return (
      <div className="App">
          <div style={ibWrapperStyle}><TabsDemo1 /></div>
          <div style={ibWrapperStyle}><TabsDemo2 /></div>
      </div>
    );
  }
}

export default App;
