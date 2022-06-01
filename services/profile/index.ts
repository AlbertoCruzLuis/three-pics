/*
  GET /profile
  $ curl --location --request GET 'https://react-test.appsdev.tid.es/profile' \
  --header 'Authorization: Bearer <access_token>'
*/

import { API_URL } from "config"

const profileData = {
  userName: "livingapp"
}

export const getProfile = async () => {
  /*
  const response = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
  })
  return await response.json()
  */
 return profileData
}