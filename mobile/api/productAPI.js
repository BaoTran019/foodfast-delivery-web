import config from './config.json';

const { SERVER_API } = config;
const BASE_URL = `${SERVER_API}/api/products`;

export const fetchMenu = async () => {
    try {
        const res = await fetch(BASE_URL)

        if (!res.ok) {
            console.error(`Fetch failed: ${res.status} ${res.statusText}`);
            throw new Error(`Server returned ${res.status}`);
        }

        const data = await res.json();

        // Trả về luôn mảng rỗng nếu dữ liệu null để tránh crash ở FE
        return Array.isArray(data) ? data : [];
    }
    catch (err) {
        console.error("Error fetching menu:", err);
        return [];
    }
}