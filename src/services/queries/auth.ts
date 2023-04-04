import { baseApi } from '../api'

export const loginFn = async ({ authToken }) => {
  const { data } = await baseApi.post(
    '/create-or-update-user',
    {},
    {
      headers: {
        authToken,
      },
    },
  )

  return data
}
