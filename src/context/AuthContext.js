// 'use client';
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useRouter } from 'next/navigation';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const loadUserFromCookies = async () => {
//       const token = Cookies.get('token');
//       if (token) {
//         setToken(token);
//         try {
//           const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setUser(data.user);
//         } catch (error) {
//           console.error('Failed to load user from cookies', error);
//         }
//       }
//       setLoading(false);
//     };
//     loadUserFromCookies();
//   }, []);

//   const register = async (userData) => {
//     try {
//       const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, userData);
//       Cookies.set('token', data.token, { expires: 1 });
//       setToken(data.token);
//       setUser(data.user);
//       router.push('/auth/login');
//     } catch (error) {
//       console.error('Failed to register user', error);
//     }
//   };

//   const login = async (userData) => {
//     try {
//       const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, userData);
//       Cookies.set('token', data.token, { expires: 1 });
//       setToken(data.token);
//       setUser(data.user);
//       router.push('/');
//     } catch (error) {
//       console.error('Failed to login user', error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`);
//       Cookies.remove('token');
//       setToken(null);
//       setUser(null);
//       router.push('/auth/login');
//     } catch (error) {
//       console.error('Failed to logout user', error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, loading, register, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => React.useContext(AuthContext);

'use client'
import { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

// Create context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
    success: false,
    message: ''
  });
  const router = useRouter();

  // Set base URL for axios
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  // Update axios headers when auth changes
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`;
  }, [auth?.token]);

  // Retrieve the user from cookies
  useEffect(() => {
    const data = Cookies.get('auth');
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({
        user: parsedData.user,
        token: parsedData.token,
        success: parsedData.success,
        message: parsedData.message
      });
    }
  }, []);

  const login = async (userData) => {
    try {
      const { data } = await axios.post('/auth/login', userData);

      if (!data?.error) {
        setAuth({ user: data.user, token: data.token, success: data.success, message: data.message });
        Cookies.set('auth', JSON.stringify(data));
        router.push('/');
        return data;
      } else {
        return false;
      }
    } catch (error) {
      console.log('Login error:', error?.response?.data?.message);
      throw new Error(error?.response?.data?.message || 'An error occurred while logging in');
    }
  };

  const signup = async (userData) => {
    try {
      const { data } = await axios.post('/auth/register', userData);

      if (!data.error) {
        setAuth({ user: data.user, token: data.token, success: data.success, message: data.message });
        Cookies.set('auth', JSON.stringify(data), { expires: 7 }); // Cookie expires in 7 days
        router.push('/auth/login');
      } else {
        console.log(data.error);
      }

      return data;
    } catch (error) {
      console.log('Signup Error:', error);
      throw new Error(error?.response?.data?.message || 'An error occurred while signing up');
    }
  };

  const logout = () => {
    console.log('Logging out...'); // Debugging
    // Debugging: Log the cookie before removal
    console.log('Auth cookie before removal:', Cookies.get('auth'));
    // Remove the cookie
    Cookies.remove('auth', { path: '/' });
    // Debugging: Log the cookie after removal
    console.log('Auth cookie after removal:', Cookies.get('auth'));
    // Reset auth state
    setAuth({
      user: null,
      token: '',
      success: false,
      message: ''
    });
    console.log('Auth state after logout:', auth); // Debugging
    // Redirect to login page
    router.push('/auth/login');
  };
  

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };