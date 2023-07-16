import React from "react";
import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  console.log('wine id from params', params.wineId)
  try {
    const response = await fetch(`/api/wine/${params.wineId}`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      },
    });
    const wineData = await response.json();
    return wineData[0];
  } catch (err) {
    return {};
  }
}
export default function Wine() {
  const wine = useLoaderData();
  console.log(`Loaded Wine data from loader, id: ${wine.wine_id} name:  ${wine.name}`)
  return (
    <div id="wine"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#b59d82',
      margin: '7.7rem 0rem 0rem 1rem',
      opacity: '.8',
      padding: '.5rem',
      borderRadius: '12px',
    }}
    >
      
      <div
        style={{
      
          justifyContent: 'center',
          color: 'white',
          height: '20rem',
          opacity: '.98',
          borderRadius: '5px',
          padding: '.5rem'
        }}
      
      >
        <h1>{wine.name}</h1>
        <h3>{wine.region}</h3>
        <h4>Tasting notes: {wine.notes}</h4>
        <h4>Alcohol percent: {wine.alcohol_percent}</h4>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
          </div>
        </div>

      </div>
    </div>
  );
}