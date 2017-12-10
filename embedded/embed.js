var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST- title, content
var postSchema= new mongoose.Schema({
    title: String,
    content: String
});
// USER- email,name
var userSchema= new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User= mongoose.model ("User", userSchema);
var Post = mongoose.model("Post", postSchema);
//NewUser test
var newUser = new User({
    email: "omar@ruiz.edu",
    name: "Omar Ruiz"
});

newUser.posts.push({
    title: "How to bre polyjuice potion",
    content: "Just kidding. Go to potions class to learn it!"
});
newUser.save(function(err,user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }    
});

//Post test
// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delivious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });
User.findOne({name: "Omar Ruiz"}, function (err,user){
    if(err){
        console.log(err);
        }else {
    user.posts.push({
        title: "3 things I really hate",
        content: "Voldemort, Voldemort, Voldemort"
    });
    user.save(function(err, user){
        if(err){
            console.log(err);
        }else{
            console.log(user);
        }
    });
            
        }
})