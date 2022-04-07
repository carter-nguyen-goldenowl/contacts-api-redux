import axios from "axios";
import typeActions from "../contants/typeActions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const Sigin = (user) => {
    return async (dispatch) => {
        try {
            await axios.post("/api/login", user).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.username);
                    dispatch({
                        type: typeActions.LOGIN,
                        payload: user,
                    });
                    toast.success(res.data.message);
                } else {
                    dispatch({
                        type: typeActions.ERROR,
                        payload: res.data.validator_errors,
                    });
                }
            });
        } catch (err) {}
    };
};

export const Sigup = (user) => {
    return async (dispatch) => {
        try {
            await axios.post("/api/register", user).then((res) => {
                if (res.data.status === 200) {
                    dispatch({
                        type: typeActions.REGISTER,
                        payload: user,
                    });
                    toast.success(res.data.message);
                } else {
                    dispatch({
                        type: typeActions.ERROR,
                        payload: res.data.validator_errors,
                    });
                    toast.error(typeActions.ERROR);
                }
            });
        } catch (err) {
            toast.error(typeActions.ERROR);
        }
    };
};

export const Logout = () => {
    return async (dispatch) => {
        try {
            await axios.post("/api/logout").then((res) => {
                if (res.data.status === 200) {
                    localStorage.clear();
                    dispatch({
                        type: typeActions.LOGOUT,
                        payload: {},
                    });
                    toast.success(res.data.message);
                } else {
                    toast.error(typeActions.ERROR);
                }
            });
        } catch (err) {
            toast.error(typeActions.ERROR);
        }
    };
};
