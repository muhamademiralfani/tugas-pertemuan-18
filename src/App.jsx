import { Component } from 'react';
import StudentContainer from './containers/StudentContainer';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <StudentContainer />
      </div>
    );
  }
}

export default App;
