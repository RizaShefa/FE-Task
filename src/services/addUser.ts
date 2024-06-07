import axios from 'axios';

const apiBaseUrl = 'http://localhost:8000/users';

export interface FormData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const fetchUsers = () => {
  return axios.get<FormData[]>(apiBaseUrl)
    .then(response => response.data)
    .catch(error => {
      console.warn('Error fetching users:', error);
      throw error;
    });
};

export const deleteUser = (id: number) => {
  return axios.delete(`${apiBaseUrl}/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.warn('Error deleting user:', error);
      throw error;
    });
};

export const updateUser = (id: number, userData: FormData) => {
  return axios.patch<FormData>(`${apiBaseUrl}/${id}`, userData)
    .then(response => response.data)
    .catch(error => {
      console.warn('Error updating user:', error);
      throw error;
    });
};

export const addUser = (userData: FormData) => {
  return axios.post<FormData>(apiBaseUrl, userData)
    .then(response => response.data)
    .catch(error => {
      console.warn('Error adding user:', error);
      throw error;
    });
};
