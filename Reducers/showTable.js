import React from 'react';
import {PropTypes} from 'react';

export class Table extends React.Component {
    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {store} = this.context;
        return (
            <table>
                <tbody>
                {
                    store.getState().map(item =>
                        <tr key={item.id}>
                            <td>{item.fullName}</td>
                            {/*<td>{item.Gender}</td>*/}
                            <td>{item.Age}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.workPlace}</td>
                            <td>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    store.dispatch({
                                        type: 'EDIT_PERSON',
                                        id: item.id
                                    });
                                }}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    store.dispatch({
                                        type: 'DELETE_PERSON',
                                        id: item.id
                                    });
                                }}>Delete
                                </button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        )
    }
}

Table.contextTypes = {
    store: PropTypes.object
};


// fullName: item.fullName,
//     Age: item.Age,
//     DOB: item.DOB,
//     phoneNumber: item.phoneNumber,
//     workPlace: item.workPlace,
//     email: item.email,