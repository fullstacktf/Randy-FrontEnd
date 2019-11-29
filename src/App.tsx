import React from 'react';
import './css/App.css';
import Navigator from './components/navigator/navigator';
import { Hello } from './components/hello/hello'


const HelloProps = {
  name: "Carlos",
  srcAvatar: './assets/avatar-man-1.jpg'
}


const App: React.FC = () => {
  return (
    <div className="App">
      <Hello {...HelloProps} />
      <Navigator></Navigator>
    </div>
  );
}

export default App;
