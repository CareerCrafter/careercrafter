import React from "react";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import AuthConsumer from "../AuthProvider.jsx";

import NavBar from "../components/NavBar.jsx";


export default function Root() {
  const { session, supabase } = AuthConsumer();  
  console.log(session);
  return (
    <>
      <NavBar className="NavBar" />
    
    
     { !session &&
       <>
         <div
           style={{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#370B1B',
            border: '15px double #8B6E51',
            padding: '25px',
            margin: '50px'

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
                  brandAccent: '#8B6E51',
                  },
                },
              },
            }}
            providers={['google', 'facebook', 'twitter']}
          />
          </div>
        </>
      }
      </>
  )
  }