import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: '40rem',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export default function Login() {

  const navigate = useNavigate();
  let location = useLocation();
  let from = location?.pathname || "/";

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username")
    console.log(username);
    console.log('location', location, 'from', from)
    navigate(from);
  }

  return (
    <div className="detail">
      
    </div>
  )
}