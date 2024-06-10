import { api } from "../axiosConfig";

export const productService = {
    listProducts: async () => {
        const response = await api.get('/products/');
        return response;
    }
}