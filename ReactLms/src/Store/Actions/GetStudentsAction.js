import { axiosinstance } from "../../Network/axiosinstance";

export const GetStudentAction = () => async (dispatch) => {
    try {
        const res = await axiosinstance.get("/student");
        return dispatch({
            type: "GET_STUDENT",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}