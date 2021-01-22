import axios from 'axios';

export const REACTIONS_REQUEST = 'reactions';

export default axios.create({
    baseURL: `https://artful-iudex.herokuapp.com/`
});