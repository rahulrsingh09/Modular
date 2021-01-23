import axios from 'axios';

export const REACTIONS_REQUEST = 'reactions';
export const USER_CONTENT_REACTIONS = '/user_content_reactions ';
export const USERS = '/users ';

export default axios.create({
    baseURL: `https://artful-iudex.herokuapp.com/`
});