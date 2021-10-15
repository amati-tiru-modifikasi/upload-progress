import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { size, toArray } from 'lodash'

import UploadItem from '../UploadItem/UploadItem'
import { uploadFile } from '../../redux/uploadFile/uploadFile.actions'
import Styles from './UploadProgress.module.css'

const UploadProgress = (props) => {

    const { fileProgress, uploadFile } = props
    const uploadedFileAmount = size(fileProgress)

    useEffect(() => {
        const fileToUpload = toArray(fileProgress).filter(file => file.progress === 0) 
        uploadFile(fileToUpload)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedFileAmount])

    return uploadedFileAmount > 0 ? (
        <div className={Styles.wrapper}>
            <h4>Uploading File</h4>
            {size(fileProgress)
                ? toArray(fileProgress).map(file => <UploadItem key={file.id} file={file} />)
                : null }
        </div>
    ) : null
}

const mapStateToProps = (state) => ({ 
    fileProgress: state.UploadFile.fileProgress
})

const mapDispatchToProps = dispatch => ({
    uploadFile: files => dispatch(uploadFile(files))
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadProgress)
