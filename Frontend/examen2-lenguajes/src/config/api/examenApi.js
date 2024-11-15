import axios from "axios";
import { useAuthStore } from "../../features/security/store";

const API_URL = "https://localhost:7124/api";
axios.defaults.baseURL = API_URL;

// Buscar el token y retornarlo
const getAuth = () => {
    const lsToken = localStorage.getItem("token");
    const lsRefreshToken = localStorage.getItem("refreshToken");
    if (lsToken && lsRefreshToken) {
      return { token: lsToken, refreshToken: lsRefreshToken };
    }
    return null;
};

// Colocar el encabezado del token
const setAuthToken = () => {
    const auth = getAuth();
    if (auth) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
};

setAuthToken();

const examenApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let refreshingTokenPromise = null;

// Interceptor del refreshToken
examenApi.interceptors.response.use(
    (response) => response,
    async (error) => {
      const auth = getAuth();
      if (
        error.response &&
        error.response.status === 401 &&
        auth &&
        !refreshingTokenPromise
      ) {
        refreshingTokenPromise = axios
          .post(
            "auth/refresh-token",
            {
              token: auth.token ?? "",
              refreshToken: auth.refreshToken ?? "",
            },
            { withCredentials: true }
          )
          .then((response) => {
            const setSession = useAuthStore.getState().setSession;
            const user = {
              email: response.data.data.email,
              fullName: response.data.data.fullName,
              tokenExpiration: response.data.data.tokenExpiration,
            };
            setSession(
              user,
              response.data.data.token,
              response.data.data.refreshToken
            );
            setAuthToken();
            refreshingTokenPromise = null;
            return response.data.data.token;
          })
          .catch((err) => {
            console.error("Error refreshing token", err);
            const logout = useAuthStore.getState().logout;
            logout();
            refreshingTokenPromise = null;
  
            window.location.href = "/home";
  
            return Promise.reject(error);
          });
      }
  
      if (refreshingTokenPromise) {
        await refreshingTokenPromise;
        error.config.headers["Authorization"] = `Bearer ${getAuth().token}`;
        return examenApi(error.config);
      }
  
      return Promise.reject(error);
    }
);

// Interceptor para obtener el token
examenApi.interceptors.request.use(
    (config) => {
      const token = useAuthStore.getState().token;
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);
  
export { examenApi };