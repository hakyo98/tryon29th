import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { ADD_TODO } from '../ActionCreators/type';

class Add extends React.Component {
   constructor() {
       super();
       this.state = {
           newTodo: ''
       }
   } 
   handleSubmit = (e) => {
       e.preventDefault();
        console.log(this.state.newTodo);
        store.dispatch(
            {
                type: ADD_TODO,
                payload: this.state.newTodo
            }
        )
        this.setState({
            newTodo: ""
        })

   }

    handleChange = (e) => {
        this.setState({
            newTodo: e.target.value
        })
    }

   render() {
      return(
          <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <p className="teal-text"> Add todo: </p>
                    <input type="text" value={this.state.newTodo} onChange={this.handleChange}></input>
                </form>
          </div>
      );
   }
}

const mapStateToProps = (state) => {
    console.log(state.todos.todo);
    return(
        {todo: state.todo}
    );
}

export default connect(mapStateToProps)(Add); 
