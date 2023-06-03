import axios, { AxiosInstance } from "axios";

const BuildAxiosRequest = async (): Promise<AxiosInstance> => {
    return (
        axios.create({
            baseURL: 'http://localhost:8080/'
        })
    )
}
export default BuildAxiosRequest