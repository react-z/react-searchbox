import Search from '../src/Search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  clear(items) {
    console.log('clearing...')
    console.log(items)
  }
  search(items) {
    console.log('searching...')
    console.log(items)
  }
  change(items) {
    console.log('key change...')
    console.log(items)
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Search inputName='my-input'
                placeholder='Search for something...'
                onClearClick={this.clear.bind(this)}
                onSearchClick={this.search.bind(this)}
                onKeyChange={this.change.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root'))
