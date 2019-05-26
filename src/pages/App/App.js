import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { actionCreators } from '../../store/appStore/action';
import * as ROUTES from '../../router';
import reactLogo from '../../assets/img/logo.svg';
import AnotherPage from '../AnotherPage';
import OtherPage from '../OtherPage';

import {
  StyledBackGround,
  StyledContainer,
  StyledLogoImg,
  StyledP,
  StyledLink
} from './styledApp';
const App = props => {
  // console.log(props);
  return (
    <StyledBackGround>
      <StyledContainer>
        <StyledLogoImg src={reactLogo} alt='react' />
        <StyledP>Hello, React</StyledP>
      </StyledContainer>
      <StyledContainer>
        <StyledLink to={ROUTES.ANOTHERPAGE}>AnotherPage</StyledLink>
        <StyledLink to={ROUTES.OTHERPAGE}>OtherPage</StyledLink>
      </StyledContainer>
      <StyledContainer>
        <Switch>
          <Route path={ROUTES.ANOTHERPAGE} component={AnotherPage} />
          <Route path={ROUTES.OTHERPAGE} component={OtherPage} />
        </Switch>
      </StyledContainer>
    </StyledBackGround>
  );
};

export default connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(withRouter(App));
