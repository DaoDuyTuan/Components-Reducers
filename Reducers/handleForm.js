export const handleForm = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'EDIT_PERSON':
            return state.map(state => todo(state, action));
        case 'DELETE_PERSON':
            const removeIndex = state.map(state => state.id).indexOf(action.id);
            state.splice(removeIndex,1);
            return [...state];
        default:
            return state;
    }
};

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                fullName: action.fullName,
                Age: action.Age,
                DOB: action.DOB,
                phoneNumber: action.phoneNumber,
                workPlace: action.workPlace,
                email: action.email,
                id: action.id,
                isEdit: false
            };
        case 'EDIT_PERSON':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                isEdit: !state.isEdit
            };
        default:
            return state;
    }
};
