import React from 'react'
import Laptop from './Laptop'
import Src from './src'


class App extends React.Component {


  render() {
    return (
      <div>
      <h2>Siz Kimsiz ?</h2>
      <Src />
      <Laptop />
      </div>
    )
  }
}

export default App
