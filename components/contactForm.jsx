"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvojpqjo");
  if (state.succeeded) {
    return <p>Merci pour votre message ! Nous vous recontacterons dans les 48h.</p>;
  }
  return (
    <form className="flex flex-col gap-8 md:pl-32 " onSubmit={handleSubmit}>
   
      <input id="name" type="name" name="name" placeholder="Nom" />
      <input id="email" type="email" name="email" placeholder="Adresse Email" />
      <input id="company" type="text" name="company" placeholder="Entreprise" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea rows='6' id="message" name="message" placeholder="Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="flex">
      <button className="md:px-8 md:py-4 bg-dark-blue border border-dark-blue text-light-blue text-p-font-size hover:bg-light-blue md:transition-all hover:text-dark-blue" type="submit" disabled={state.submitting}>
        Envoyer
      </button>
      </div>

    </form>
  );
}
