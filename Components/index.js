import CurriculumVitae from './CurriculumVitae';
import {Table} from "../Reducers/showTable";
import React from 'react';
import {PropTypes} from 'react';
// import {connect} from 'react-redux';

export default class App extends React.Component {
    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        let id;
        let isEdit;

        const {store} = this.context;
        const state = store.getState().filter(t => t.isEdit === true);

        state.map(st => {
            id = st.id;
            isEdit = st.isEdit;
        });

        return (
            <div>
                <CurriculumVitae isEdit={isEdit} id={id}/>
                <Table/>
            </div>
        )
    }
}

App.contextTypes = {
    store: PropTypes.object
};