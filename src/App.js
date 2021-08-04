import React from 'react'
import Clock from './Clock'
import Laptop from './Laptop'
import Src from './src'


class App extends React.Component {


  render() {
    return (
      <div>
      <h2>Siz Kimsiz ?</h2>
      <Src />
      <Laptop />
      <Clock />
      </div>
    )
  }
}

export default App
