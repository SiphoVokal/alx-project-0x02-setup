import React, { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Headers from "@/components/layout/Header";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        setUsers(
          data.map((user: any) => ({
            name: user.name,
            email: user.email,
            address: {
              street: user.address.street,
              city: user.address.city,
            },
          }))
        )
      );
  }, []);

  return (
    <>
    <Headers />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
    </>
  );
};

export default Users;
