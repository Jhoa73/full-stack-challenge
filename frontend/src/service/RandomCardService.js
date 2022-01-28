import axios from "axios";
import { BaseService } from "./BaseService";

export class RandomCardService extends BaseService {
    api = "https://randommer.io/api"
    key = "f3b80c8d2c6a478e89445e919e625fff";

    async getCard() {
        try {
            const { data } = await axios.get(`${this.api}/Card`, {
                headers: {
                    "X-Api-Key": this.key
                }
            })
            return data
        } catch (error) {
            this.handleError(error)
        }
    }
}

const randomCardService = new RandomCardService()
export default randomCardService;