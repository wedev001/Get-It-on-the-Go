import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import axios from 'axios';

const apiUrl = 'https://get-it-on-the-go-3o1f.vercel.app/login'; // Add Vercel API link

const fetchUserDetails = async () => {
  try {
    const response = await fetch(`${apiUrl}${SummaryApi.current_user.url}`, {
      method: SummaryApi.current_user.method,
      credentials: 'include',
    });
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
};

const fetchCartProductCount = async () => {
  try {
    const response = await fetch(`${apiUrl}${SummaryApi.addToCartProductCount.url}`, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: 'include',
    });
    const cartData = await response.json();
    return cartData.data.count;
  } catch (error) {
    console.error('Error fetching cart product count:', error);
    return 0;
  }
};

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);
  const [userDetails, setUserDetailsState] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUserDetails();
      if (userData) {
        dispatch(setUserDetails(userData.data));
        setUserDetailsState(userData.data);
      }
    };

    const fetchCartData = async () => {
      const cartCount = await fetchCartProductCount();
      setCartProductCount(cartCount);
    };

    fetchUserData();
    fetchCartData();
  }, []);

  return (
    <Context.Provider
      value={{
        userDetails,
        cartProductCount,
        fetchUserDetails,
        fetchCartProductCount,
      }}
    >
      <ToastContainer position="top-center" />
      <Header />
      <main className="min-h-[calc(100vh-100px)] pt-16">
        <Outlet />
      </main>
      <Footer />
    </Context.Provider>
  );
}

export default App;
