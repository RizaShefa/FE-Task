import { useEffect, useState } from "react";
import UserModal from "./components/UserModal";
import UsersTable from "./components/UsersTable";
import { PlusIcon } from "./components/icons/PlusIcon";
import {
  addUser,
  fetchUsers,
  deleteUser,
  updateUser,
} from "./services/addUser";
import { FormData } from "./interfaces/users";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<FormData[]>([]);
  const [selectedUser, setSelectedUser] = useState<FormData | null>(null);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const handleAddUser = async (user: FormData) => {
    const newUser = await addUser(user);
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleUpdateUser = async (id: number, updatedUser: FormData) => {
    const updatedUserData = await updateUser(id, updatedUser);
    setUsers(users.map((user) => (user.id === id ? updatedUserData : user)));
    setSelectedUser(null);
    setShowModal(false); // Close modal after updating user
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <main className="app">
      <section className="app__body">
        <div className="app__create">
          <button
            type="button"
            style={{ height: "35px" }}
            className="btn btn-danger d-flex align-items-center justify-content-center gap-2"
            onClick={() => {
              setSelectedUser(null); // Clear selected user when creating new user
              setShowModal(true);
            }}
          >
            <PlusIcon />
            <span style={{ fontSize: "12px" }} className="pb-0.5">
              Create New User
            </span>
          </button>
        </div>

        <UsersTable
          users={users}
          onDelete={handleDeleteUser}
          onUpdate={handleUpdateUser}
          setSelectedUser={(user) => {
            setSelectedUser(user);
            setShowModal(true);
          }}
        />
      </section>
      {showModal && (
        <UserModal
          visible={showModal}
          onClose={() => setShowModal(false)}
          onAddUser={handleAddUser}
          user={selectedUser}
          onUpdate={handleUpdateUser}
        />
      )}
    </main>
  );
}

export default App;
