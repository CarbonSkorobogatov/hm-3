import Three from './ThreeJs/Three'
import React from 'react'
import './App.css';

class App extends React.Component {
  state = {isMounted: true};
  
  render()
  {
    const {isMounted = true} = this.state;

    return(
      <div>
          <button onClick={() => this.setState(state => ({isMounted: !state.isMounted}))}>
            {isMounted ? "Unmount" : "Mount"}
          </button>
          {isMounted && <Three />}
      </div>
    )
  }
}

export default App;
