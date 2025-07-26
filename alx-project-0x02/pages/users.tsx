import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps, UsersPageProps } from "@/interfaces";
import Headers from "@/components/layout/Header";

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
    revalidate: 60, 
  };
}

export default Users;