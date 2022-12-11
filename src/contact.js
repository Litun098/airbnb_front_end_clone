import React from "react";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img className="contact-image" src={props.img} />
      <h2>{props.name}</h2>
      <div className="info-group">
        <img src="../images/phone.png" className="contact-phone" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="../images/mail.png" className="contact-mail" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
