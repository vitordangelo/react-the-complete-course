import * as acitonTypes from "../actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case acitonTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case acitonTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case acitonTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val,
      };

    case acitonTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      };

    default:
      return state;
  }
};

export default reducer;
