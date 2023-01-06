import { axiosinstance } from "../../Network/axiosinstance";


export const AddLessonsAction = (lesson) => async (dispatch) => {
    try {
        const res = await axiosinstance.post("/videos",lesson,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        });
        return dispatch({
            type: "ADD_LESSON",
            payload: res.data
        });
    } catch (err) {
        return console.log(err);
    }
}
