import { useState } from "react";
import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";
import "./usersTable.css";



interface Users {
	name: string;
	username: string;
	email: string;
	address:{
		street: string;
		city: string;
		zipcode: string;    
	}
	phone: string;
  }
interface UsersTableProps {
	users: Users[];
	onDelete: (id: number) => void;
	onUpdate: (id: number, user: Users) => void;
	setSelectedUser: (user: Users) => void;
}

export default function UsersTable({
	users,
	onDelete,
	onUpdate,
	setSelectedUser,
}: UsersTableProps) {
	const [deletingId, setDeletingId] = useState<number | null>(null);

	const handleDelete = (id: number) => {
		setDeletingId(id);
		setTimeout(() => {
			onDelete(id);
			setDeletingId(null);
		}, 500); // Match this duration with the CSS animation duration
	};

	const columns = [
		{ title: "ID", field: "id" },
		{ title: "Name", field: "name" },
		{ title: "Email", field: "email" },
		{ title: "Phone", field: "phone" },
		{ title: "Action", field: "action" },
	];

	return (
		<div className="users-table">
			{users.length === 0 ? (
				<div className="users-table__row">
					No data available.
					<br />
					Add by clicking "+ Create New User"
				</div>
			) : (
				<>
					<div className="users-table__row users-table__row--header">
						{columns.map((col) => (
							<div className="users-table__cell" key={col.field}>
								{col.title}
							</div>
						))}
					</div>
					{users.map((user) => (
						<div
							className={`users-table__row ${
								deletingId === user.id ? "deleting" : ""
							}`}
							key={user.id}
						>
							<div className="users-table__cell">{user.id}</div>
							<div className="users-table__cell">{user.name}</div>
							<div className="users-table__cell">{user.email}</div>
							<div className="users-table__cell">{user.phone}</div>
							<div className="users-table__cell users-table__cell--action">
								<span className="action" onClick={() => setSelectedUser(user)}>
									<EditIcon />
								</span>
								<span className="action" onClick={() => handleDelete(user.id)}>
									<DeleteIcon />
								</span>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
}
