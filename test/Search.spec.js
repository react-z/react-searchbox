import expect from 'expect'
import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Search from '../src/Search'

test('Search component', t => {
  const clear = () => {
    console.log('clear...')
  }
  const search = () => {
    console.log('search...')
  }
  const change = () => {
    console.log('change...')
  }

  const wrapper = mount(
    <Search
      inputName="my-input"
      placeholder="Search for something..."
      onClearClick={clear}
      onSearchClick={search}
      onKeyChange={change}
    />
  )

  t.pass(expect(wrapper.props().placeholder).toEqual('Search for something...'))

  t.pass(expect(wrapper.props().onSearchClick).toEqual(search))

  t.pass(expect(wrapper.props().onClearClick).toEqual(clear))

  t.end()
})
