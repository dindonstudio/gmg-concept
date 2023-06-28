import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

export async function getHeader(lang) {
  return client.fetch(groq`*[_type == 'header-info']`);
}
export async function getHero(lang) {
  return client.fetch(groq`*[_type == 'hero']`);
}
export async function getPresentation(lang) {
  return client.fetch(groq`*[_type == 'presentation']`);
}
export async function getProjects(lang) {
  return client.fetch(groq`*[_type == 'projets']|order(orderRank)`);
}

export async function getFooter(lang) {
  return client.fetch(groq`*[_type == 'footer']`);
}
