import axios from "axios";
const axiosInstance = axios.create({
  baseURL:
    "http://api.openweathermap.org/geo/1.0/direct?q={jakata},{JK},{62}&limit={5}&appid={950a399e177b3cc9a64792f63757347d}",
});
export default axiosInstance;

// "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={264a5a3aa994d1471d4658b9cd4148ad}",
