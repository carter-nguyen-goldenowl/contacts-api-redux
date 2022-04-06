import typeActions from "../contants/typeActions";
const initialState = {
    listContacts: [],
};

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeActions.GETALLCONTACTS:
            return {
                ...state,
                listContacts: action.payload,
            };

        case typeActions.ERROR:
            return {};

        default:
            return state;
    }
};
