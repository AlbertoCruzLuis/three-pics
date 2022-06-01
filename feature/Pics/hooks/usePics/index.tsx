import { useMutation, useQuery } from "react-query"
import { getPosts, likePost } from "services/pics"

export const usePics = () => {
  const { data: getPics } = useQuery("pics", getPosts)
  const { data: likePics } = useMutation(likePost)

  return {
    getPics,
    likePics,
  } 
}