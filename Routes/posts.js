const route = require('express').Router();
const Post = require('../Model/Post');


route.get('/getAll', async(req,res)=>{
    
    const posts = await Post.find();

    try{
        res.json(posts)
    }
    catch(err){
        res.json({message:err})
    }

})

route.get('/specificPost/:title',async(req,res)=>{
    
    const posts = await Post.find({title:req.params.title});

    try{
        res.json(posts)
    }
    catch(err){
        res.send({message:err})
    }
});


//NEW POST

route.post('/newPost', async(req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });

    const savedPost = await post.save();

    try{
        res.status.json(savedPost);
    }
    catch(err){
        res.json({message: err})
    };
});


//UPDATE POST

route.patch('/updatePost/:postId',async(req,res)=>{
   
   
    try{

        const updatedPost = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{title:req.body.title, description:req.body.description}}
        );

        res.json(updatedPost);
    }
    catch(err){
        res.json({message:err})
    }

})





module.exports = route