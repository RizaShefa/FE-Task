import { useState } from "react";
import "./App.css";
import UserModal from "./components/UserModal";
import UsersTable from "./components/UsersTable";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="app">
      <section className="app__body">
        <div className="app__create">
          <button type="button" className="btn btn-danger btn-lg" onClick={() => setShowModal(true)}>
            Large button
          </button>
        </div>

        <UsersTable />
      </section>
      {showModal && <UserModal visible={showModal} onClose={() => setShowModal(false)} />}
    </main>
  );
}

export default App;
