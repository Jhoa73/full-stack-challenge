export class BaseService {
    //handle error for axios
    handleError(error) {
        if (error?.response?.data?.message || error?.response?.message) {
            throw (error?.response?.data?.message || error?.response?.message)
        }
        else if (error?.request?.data?.message || error?.request?.message) {
            throw (error?.request?.data?.message || error?.request?.message)
        }
        else if (error.message) {
            throw (error?.message)
        }
        throw "Error en request"
    }
}