/*
  GET /posts
  $ curl --location --request GET 'https://react-test.appsdev.tid.es/posts' \
  --header 'Authorization: Bearer <access_token>'
*/

import { API_URL } from "config"

const pics = [
  {
    id: 1,
    userName: "livingapp",
    description: "This is a description",
    imageURI: "https://images.unsplash.com/photo-1653917190433-3fae813c544d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    userName: "livingapp",
    description: "This is a description",
    imageURI: "https://images.unsplash.com/photo-1653917190433-3fae813c544d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    userName: "livingapp",
    description: "This is a description",
    imageURI: "https://images.unsplash.com/photo-1653917190433-3fae813c544d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    userName: "livingapp",
    description: "This is a description",
    imageURI: "https://images.unsplash.com/photo-1653917190433-3fae813c544d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
]

export const getPosts = async () => {
  /*const response = await fetch(`${API_URL}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
  })
  return await response.json()*/
  return pics
}

/*
  POST /posts/<ID>/like
  $ curl --location --request POST 'https://react-test.appsdev.tid.es/posts/81d7dd33-ee1b-4da6-887a-ea0b7222b13e/like' \
  --header 'Authorization: Bearer <access_token>'
*/

export const likePost = async (postId: number) => {
  const response = await fetch(`${API_URL}/posts/${postId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
  })
  return await response.json()
}