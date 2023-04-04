import axios from 'axios'

export const loginFn = async (authToken) => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/create-or-update-user`,
    {},
    {
      headers: {
        authToken,
      },
    },
  )
}
