const express =require('express')
const router= express.Router();
const categories=require('../categories/categories')

router.get('/',async(req, res)=>{
    const allCategories= await categories.find()
    allCategories.sort((a,b)=>{
        return a.key-b.key
    })
    res.render('index',{categories: allCategories})
})

router.get('/myblog',(req, res)=>{
    res.render('myblog')
})

router.get('/oneblogauth',(req, res)=>{
    res.render('oneblogauth')
})

router.get('/oneblognotauth',async(req, res)=>{
    const allCategories= await categories.find()
    allCategories.sort((a,b)=>{
        return a.key-b.key
    })
    res.render('oneblognotauth', {categories: allCategories})
})

router.get('/newblog',async(req, res)=>{
    const allCategories= await categories.find()
    res.render('newblog', {categories: allCategories})
})

router.get('/auth',(req, res)=>{
    res.render('auth')
})

router.get('/reg',(req, res)=>{
    res.render('reg')
})

module.exports= router