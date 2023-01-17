import { Like } from "./like";
import { User } from "./user";

export interface Tweet {
    id: number;
    message: string;
    user: User;
    likes: Like[];
    comments: Tweet[];
    commentBoolean: boolean;
}
