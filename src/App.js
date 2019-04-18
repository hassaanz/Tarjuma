import React, { Component } from 'react';
import Iframe from 'react-iframe'
import Toolbar from './components/toolbar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarOpen: false,
      targetWeb: ''
    }
  }

  toggleToolbar = () => {
    this.setState((state) => ({toolbarOpen: !(state.toolbarOpen)}));
  };
  onWebChange = (url) => {
    this.setState({targetWeb: url});
  };

  onToggleMarkers = () => {
    window.frames[0].frameElement.contentWindow.tarjuma.log('Toggling Markers!', 'onToggleMarkers');
  };

  appLoaded = (ev) => {
    console.log('Loaded!', ev);
  };

  render() {
    const {toolbarOpen, targetWeb} = this.state;
    return (
      <div className="App">
        <Toolbar
          isOpen={toolbarOpen}
          targetWeb={targetWeb}
          setTarget={this.onWebChange}
          onToggleMarkers={this.onToggleMarkers}
        />
        <Iframe url={targetWeb} id="targetPage" display="initial" onLoad={this.appLoaded} />
      </div>
    );
  }
}

export default App;
