import React, { useState, useEffect } from 'react';

interface FormData {
    name: string;
    username: string;
    email: string;
    street: string;
    city: string;
    zipcode: string;
    phone: string;
}

interface CreateNewUserProps {
    visible: boolean;
    onClose: () => void;
    onAddUser: (user: FormData) => void;
    onUpdate: (id: number, user: FormData) => void;
    user: FormData | null;
}

export default function UserModal({
    visible,
    onClose,
    onAddUser,
    onUpdate,
    user,
}: CreateNewUserProps) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name);
            setUsername(user.username);
            setEmail(user.email);
            setStreet(user.street);
            setCity(user.city);
            setZipcode(user.zipcode);
            setPhone(user.phone);
        } else {
            setName("");
            setUsername("");
            setEmail("");
            setStreet("");
            setCity("");
            setZipcode("");
            setPhone("");
        }
    }, [user]);

    const handleSubmit = () => {
        const newUser: FormData = {
            name,
            username,
            email,
            street,
            city,
            zipcode,
            phone,
        };
        if (user) {
            onUpdate(user.id, newUser);
        } else {
            onAddUser(newUser);
        }
        onClose();
    };

    return (
        <div>
            <div
                className={`modal fade ${visible ? "show" : ""}`}
                id="modal"
                style={{ display: visible ? "block" : "none" }}
            >
                <div className="modal-dialog modal-dialog-start">
                    <div className="modal-content shadow-lg rounded-3 border-0">
                        <div className="modal-header px-4">
                            <h1 className="modal-title fs-5" id="modalLabel">
                                {user ? "Edit User Info" : "New User Info"}
                            </h1>
                            <button
                                type="button"
                                className="btn-close rounded-5 h6 bg-body-secondary text-danger"
                                aria-label="Close"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body px-4 col-xs-12 text-center">
                            <div className="row g-2 align-items-start">
                                <div className="col col-sm-6">
                                    <label htmlFor="">Name</label>
                                    <br />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Riza Shefa"
                                        className="rounded-2 border p-2 mb-3"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="col col-sm-6 col-sm-6 flex-column">
                                    <label htmlFor="">Username</label>
                                    <br />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Rei"
                                        className="rounded-2 border p-2 mb-3"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="row g-2 align-items-start">
                                <div className="col col-sm-6">
                                    <div>
                                        <label htmlFor="">Email</label>
                                        <br />
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        placeholder="reishefa@gmail.com"
                                        className="rounded-2 border p-2 mb-3"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col col-sm-6">
                                    <label htmlFor="">Street</label>
                                    <br />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Rruga e Elbasanit"
                                        className="rounded-2 border p-2 mb-3"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="row g-2 align-items-start">
                                <div className="col col-sm-6">
                                    <label htmlFor="">City</label>
                                    <br />
                                    <input
                                        required
                                        type="text"
                                        placeholder="Tirana"
                                        className="rounded-2 border p-2 mb-3"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                                <div className="col col-sm-6">
                                    <label htmlFor="">Zipcode</label>
                                    <br />
                                    <input
                                        required
                                        type="text"
                                        placeholder="9001"
                                        className="rounded-2 border p-2 mb-3"
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="row g-2 align-items-start ">
                                <div className="col-12 col-sm-6 col-md-6 flex-column align-items-start">
                                    <label htmlFor="">Phone Nr.</label>
                                    <br />
                                    <input
                                        required
                                        type="text"
                                        placeholder="+355674874892"
                                        className="rounded-2 border p-2 mb-3"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0 pt-0 mt-0">
                            <button
                                type="button"
                                className="btn btn-danger px-4"
                                onClick={handleSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
