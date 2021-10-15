import uploadFileTypes from "./uploadFile.types";
import { modifyFiles } from "./uploadFile.utils";

const INITIAL_STATE = {
    fileProgress: {

    }
}

const fileProgressReducer = (state = INITIAL_STATE, action) => { //console.log(action)
    switch (action.type) {
        case uploadFileTypes.SET_UPLOAD_FILE:
            return {
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    ...modifyFiles(state.fileProgress, action.payload)
                },
            }
    
        default:
            return state;
    }
}

export default fileProgressReducer