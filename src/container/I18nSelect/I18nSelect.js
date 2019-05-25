import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/langStore/action';
class I18nSelect extends Component {
  state = {
    langData: [
      {
        id: 'zh',
        text: '繁體中文'
      },
      {
        id: 'en',
        text: 'English'
      }
    ]
  };

  handleLang = event => {
    const { value } = event.target;
    this.props.changeLang(value);
  };
  renderLang = () => {
    return this.state.langData.map(lang => (
      <option key={lang.id} value={lang.id}>
        {lang.text}
      </option>
    ));
  };

  render() {
    return (
      <select onChange={this.handleLang} value={this.props.locale}>
        {this.renderLang()}
      </select>
    );
  }
}
export default connect(
  state => state.lang,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(I18nSelect);
