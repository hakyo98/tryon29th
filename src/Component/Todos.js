import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {DEL_TODO} from '../ActionCreators/type';

class Todos extends React.Component {

    handleClick = (index) => {
        store.dispatch(
            {
                type: DEL_TODO,
                id: index
            }
        )
    }

    render() {
        if (this.props.listTodo) {
            const display = this.props.listTodo.map((item, index) => {
                return(
                    <span key={index} onClick={() => this.handleClick(index)}>
                        <h3 className="center blue-text" >{item}</h3>
                    </span>
                );
            });
            return(
                <div className="collection-item ">
                    {display}
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
       
    }
}

//map the state needed from our initialState in our reducer.js file to the component
// state refer to the entire redux store state
const mapStateToProps = state => {
    return ({
        listTodo: state.todos.todo
    });
}

export default connect(mapStateToProps)(Todos);
