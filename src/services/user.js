import client from './client'

function parseData({ data, error }) {
  if (error) throw error
  return data[0]
}

const fetchUser = async () => {
  const userData = await client.from('users').select()
  return parseData(userData)
}

export default fetchUser
