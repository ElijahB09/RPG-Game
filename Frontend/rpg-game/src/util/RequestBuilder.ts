import axios, { AxiosInstance } from "axios";

const BuildBaseRequest = async (): Promise<AxiosInstance> => {
    return (
        axios.create({
            baseURL: 'http://localhost:8080/'
        })
    )
}
export default BuildBaseRequest