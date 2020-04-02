import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as waitingActions from '../store/modules/waiting';
import WaitingList from '../components/WaitingList';

class WaitingListContainer extends Component {

    //인풋 변경 이벤트
    handleChange = e =>{
        const {WaitingActions} = this.props;
    }

}