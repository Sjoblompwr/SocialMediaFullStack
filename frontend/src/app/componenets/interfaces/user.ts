import { profilePicture } from "./profilePicture";

export interface User {
    id: number;
    username: string;
    email: string;
    profilePicture: profilePicture;
    friends: User[];
}
