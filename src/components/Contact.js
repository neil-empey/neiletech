import React, { useRef } from "react";
import axios from "axios";
function ContactUs(e) {
  e.preventDefault();

  var data = {
    service_id: "YOUR_SERVICE_ID",
    template_id: "YOUR_TEMPLATE_ID",
    user_id: "YOUR_USER_ID",
    template_params: {
      name: e.target.name,
      email: e.target.email,
      message: e.target.message
    }
  };

  axios
    .post("https://api.emailjs.com/api/v1.0/email/send-form", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json"
    })
    .then(response => {
      return console.log("message sent");
    });
}
