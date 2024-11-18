import baseApi from ".";

export const tesApi = () => {
    return baseApi.get("/posts");
  };