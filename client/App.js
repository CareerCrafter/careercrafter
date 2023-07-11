import React from "react";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Login from "./routes/Login.jsx";
import Wine from "./routes/Wine.jsx";
import Vineyard from "./routes/Vineyard.jsx";
import AuthConsumer from "./AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/winelist",
    element: <Wine/>
  },
  {
    path:"/vineyard",
    element: <Vineyard/>
  }
]);

export default function App() {
  
  const { session, supabase } = AuthConsumer();  
  
  
  if (!session) {
    console.log('no session')
    return (
      <div
        styles={{
          width: '500px',
          height: '500px'
        }}
      >
        <Auth 
          supabaseClient={supabase}
          appearance={{
          theme: ThemeSupa,
          variables: {
          default: {
            colors: {
              brand: 'black',
              brandAccent: 'green',
              },
            },
          },
        }}
        providers={['google', 'facebook', 'twitter']}
      />
      </div>
    )
  }
  else {
    console.log('session');
    return (
      
      <RouterProvider 
        router={router}>
      </RouterProvider>
    
    );
  }
}
