import uploadFileTypes from "./uploadFile.types";
import axios from 'axios';

export const setUploadFile = data => ({
    type: uploadFileTypes.SET_UPLOAD_FILE,
    payload: data,
})

export const setUploadProgress = (id, progress) => ({
    type: uploadFileTypes.SET_UPLOAD_PROGRESS,
    payload: {
        id,
        progress
    }
})

export const successUploadFile = id => ({
    type: uploadFileTypes.SUCCESS_UPLOAD_FILE,
    payload: id
})

export const failureUploadFile = id => ({
    type: uploadFileTypes.FAILURE_UPLOAD_FILE,
    payload: id
})

export const uploadFile = files => dispatch => {
    if (files.length) {
        files.forEach(async file => {
            const formPayLoad = new FormData()
            formPayLoad.append('file', file.file) 
            console.log(formPayLoad)
            try {
                await axios({
                    baseURL: 'http://localhost:5000',
                    url: '/file',
                    method: 'post',
                    data: formPayLoad,
                    onUploadProgress: progress => {
                        const { loaded, total } = progress
                        const percentageProgress = Math.floor((loaded/total) * 100)
                        dispatch(setUploadProgress(file.id, percentageProgress))
                    },
                })
                dispatch(successUploadFile(file.id))
            }catch(error) {
                dispatch(failureUploadFile(file.id))
            }
        })
    }
}