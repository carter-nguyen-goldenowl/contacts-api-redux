import typeActions from "../contants/typeActions";
const initialState = {
    viewlist: [],
    listContacts: [],
    listError: [],
    pagination: {
        current_page: 1,
        per_page: 5,
        total: 6,
    },
    filters: {
        page: 1,
    },
};

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeActions.GETALLCONTACTS:
            return {
                ...state,
                listContacts: action.payload.data.data,
                pagination: {
                    current_page: action.payload.data.current_page,
                    per_page: action.payload.data.per_page,
                    total: action.payload.data.total,
                },
            };
        case typeActions.ADDCONTACTS:
            return {
                ...state,
                listContacts: [...state.listContacts, action.payload],
            };
        case typeActions.DELETECONTACTS:
            return {
                ...state,
                listContacts: state.listContacts.filter((contact) => {
                    return contact.id !== action.payload;
                }),
            };

        case typeActions.EDITCONTACTS:
            let listContactsCopy = [...state.listContacts];
            let objIndex = listContactsCopy.findIndex(
                (item) => item.id === action.payload.id
            );
            listContactsCopy[objIndex] = action.payload;
            return {
                ...state,
                listContacts: listContactsCopy,
            };

        case typeActions.SEARCHCONTACTS:
            return {
                ...state,
                listContacts: action.payload,
            };

        case typeActions.VIEWCONTACTS:
            return {
                ...state,
                viewlist: action.payload,
            };
        case typeActions.ERROR:
            return {
                ...state,
                listError: action.payload,
            };

        default:
            return state;
    }
};
