import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://localhost:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
