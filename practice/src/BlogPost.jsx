function BlogPost(post){
    return(
        <div>
            <p>Author: {post.author}</p>
             <p>Title: {post.title}</p>
              <p>Decription: {post.description}</p>
        </div>
    )
}
export default BlogPost