import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from 'react-redux';
import store from '../../store';
import { loadUser } from '../../src/redux/slices/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  useEffect(() => {
    const loadStoredUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) store.dispatch(loadUser(JSON.parse(storedUser)));
    };
    loadStoredUser();
  }, []);
  return (
    <Provider store={store}>
      <Slot />
      <StatusBar />
    </Provider>
  );
}
