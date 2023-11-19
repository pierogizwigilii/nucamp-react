import { baseUrl } from "../app/shared/baseURL";

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image //using array map method to direct our application to look for images in json-server
        };
    });
};
