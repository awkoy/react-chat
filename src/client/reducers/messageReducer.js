import initialState from './initialState';

const messageReducer = (state = initialState.message, action) => {
        switch (action.type) {
            default:
                return state;
        }
    }
;

export default messageReducer;