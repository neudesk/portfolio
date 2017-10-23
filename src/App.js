import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    console.log('app', this.props);
    return (
      <MuiThemeProvider>
        {this.props.children && React.cloneElement(this.props.children, {
          app: this.props
        })}
      </MuiThemeProvider>
    );
  }
}

export default App;
