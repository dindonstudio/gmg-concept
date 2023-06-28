"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvojpqjo");
  if (state.succeeded) {
    return <p>Merci pour votre message ! Nous vous recontacterons dans les 48h.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
   
      <label htmlFor="name">Nom</label>
      <input id="name" type="name" name="name" />
      <label htmlFor="email">Adresse Email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
    </form>
  );
}
