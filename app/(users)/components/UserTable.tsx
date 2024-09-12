"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setUsers, setFilter } from "../../redux/userSlice";
import SearchInput from "./SearchInput";

const UserTable: React.FC<{ users: User[] }> = ({ users }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, filters } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(setUsers(users));
  }, [dispatch, users]);

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    dispatch(setFilter({ key, value }));
  };

  return (
    <div className="container mx-auto p-4 border rounded-2xl max-w-screen-xl shadow-lg bg-[#ebf6ff]">
      <span className="flex items-center pb-4 font-bold justify-center">
        Users
      </span>
      <div className="overflow-x-auto border rounded-2xl">
        <table className="min-w-full bg-[#f4faff]">
          <thead className="bg-[#e5f1fa]">
            <tr className="border-b">
              <th className="py-2 px-4 text-left font-medium w-1/4">Name</th>
              <th className="py-2 px-4 text-left font-medium w-1/4">
                Username
              </th>
              <th className="py-2 px-4 text-left font-medium w-1/4">Email</th>
              <th className="py-2 px-4 text-left font-medium w-1/4">Phone</th>
            </tr>
            <tr className="">
              <td className="py-2 px-4">
                <SearchInput
                  placeholder="Search by name"
                  value={filters.name}
                  onChange={(e) => handleFilterChange("name", e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <SearchInput
                  placeholder="Search by username"
                  value={filters.username}
                  onChange={(e) =>
                    handleFilterChange("username", e.target.value)
                  }
                />
              </td>
              <td className="py-2 px-4">
                <SearchInput
                  placeholder="Search by email"
                  value={filters.email}
                  onChange={(e) => handleFilterChange("email", e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <SearchInput
                  placeholder="Search by phone"
                  value={filters.phone}
                  onChange={(e) => handleFilterChange("phone", e.target.value)}
                />
              </td>
            </tr>
          </thead>
          <tbody className="">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-[#d6ebebae] transition-colors duration-200"
                >
                  <td className="py-2 px-4 font-bold">{user.name}</td>
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
