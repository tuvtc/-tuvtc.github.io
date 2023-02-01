// import du lieu + css
import React from "react";
import SearchLogo from '../search.svg'
import './SearchForm.css'

// Function component SearchForm 
function SearchForm(props) {
  const { onSearch, onReset } = props
  const [value, setValue] = React.useState('')

  // function on type goi khi type
  const onType = (e) => {
    setValue(e.target.value)
  }

  // function onReset clear gia tri o input
  const onResetHandle = () => {
    setValue('')
    onReset()
  }

  // function onEnter goi khi nhan nut enter
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onSearchHandle()
    }
  }

  // function onSearchHandle search du lieu theo value + reset lai gia tri o input
  const onSearchHandle = () => {
    onSearch(value)
    onReset()
  }

// render search form
  return (
    <div className='searchform'>
        <div className='d-flex justify-content-between search-input gap-1'>
            <input onKeyDown={onEnter} onChange={onType} value={value} className="border-0 input" />
            <img onClick={onSearchHandle} src={SearchLogo} style={{width: '36px', height: '36px'}} alt=''/>
        </div>
        <div className='d-flex justify-content-end gap-4 search-action'>
            <button onClick={onResetHandle} className="btn btn-light">Reset</button>
            <button onClick={onSearchHandle} className="btn btn-primary">Search</button>
        </div>
    </div>
  );
}

export default SearchForm;
