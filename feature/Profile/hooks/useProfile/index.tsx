import { useQuery } from "react-query"
import { getProfile } from "services/profile"

export const useProfile = () => {
  const { data: profile } = useQuery("profile", getProfile)

  return {
    profile,
  } 
}