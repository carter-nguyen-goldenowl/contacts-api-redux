import axios from "axios";
import typeActions from "../contants/typeActions";

export const getContacts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("/api/contacts");
            dispatch({
                type: typeActions.GETALLCONTACTS,
                payload: response.data.data,
            });
        } catch (err) {
            dispatch({ type: typeActions.ERROR, payload: err });
        }
    };
};
