import { getWeatherData } from "./getWeatherData.js";

export const handleRoutes = (request) => {
  try {
    const result = getWeatherData(request.url);
    if (result?.name) {
      return ({
        data: result,
        message: "weather report",
        success: true,
      });
    } else {
      return ({
        data: null,
        message: "Page not found!",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
