import config from './config.json'

const { SERVER_API } = config
const BASE_URL = `${SERVER_API}/api/users`

export const getUser = async (userId) => {
    const res = await fetch(`${BASE_URL}/${userId}`)
    if (!res) throw new Error("Không lấy được user")
    const data = await res.json()
    return Array.isArray(data) ? data[0] : data;
}