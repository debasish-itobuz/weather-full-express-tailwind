import { handleRoutes } from "./handleRoutes.js";

export const logic = (request, response, next) => {
    try {
      const data = handleRoutes(request);
      if (data.success){
          return response.status(200).send(data);
      }
      return response.status(404).send(data);
    } catch (error) {  
      console.log(error)
      next(error);
    }
  }