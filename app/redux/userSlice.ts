import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  allUsers: [],
  filteredUsers: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.allUsers = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilter(
      state,
      action: PayloadAction<{ key: keyof UserState["filters"]; value: string }>
    ) {
      state.filters[action.payload.key] = action.payload.value;

      state.filteredUsers = state.allUsers.filter((user) =>
        Object.keys(state.filters).every((key) =>
          user[key as keyof User]
            .toString()
            .toLowerCase()
            .startsWith(
              state.filters[key as keyof UserState["filters"]].toLowerCase()
            )
        )
      );
    },
  },
});

export const { setUsers, setFilter } = userSlice.actions;

export default userSlice.reducer;
