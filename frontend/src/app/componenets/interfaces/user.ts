import { profilePicture } from "./profilePicture";

export interface User {
    id: number;
    username: string;
    email: string;
    friends: User[];
    profilePicture: profilePicture;
}
