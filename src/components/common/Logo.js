import styled from 'styled-components'

const Logo = styled.img`
  hight: ${ props => props.mini ? '60px' : '100px' };
  width: ${ props => props.mini ? '60px' : '100px'};
`

export default Logo
