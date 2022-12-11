import React from "react";
import Navbar from "./Navbar";
import Hero from "./hero";
import Card from "./card";
import Contact from "./contact";
import cardData from "./cardData";
import contactData from "./contactData";

export default function App() {
  const cData = cardData.map(item=>{
    return(
      <Card
          image={item.image}
          rating={item.rating}
          country={item.country}
          feedback={item.feedback}
          price={item.price}
          openSpot={item.openSpot}
          location={item.location}
        />
    )
  })
  const contact_data = contactData.map(item=>{
    return(
      <Contact
          img={item.img}
          name={item.name}
          phone={item.phone}
          email={item.email}
        />
    )
  }) 
    return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards">
      {cData}
      </div>
      <div className="contacts">
      {contact_data}
      </div>
      
    </div>
  );
}
