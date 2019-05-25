import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { actionCreators } from '../../store/appStore/action';
import { FormattedMessage } from 'react-intl';
import * as ROUTES from '../../router';
import reactLogo from '../../assets/img/logo.svg';
import I18nSelect from '../../container/I18nSelect';
import AnotherPage from '../AnotherPage';
import OtherPage from '../OtherPage';

import {
  StyledBackGround,
  StyledNavBackGround,
  StyledContainer,
  StyledLogoImg,
  StyledP,
  StyledLink
} from './styledApp';
const App = props => {
  // console.log(props);
  return (
    <StyledBackGround>
      <StyledNavBackGround>
        <StyledContainer styleContent='flex-end' styleDisplay='flex'>
          <I18nSelect />
        </StyledContainer>
      </StyledNavBackGround>
      <StyledContainer>
        <StyledLogoImg src={reactLogo} alt='react' />
        <StyledP>
          <FormattedMessage id='hello' description='hello' />
          <span>, </span>
          <FormattedMessage id='react' description='react' />
        </StyledP>
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
