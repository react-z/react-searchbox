/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Search from '../Search'

test('Search renders correctly and matches snapshot', () => {
  const handleClear = jest.fn()
  const handleSearchClick = jest.fn()
  const handleChange = jest.fn()

  const component = renderer.create(
    <Search
      inputName="my-input"
      placeholder="Search for something..."
      onClearClick={handleClear}
      onSearchClick={handleSearchClick}
      onKeyChange={handleChange}
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Search renders the correct elements and props', () => {
  const handleClear = jest.fn()
  const handleSearchClick = jest.fn()
  const handleChange = jest.fn()

  const wrapper = shallow(
    <Search
      inputName="my-input"
      placeholder="Search for something..."
      onClearClick={handleClear}
      onSearchClick={handleSearchClick}
      onKeyChange={handleChange}
    />
  )

  expect(wrapper.instance().props.placeholder).toEqual('Search for something...')
  expect(wrapper.instance().props.inputName).toEqual('my-input')

  expect(wrapper.find('svg').length).toEqual(2)
  // wrapper
  //   .find('.input')
  //   .props()
  //   .onClick()

  console.log(wrapper.debug())
})
