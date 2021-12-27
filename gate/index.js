import {client} from "./api";

export const postForm = data => {
    client.post('/posts', {
        body: JSON.stringify({
            ...data
        }),
    });
};
export const getUsers = ({pageParam = 1}) => {
     const  result = client.get('/users',{
        params : {
            page : pageParam,
        }
    })
    return result
}

