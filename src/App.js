import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import * as StyleActions from './data/actions/StyleActions';

import StyleContainer from './views/components/StyleContainer';
import HtmlContainer from './views/components/HtmlContainer';

class App extends Component {

  async componentDidMount(){
    this.props.dispatch(StyleActions.list());
  }

  render() {
    const {props} = this,
      css = props.dataStructure.css,
      html = props.dataStructure.html,
      dispatch = props.dispatch;
    if(!css || !css.initial){
      return (
        <div className="tw-loading">
          Carregando
          TreinaWeb Playground
        </div>
      );
    }

    return (
      <div className="App">
        <div>
          <StyleContainer initial={css.initial} controllers={css.controllers} dispatch={dispatch} />
        </div>
        <div>
          <HtmlContainer initial={html.initial} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dataStructure: state.StyleReducer
})

export default connect(mapStateToProps)(App);
