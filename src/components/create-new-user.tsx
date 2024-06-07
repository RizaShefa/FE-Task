import React, { useState } from 'react';
import {  addUser } from '../services/addUser';
import './create-new-use.css';
import {FormData} from '../services/addUser'

interface CreateNewUserProps {
  onClose: () => void;
  onAddUser: (user: FormData) => void;
  initialValues: FormData;
  editingUser: FormData | null;
}

const CreateNewUser: React.FC<CreateNewUserProps> = ({ onClose, onAddUser }) => {
  
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const keys = name.split('.');
    if (keys.length === 2) {
      setFormData((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else if (keys.length === 3) {
      setFormData((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: {
            ...prevState[keys[0]][keys[1]],
            [keys[2]]: value,
          },
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser(formData).then((newUser) => {
      onAddUser(newUser);
      setFormData({ ...initialValues });
      onClose(); // Close the modal
    });
  };

  return (
    <div className="new-user-form">
      <div className='first'>

      <h2>New User Info </h2> <button onClick={onClose}>X</button>
      </div>
      <form onSubmit={handleSubmit} className="two-column-form">
        <div className="column">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            name="address.street"
            id="street"
            placeholder="Street"
            value={formData.address.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="column">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="address.city"
            id="city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleChange}
            required
          />
          <label htmlFor="zipcode">Zipcode:</label>
          <input
            type="text"
            name="address.zipcode"
            id="zipcode"
            placeholder="Zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      <button type="submit">Save</button> 
      </form>
    </div>
  );
};

export default CreateNewUser;
