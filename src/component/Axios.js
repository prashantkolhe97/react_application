import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url='https://jsonplaceholder.typicode.com/posts'

const Axios = () => {
  const [sata, setData]=useState([])
    useEffect(()=>{
        axios.get(url).then((res)=>{setData(res.data); console.log(res.data);}).catch(()=>{console.log("error")})
    },[])
    function createPost() {
      axios
        .post(url, {
          title: "Hello World!",
          body: "This is a new post."
        })
        .then((response) => {
          setData(response.data);
        });
    }
    function updatePost() {
      axios
        .put(`${url}/1`, {
          title: "Hello World!",
          body: "This is an updated post."
        })
        .then((response) => {
          setData(response.data);
        });
    }
    function deletePost() {
      axios
        .delete(`${url}/1`)
        .then(() => {
          setData([])
          alert("Post deleted!");
        });
    }
  
  return (
    <div>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>
      {
        //sata.map((dt)=>{
          
           <><h1>{sata.title}</h1>
                 <p>{sata.body}</p>
                 </>
        // })

    
    }
    </div>
  )
  }

export default Axios