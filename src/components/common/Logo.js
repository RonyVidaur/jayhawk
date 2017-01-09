import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

const Logo = styled.img`
  hight: ${ props => props.mini ? '60px' : '100px' };
  width: ${ props => props.mini ? '60px' : '100px'};
`

export default Logo
