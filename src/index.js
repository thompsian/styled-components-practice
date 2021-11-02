import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content'

class Main extends React.Component {
  render() {
    return (
      <>
      <h1>Hello world!</h1>
      <Content />
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));