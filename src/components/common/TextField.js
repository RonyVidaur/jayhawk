import React from 'react'
import '../../styles/textfields.css'

const TextField = ({ field, value, label, type, placeholder, onChange }) => {
  return (
    <span>
      <input className="balloon"
        value={value}
        name={field}
        type={type}
        onChange={onChange}
        placeholder={placeholder} />
      <label htmlFor={field}>
        {label}
      </label>
    </span>
  )
}

export default TextField
