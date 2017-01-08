import styled from 'styled-components'

const primaryColor = '#149B78'
const primaryText = '#FEFEFE'

const Button = styled.button`
  background: ${props => props.primary ? primaryColor : 'white'};
  color: ${props => props.primary ? primaryText: 'black'};
  display: inline-block;
  font-size: 18px;
  text-align: center;
  line-height: 18px;
  text-decoration: none;
  border-radius: 4px;
  position: relative;
  width: 228px;
  height: 34px;
  margin-left: 10px;
  text-shadow: 0 -1px -1px #af3a2a;
  box-shadow: 0 4px 0 var(--accent-dark), 0 5px 5px 1px rgba(0, 0, 0, 0.4);
  transition: all 0.15s ease-in-out;
  border: none;

  &:hover {
    background-color: #1ACC9E;
    text-shadow: 0 -1px -1px #c4402f;
    box-shadow: 0 4px 0 var(--accent), 0 5px 5px 1px rgba(0, 0, 0, 0.4);
  }
  &:active {
    margin-top: 5px;
    box-shadow: none;
  }
  `
  export default Button
