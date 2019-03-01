import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class SearchBar extends Component {
  static get defaultProps() {
    return {
      placeholder: 'Search',
      autoFocus: false
    }
  }

  static get propTypes() {
    return {
      inputName: PropTypes.string,
      placeholder: PropTypes.string,
      autoFocus: PropTypes.bool,
      onKeyChange: PropTypes.func,
      onSearchClick: PropTypes.func,
      onClearClick: PropTypes.func
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      focused: true
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.focusInput()
    }
  }

  focusInput() {
    ReactDOM.findDOMNode(this.refs.searchInput).placeholder = ''
    ReactDOM.findDOMNode(this.refs.searchInput).value = ''
    setTimeout(() => {
      ReactDOM.findDOMNode(this.refs.searchInput).focus()
    }, 100)
  }

  handleInputBlur(e) {
    const { placeholder } = this.props
    //ReactDOM.findDOMNode(this.refs.searchInput).value = ''
    ReactDOM.findDOMNode(this.refs.searchInput).placeholder = placeholder
    this.setState({ focused: false })
  }

  handleInputFocus(e) {
    this.focusInput()
    this.setState({ focused: false })
  }

  handleInputClick(e) {
    this.focusInput()
    this.setState({ focused: false })
  }

  handleKeyChange(e) {
    const { searchValue } = this.state
    this.setState({ searchValue: this.refs.searchInput.value }, () => {
      if (this.props.onKeyChange !== undefined) {
        this.props.onKeyChange(searchValue)
      }
    })
  }

  handleSearchClick() {
    const { searchValue } = this.state
    if (this.props.onSearchClick !== undefined) {
      this.props.onSearchClick(searchValue)
    }
  }

  handleClearClick() {
    const { searchValue } = this.state
    this.refs.searchInput.value = ''
    this.setState({ searchValue: '' }, () => {
      if (this.props.onClearClick !== undefined) {
        this.props.onClearClick(searchValue)
      }
    })
  }

  render() {
    const { inputName, placeholder } = this.props
    const { focused } = this.state

    return (
      <SearchWrapper focused={focused}>
        <SearchInput
          name={inputName}
          type="text"
          maxLength="100"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          ref="searchInput"
          placeholder={placeholder}
          onClick={() => this.handleInputClick()}
          onFocus={() => this.handleInputFocus()}
          onBlur={() => this.handleInputBlur()}
          onKeyUp={() => this.handleKeyChange()}
        />
        <SearchClear focused={focused} onClick={() => this.handleClearClick()}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="currentColor" fillRule="evenodd">
              <path d="M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z" />
              <path d="M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z" />
            </g>
          </svg>
        </SearchClear>
        <SearchSubmit
          focused={focused}
          onClick={() => this.handleSearchClick()}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
          >
            <g>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </g>
          </svg>
        </SearchSubmit>
      </SearchWrapper>
    )
  }
}

const SearchWrapper = styled.div`
  border-color: ${props => (props.focused ? '#ccc' : '#fff')};
  position: relative;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 1px;
`

const SearchInput = styled.input`
  color: black;
  border: none;
  margin: 0;
  outline: 0;
  padding: 10px 20px;
  width: 100%;
  &::placeholder {
    color: rgba(0, 0, 0, 0.65);
  }
`

const SearchSubmit = styled.span`
  border-color: ${props => (props.focused ? '#ccc' : '#fff')};
  position: absolute;
  right: 0;
  bottom: 2px;
  width: 3rem;
  display: block;
  svg {
    color: black;
    height: 24px;
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.5;
  }
`

const SearchClear = styled.span`
  border-color: ${props => (props.focused ? '#ccc' : '#fff')};
  position: absolute;
  right: 15px;
  bottom: -4px;
  width: 3rem;
  display: block;

  svg {
    color: black;
    height: 38px;
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.5;
  }
`
