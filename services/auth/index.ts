/*
  POST /auth
  $ curl --location --request POST 'https://react-test.appsdev.tid.es/auth' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "username": "livingapp",
  "password": "bGl2aW5nYXBw"
  }'
  *Note: credentials are valid if “password” is the result of encoding “username” to base64
*/

import { API_URL } from "config"

export const loginPost = async (username: string, password: string) => {
  /*const response = await fetch(`${API_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  return await response.json()*/
  console.log("loginPost", username, password);

  const encodedUserName = btoa(username); // encode username

  return encodedUserName === password
}