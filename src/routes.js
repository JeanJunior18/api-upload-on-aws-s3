const router = require('express').Router()
const multer = require('multer')
const multerConfig = require('../config/multer')

const Post = require('./models/Post')

router.post('/posts', multer(multerConfig).single('file'),async (req,res)=>{
    const post = await Post.create({
        name: req.file.originalname, 
        size: req.file.size, 
        key: req.file.filename, 
        url: req.file.location,
    })

    return res.json(post)
})

module.exports = router