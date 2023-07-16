import React, { useEffect } from "react";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Outlet, useLoaderData, NavLink, Form } from "react-router-dom"
import NavBar from "../components/NavBar.jsx";
import AuthConsumer from "../AuthProvider.jsx";

 export async function loader() {
  try {
    const response = await fetch(`/api/winelist/user`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "user_id":"63957a70-4251-4dbd-9b3b-2909adf68b2f"})
    });
    const wineData = await response.json();
    
    return wineData;
  } catch (err) {
    
    return [];
  }
}

 export default function Root() {
  
  const { session, supabase } = AuthConsumer();
  const wineData = useLoaderData();
  console.log('# of wines loaded: ', wineData.length)
  return (
    <>
    
    {!session &&
      <div
        className="auth"
      >
        <div>
        <Auth        
          supabaseClient={supabase}
          appearance={{
          theme: ThemeSupa,
          color: 'white',
          variables: {
            default: {
              colors: {
                brand: '#8B6E51',
                brandAccent: '#8B6E51',
                },
              },
            },
          }}
          providers={['google', 'facebook', 'twitter']}
        />
        </div>
      </div>
    }
      
    {session &&
      <>
      <div id="root-session">        
        <div id="sidebar">      
          <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
        
          <Form method="post">
            <button type="submit">New</button>
          </Form>
          </div>
          <nav>
            {wineData.length ? (
              <ul>
                {wineData.map((wine, index) => (
                  <li key={index}>
                    <NavLink to={`wine/${wine.wine_id}`}>
                      {wine.name ? (
                        <>
                          {wine.name}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {<span>★</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No wine notes yet.</i>
              </p>
            )}
          </nav>
        </div>
      </div>   
      <NavBar className="NavBar" />  
      <div id='detail'>
        <Outlet/> 
      </div>    
     </>
  }    
  </>
  
  )}