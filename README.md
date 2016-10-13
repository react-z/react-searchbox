# react-searchbox

[![npm version](https://badge.fury.io/js/react-searchbox.svg)](https://badge.fury.io/js/react-searchbox)

react-searchbox is a simple Searchbox component with events for keychange, searching and clearing.

## Install

`npm install react-searchbox --save`

## Usage

```jsx
import Search from 'react-searchbox'
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
```

## Props

#### `inputName` (optional)
The name of the input element

#### `placeholder` (optional)
The placeholder for the input element

#### `autoFocus` (optional)
Focus the input element on component mount if set to true.

#### `onSearchClick` (optional)
Handler for the click event of the search button, returns the search value.

#### `onKeyChange` (optional)
Handler for the onKeyUp event on the input element, returns the search value.

#### `onClearClick` (optional)
Handler for the click event of the clear button, returns the search value.

## Styles

react-searchbox can be used with your own custom styles. A minimal [react-searchbox.css](https://github.com/StevenIseki/react-searchbox/blob/master/lib/react-searchbox.css) style sheet is included.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
