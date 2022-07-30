import axios from 'axios'

const axiosWithHeaders = axios.create({
	baseURL: `${process.env.APP_SERVER_URL}`,
	headers: { 'Content-Type': 'application/json' },
})

export default axiosWithHeaders
