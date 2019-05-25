import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledBackGround = styled.div`
  height: 100vh;
  background: #282c34;
`;
const StyledNavBackGround = styled.div`
  background: #20232a;
  padding: 1em;
`;
const StyledContainer = styled.div`
  max-width: 1140px;
  display: ${props => props.styleDisplay};
  justify-content: ${props => props.styleContent};
  text-align: center;
  margin: 0 auto;
`;
const StyledLogoImg = styled.img`
  width: 50%;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const StyledP = styled.p`
  color: white;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1em;
`;
export {
  StyledBackGround,
  StyledNavBackGround,
  StyledContainer,
  StyledLogoImg,
  StyledP,
  StyledLink
};
