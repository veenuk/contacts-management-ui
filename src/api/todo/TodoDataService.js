import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class TodoDataService {

    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`${API_URL}/contacts/all`);
    }

    retrieveTodo(name, id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/contacts/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/contacts/${id}`);
    }

    updateTodo(name, id, contact) {
        //console.log('executed service')
        return axios.put(`${API_URL}/contacts/${id}`, contact);
    }

    createTodo(name, contact) {
        //console.log('executed service')
        return axios.post(`${API_URL}/contacts/`, contact);
    }

}

export default new TodoDataService()
