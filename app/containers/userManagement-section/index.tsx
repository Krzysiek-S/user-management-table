import React from "react";
import UserTable from "../../(users)/components/UserTable";
import { fetchUsers } from "@/app/(users)/fetchUsers";

const UserPage = async () => {
  const users = await fetchUsers();

  return (
    <div className="min-h-screen flex p-[78px] sm:max-lg:p-[69px]">
      <UserTable users={users} />
    </div>
  );
};

export default UserPage;
