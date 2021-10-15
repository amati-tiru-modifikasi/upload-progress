const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer()

const app = express()
const port = process.env.PORT || 5000

// semua request akan dimasukkan ke body dengan format JSON
app.use(express.json())

// boleh localshost
app.use(cors())

// post endpoint untuk file
app.post('/file', upload.single('file'), (req, res) => {
    console.log('body', req.file.length, req.file)


    // semua aksi disini
    res.json({ success: true })
})

app.listen(port, error => {
    if(error) throw error
    console.log('Server running on port ' + port)
})

