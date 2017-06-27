import React from 'react';
import {connect} from 'react-redux';

import {toggleModal} from '../actions/toggleModal';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export class Header extends React.Component  {
    toggleInfoModal() {
        this.props.dispatch(toggleModal());
    }

    render() {
        let infoModal;
        if (this.props.showInfoModal) {
            infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
        }

        return (
            <header>
                <TopNav onInfo={() => this.toggleInfoModal()}
                    onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = (state, props) => ({
    showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(Header);