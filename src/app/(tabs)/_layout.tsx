import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
export default function TabsLayout() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) router.replace('/login');
    //if (!isAuthenticated) router.replace('/screens/LoginScreen');

  }, [isAuthenticated]);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="agents"
        options={{
          title: "Agents",
          tabBarIcon: () => <Ionicons name="albums" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
