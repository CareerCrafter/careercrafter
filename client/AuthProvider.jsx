import * as React from "react";

import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react';


const authContext = React.createContext();
const supabase = createClient('https://yehndoowqjqdwarwhgjl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllaG5kb293cWpxZHdhcndoZ2psIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTA5MTQ3MCwiZXhwIjoyMDA0NjY3NDcwfQ.yM9Q_q8NRGgvRGYstpspVgZ1ebrh3KPn4Jy_VnyuNG0')


function useAuth() {
  
  const [authed, setAuthed] = React.useState(false);
  const [user, setUser] = React.useState('');
  const [session, setSession] = React.useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      console.log('session', session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)    
    })

    return () => subscription.unsubscribe()
  }, [])

  return {
    user,
    authed,
    session,
    supabase,
    async login() {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'example@email.com',
          password: 'example-password',
        });
    
        if (error) {
          console.error('Login error:', error);
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    },
    
    async logout() {
      try {
        await supabase.auth.signOut();
    
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  }   
}

export function AuthProvider({ children }) {
  const auth = useAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}