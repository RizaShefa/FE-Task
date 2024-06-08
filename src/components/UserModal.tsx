import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface CreateNewUserProps {
    visible: boolean;
    onClose: () => void;
    onAddUser: (user: FormData) => void;
    onUpdate: (id: number, user: FormData) => void;
    user: FormData | null;
}

export default function UserModal({
    visible,
    onAddUser,
    onClose,
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

    const { register, handleSubmit, formState: { errors } } = useForm();
	type ValidationRules = RegisterOptions & {
		value: RegExp;
		message: string;
	};
	

    useEffect(() => {
        if (user) {
            setName(user.name);
            setUsername(user.username);
            setEmail(user.email);
            setStreet(user.address.street);
            setCity(user.address.city);
            setZipcode(user.address.zipcode);
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

    const onSubmit = (data) => {
        if (user) {
            onUpdate(user.id, data);
        } else {
            onAddUser(data);
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row g-2 align-items-start">
                                    <div className="col col-sm-6">
                                        <label htmlFor="name">Name</label>
                                        <br />
                                        <input
                                            id="name"
                                            {...register("name", { required: "Name is required" })}
                                            type="text"
                                            placeholder="Riza Shefa"
                                            className="rounded-2 border p-2 mb-3"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        {errors.name && <span className="text-danger">{String(errors.name.message)}</span>}
                                    </div>
                                    <div className="col col-sm-6 col-sm-6 flex-column">
                                        <label htmlFor="username">Username</label>
                                        <br />
                                        <input
                                            id="username"
                                            {...register("username", { required: "Username is required" })}
                                            type="text"
                                            placeholder="Rei"
                                            className="rounded-2 border p-2 mb-3"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        {errors.username && <span className="text-danger">{String(errors.username.message)}</span>}
                                    </div>
                                </div>

                                <div className="row g-2 align-items-start">
                                    <div className="col col-sm-6">
                                        <label htmlFor="email">Email</label>
                                        <br />
                                        <input
										id="email"
										{...register("email", { 
											pattern: {
												value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
												message: "Invalid type of email "
											},
										})}
										type="text"
										placeholder="reishefa@gmail.com"
										className="rounded-2 border p-2 mb-3"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
/>
                                        {errors.email && <span className="text-danger">{String(errors.email.message)}</span>}
                                    </div>
                                    <div className="col col-sm-6">
                                        <label htmlFor="street">Street</label>
                                        <br />
                                        <input
                                            id="street"
                                            {...register("street", { required: "Street is required" })}
                                            type="text"
                                            placeholder="Rruga e Elbasanit"
                                            className="rounded-2 border p-2 mb-3"
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                        {errors.street && <span className="text-danger">{String(errors.street.message)}</span>}
                                    </div>
                                </div>

                                <div className="row g-2 align-items-start">
                                    <div className="col col-sm-6">
                                        <label htmlFor="city">City</label>
                                        <br />
                                        <input
                                            id="city"
                                            {...register("city", { required: "City is required" })}
                                            type="text"
                                            placeholder="Tirana"
                                            className="rounded-2 border p-2 mb-3"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                        {errors.city && <span className="text-danger">{String(errors.city.message)}</span>}
                                    </div>
                                    <div className="col col-sm-6">
                                        <label htmlFor="zipcode">Zipcode</label>
                                        <br />
                                        <input
                                            id="zipcode"
											
                                            {...register("zipcode", {
												pattern: {
													value:/^\d{5}(-\d{4})?$/,
													message: "Invalid type of zip code"},
												})}
                                            type="text"
                                            placeholder="90001"
                                            className="rounded-2 border p-2 mb-3"
                                            value={zipcode}
                                            onChange={(e) => setZipcode(e.target.value)}
                                        />
                                        {errors.zipcode && <span className="text-danger">{String(errors.zipcode.message)}</span>}
                                    </div>
                                </div>

                                <div className="row g-2 align-items-start">
                                    <div className="col-12 col-sm-6 col-md-6 flex-column align-items-start">
                                        <label htmlFor="phone">Phone Nr.</label>
                                        <br />
                                        <input
                                            id="phone"
												{...register("phone", { 
													pattern: {
														value: /^(\+|\d)[0-9]{7,16}$/,
														message: "Invalid type of phone number "
													},
												})}
                                            type="text"
                                            placeholder="+355674874892"
                                            className="rounded-2 border p-2 mb-3"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        {errors.phone && <span className="text-danger">{String(errors.phone.message)}</span>}
                                    </div>
                                </div>
                                <div className="modal-footer border-0 pt-0 mt-0">
                                    <button
                                        type="submit"
                                        className="btn btn-danger px-4"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
