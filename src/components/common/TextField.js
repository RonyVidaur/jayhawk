import React, { PropTypes } from 'react'
import '../../styles/textfields.css'

const TextField = ({ field, value, label, type, placeholder }) => {
  return (
    <span>
      <input className="balloon" value={value} name={field} type={type} placeholder={placeholder} /><label htmlFor={field}>{label}</label>
    </span>
  )
}

export default TextField
