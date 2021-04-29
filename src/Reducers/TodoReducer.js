import {ADD_TODO, DEL_TODO} from '../ActionCreators/type';

const INITIAL_DATA = {todo: ["Feed the dog", "Homework", "Say Hi"]};

//กระบวนการในการเปลี่ยนแปลง state โดยใช้ action เป็นตัวทำงาน
const todoReducer = (state = INITIAL_DATA, action) => {
    switch(action.type) { // switch จะรับ action.type เข้ามา 
        case(ADD_TODO):
            console.log(action);
            return({todo: [
                ...state.todo,
                action.payload
            ]});
        case(DEL_TODO):
        console.log("Success");
            const removeItem = state.todo.filter((item) => {
                /*
                console.log(item);
                console.log(action.id);
                console.log(state.todo[action.id]);
                console.log(state[action.id] == item);
                */

                return(
                    !(state.todo[action.id] === item)
                )
            })
            console.log(removeItem);
            return {todo: removeItem};
        default: {
            return {
                ...state
            }
        }
    }
}

export default todoReducer;