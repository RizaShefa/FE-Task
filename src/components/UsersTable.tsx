import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";
import "./usersTable.css";
interface Users {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function UsersTable() {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Action", field: "action " },
  ];

  const data: Users[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "123-456-7890",
    },
    {
      id: 3,
      name: "Alice Smith",
      email: "alice@example.com",
      phone: "123-456-7891",
    },
    {
      id: 4,
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "123-456-7892",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      phone: "123-456-7893",
    },
    {
      id: 6,
      name: "David Williams",
      email: "david@example.com",
      phone: "123-456-7894",
    },
    {
      id: 7,
      name: "Eve Davis",
      email: "eve@example.com",
      phone: "123-456-7895",
    },
  ];

  return (
    <div className="usersTable">
      <div className="usersTable__row usersTable__head">
        <div className="usersTable__rowContent">
          {columns.map((column) => (
            <div key={column.field} className="usersTable__cell">
              {column.title}
            </div>
          ))}
        </div>
      </div>
      {data.map((user) => (
        <div key={user.id} className="usersTable__row">
          <div className="usersTable__rowContent">
            {columns.map((column) => (
              <div key={column.field} className="usersTable__cell">
                {column.field === "action" ? (
                  <div className="usersTable__actions">
                    <EditIcon />
                    <DeleteIcon />
                  </div>
                ) : (
                  user[column.field as keyof Users]
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
