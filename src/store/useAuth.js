import { reactive } from "vue";

const state = reactive({
  user: JSON.parse(localStorage.getItem("authUser")) || null,
});

export function useAuth() {
  const login = (username, password) => {
    // simulate login
    if (!username || !password) throw new Error("Please enter valid credentials");
    const user = { username };
    state.user = user;
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  const logout = () => {
    state.user = null;
    localStorage.removeItem("authUser");
  };

  return {
    user: state.user,
    get userInfo() {
      return state.user;
    },
    login,
    logout,
  };
}
