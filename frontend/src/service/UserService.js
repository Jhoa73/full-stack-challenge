import axios from "axios";
import { BaseService } from "./BaseService";

export class UserService extends BaseService {
    api = process.env.REACT_APP_API_ANALIST;
    pathName = "user";

    async findAll(params) {
        try {
            const { data } = await axios.get(`${this.api}/${this.pathName}`, {
                params,
            });
            return data.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async findOne(user_id) {
        try {
            const { data } = await axios.get(`${this.api}/${this.pathName}/${user_id}`);
            return data.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async create(body) {
        try {
            const { data } = await axios.post(`${this.api}/${this.pathName}`, body);
            return data.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async update(user_id, body) {
        try {
            const { data } = await axios.put(
                `${this.api}/${this.pathName}/${user_id}`,
                body
            );
            return data.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async delete(user_id) {
        try {
            await axios.delete(`${this.api}/${this.pathName}/${user_id}`);
        } catch (error) {
            this.handleError(error);
        }
    }
}

const userService = new UserService();
export default userService;
