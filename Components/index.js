import CurriculumVitae from './CurriculumVitae';
import {Table} from "../Reducers/showTable";
import React from 'react';
import {PropTypes} from 'react';
import {connect} from 'react-redux';

export default class App extends React.Component {
    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {store} = this.context;
        const state1 = store.getState().map(t => {
            if(t.isEdit)
                return t;
        });
        const mapStateToProps = (state= state1) => {
            return {
                fullName: state.fullName,
                Age: state.Age,
                DOB: state.DOB,
                workPlace: state.workPlace,
                phoneNumber: state.phoneNumber,
                email: state.email
            }

        };
        const CurriculumVitaeApp = connect(
            mapStateToProps
        )(CurriculumVitae);

        return (
            <div>
                <CurriculumVitaeApp/>
                <Table/>
            </div>
        )
    }
}

App.contextTypes = {
    store: PropTypes.object
};