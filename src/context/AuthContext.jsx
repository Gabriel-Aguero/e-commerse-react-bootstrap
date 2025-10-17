import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  // const [usuarios, setUsuarios] = useState([]);

  const login = async (username, password) => {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setToken(data);

    // Recupero los datos del usuario y guardalo en localStorage
    const userRes = await fetch("https://fakestoreapi.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userData = await userRes.json();
    const user = userData.find((user) => user.username === username);
    console.log(user);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const userSearch = async (username) => {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();

    const usuarioData = data.find((user) => user.username === username);
    return usuarioData;
    // setUsuarios(usuarioData);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, userSearch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
