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
export async function getSon(lang) {
  return client.fetch(groq`*[_type == 'son']`);
}
export async function getVideo(lang) {
  return client.fetch(groq`*[_type == 'video360']`);
}
export async function getNuances(lang) {
  return client.fetch(groq`*[_type == 'nuances']`);
}
export async function getSpecification(lang) {
  return client.fetch(groq`*[_type == 'specification']`);
}

export async function getPedigre(lang) {
  return client.fetch(groq`*[_type == 'pedigre']`);
}
export async function getShowroom(lang) {
  return client.fetch(groq`*[_type == 'showroom']`);
}
export async function getFooter(lang) {
  return client.fetch(groq`*[_type == 'footer']`);
}
export async function getPage(lang) {
  return client.fetch(groq`*[_type == 'pageFooter']`);
}

export async function getOverlay(lang) {
  return client.fetch(groq`*[_type == 'overlay']`);
}