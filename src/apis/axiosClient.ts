import { ACCESS_TOKEN, REFRESH_TOKEN } from "@src/constants";
import { getLocalStorage, setLocalStorage } from "@src/helpers";
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
  
  const apiKey = import.meta.env.API_KEY;
  const baseURL = import.meta.env.SERVER_URL;

  const fetcherApi: AxiosInstance = axios.create({
    baseURL: baseURL,
  });
  
  fetcherApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (getLocalStorage(ACCESS_TOKEN)) {
      config.headers.Authorization = `Bearer ${getLocalStorage(ACCESS_TOKEN)}`;
    }
    if (getLocalStorage(REFRESH_TOKEN)) {
      config.headers["x-refresh-token"] = getLocalStorage(REFRESH_TOKEN);
    }
    if (apiKey) {
      config.headers["x-api-key"] = apiKey;
    }
    config.headers["ngrok-skip-browser-warning"] = "true";
  
    return config;
  });
  
  fetcherApi.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if(error.response.status === 401 && !originalRequest._retry){
        originalRequest._retry = true;
        const refreshToken = getLocalStorage(REFRESH_TOKEN);
        if(refreshToken){
          try{
            const response = await fetcherApi.post("/api/v1/refresh-token");
            if(response.status === 200){
              const data = response.data;
              setLocalStorage(ACCESS_TOKEN, data.access_token);
              setLocalStorage(REFRESH_TOKEN, data.refresh_token);
              return fetcherApi(originalRequest);
            }
          }catch(error){
            console.log("error", error);
          }
        }
      }
      return Promise.reject(error);
    }
  );
  
  export default fetcherApi;
  