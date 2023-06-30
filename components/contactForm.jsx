"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvojpqjo");
  if (state.succeeded) {
    return <p>Merci pour votre message ! Nous vous recontacterons dans les 48h.</p>;
  }
  return (
    <form className="flex flex-col flex-1 gap-8" onSubmit={handleSubmit}>
   
      <input id="name" type="name" name="name" placeholder="Nom" />
      <input id="email" type="email" name="email" placeholder="Adresse Email" />
      <input id="company" type="text" name="company" placeholder="Entreprise" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
    </form>
  );
}
