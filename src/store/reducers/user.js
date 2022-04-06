import typeActions from "../contants/typeActions";
const initialState = {
    listError: [],
    listUser: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeActions.LOGIN:
            return {
                ...state,
                listUser: action.payload,
            };
        case typeActions.ERROR:
            return {
                ...state,
                listError: action.payload,
            };
        case typeActions.REGISTER:
            return {
                ...state,
                listUser: action.payload,
            };
        case typeActions.LOGOUT:
            return {
                ...state,
                listUser: action.payload,
            };
        default:
            return state;
    }
};
