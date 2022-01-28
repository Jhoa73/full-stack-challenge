export class BaseService {
    //handle error for axios
    handleError(error) {
        if (error?.response?.data || error?.response?.message) {
            throw (error?.response?.data || error?.response?.message)
        }
        else if (error?.request?.data || error?.request?.message) {
            throw (error?.request?.data || error?.request?.message)
        }
        else if (error.message) {
            throw (error?.message)
        }
        throw "Error en request"
    }
}