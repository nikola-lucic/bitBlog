import Posts from "../entities/Posts";

class PostData {
  fetchPostData() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        const postDataList = result;
        return postDataList;
      })
      .then(postDataList => {
        return postDataList.map(post => {
          return new Posts(post);
        });
      });
  }
  
  fetchPostDetails(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        return response.json();
      })
      .then(postId => {
        return new Posts(postId);
      });
  }
}
export const postData = new PostData();
