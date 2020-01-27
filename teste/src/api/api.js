import { create } from "apisauce";

const api = create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_API_HOST_DEVELOPMENT
            : process.env.REACT_APP_API_HOST_PRODUCTION,
    headers: { Accept: "application/json" }
});

export default api;
