import Search from '../lib/Search' /* 'react-searchbox' */
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  clear() {
    console.log('clearing...')
  }
  search() {
    console.log('searching...')
  }
  change(key) {
    console.log('key change...')
    console.log(key)
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ padding: '20px', maxWidth: '400px' }}>
        <Search
          inputName="my-input"
          placeholder="Search for something..."
          onClearClick={this.clear.bind(this)}
          onSearchClick={this.search.bind(this)}
          onKeyChange={this.change.bind(this)}
        />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
