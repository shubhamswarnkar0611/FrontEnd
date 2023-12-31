const posts = [];
let lastActivityTime=null;


function createPost(post){
    return new Promise((res,rej)=>{
     setTimeout(()=>{
        posts.push({title: post});
        res(post);
     }, 1000) 
    });
}

function updateLastUserActivityTime(){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
        lastActivityTime = new Date();
        posts[posts.length-1].lastActivityTime = lastActivityTime.toLocaleString();
        posts[posts.length-1].year = lastActivityTime.getFullYear();
        posts[posts.length-1]['date time'] = lastActivityTime.toISOString();
        res(lastActivityTime);
       },1000) 
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const deletedPost = posts.pop();
          resolve(deletedPost);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
  }

  Promise.all([createPost("Post1"),updateLastUserActivityTime()]).then(([createPostRes,updateRes])=>{
    console.log("Posts:",createPostRes);
    console.log("User Last Activity Time:",updateRes);
  });
  Promise.all([createPost("Post3"),updateLastUserActivityTime()]).then(([createPostRes,updateRes])=>{
    console.log("Posts:",createPostRes);
    console.log("User Last Activity Time:",updateRes);
  });
  Promise.all([createPost("Post2"),updateLastUserActivityTime()]).then(([createPostRes,updateRes])=>{
    console.log("Posts:",createPostRes);
    console.log("User Last Activity Time:",updateRes);
  });

  

  console.log(posts);

 
