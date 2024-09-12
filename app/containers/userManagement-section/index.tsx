import React from "react";
import UserTable from "../../(users)/components/UserTable";

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

const UserPage = async () => {
  const users = await fetchUsers();

  return (
    <div className="min-h-screen flex p-[78px] sm:max-lg:p-[69px]">
      <UserTable users={users} />
    </div>
  );
};

export default UserPage;
