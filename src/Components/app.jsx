import React from 'react';
import Profile from './profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile name="Mahiuddin" bio="lorem" />
      </div>
    );
  }
}

export default App;