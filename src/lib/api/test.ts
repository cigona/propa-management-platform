import  axios  from "axios";

export const fetchUsers = async() => {
    const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return users;
}