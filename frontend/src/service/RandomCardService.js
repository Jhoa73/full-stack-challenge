import axios from "axios";
import { BaseService } from "./BaseService";

export class RandomCardService extends BaseService {
    api = process.env.REACT_APP_API_RANDOM_CARD;
    key = process.env.REACT_APP_KEY_RANDOM_CARD;

    async getCard() {
        try {
            const { data } = await axios.get(`${this.api}/Card`, {
                headers: {
                    "X-Api-Key": this.key,
                },
            });
            return data;
        } catch (error) {
            this.handleError(error);
        }
    }
}

const randomCardService = new RandomCardService();
export default randomCardService;
