export const handleForm = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'EDIT_PERSON':
            return state.map(t => todo(t, action));
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
                isEdit: true
            };

        default:
            return state;
    }
};
