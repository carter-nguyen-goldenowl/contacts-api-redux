import axios from "axios";
import typeActions from "../contants/typeActions";
import queryString from "query-string";
import { toast } from "react-toastify";

export const getContacts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/api/contacts`);
            dispatch({
                type: typeActions.GETALLCONTACTS,
                payload: { data: response.data },
            });
        } catch (err) {
            dispatch({ type: typeActions.ERROR, payload: err });
        }
    };
};

export const addContacts = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/api/contacts", data);

            if (response.status === 201) {
                dispatch({
                    type: typeActions.ADDCONTACTS,
                    payload: response.data,
                });
                toast.success("Created Successfully");
            }
        } catch (error) {
            toast.error("fails");
        }
    };
};

export const editContacts = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`/api/contacts/${data.id}`, data);
            if (response.status === 200) {
                dispatch({
                    type: typeActions.EDITCONTACTS,
                    payload: response.data,
                });
                toast.success("Updated Successfully");
            }
        } catch (err) {
            toast.error("fails");
        }
    };
};

export const searchContacts = (searchData) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `api/contacts/search/${searchData}`
            );
            dispatch({
                type: typeActions.SEARCHCONTACTS,
                payload: response.data,
            });
        } catch (error) {}
    };
};

export const deleteContacts = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`api/contacts/${id}`);
            dispatch({
                type: typeActions.DELETECONTACTS,
                payload: id,
            });
            toast.success("deleted Successfully");
        } catch (error) {
            toast.error("fails");
        }
    };
};

export const viewContacts = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/api/contacts/${id}`);
            dispatch({
                type: typeActions.VIEWCONTACTS,
                payload: response.data,
            });
        } catch (error) {}
    };
};
