import uploadFileTypes from "./uploadFile.types";

const INITIAL_STATE = {
    fileProgress: {

    }
}

const fileProgressReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case uploadFileTypes.SET_UPLOAD_FILE:
            return {
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                },
            }
    
        default:
            return state;
    }
}

export default fileProgressReducer