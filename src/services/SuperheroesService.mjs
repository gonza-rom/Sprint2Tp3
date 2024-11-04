import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
  return await SuperHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroe() {
  return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperheroePorAtributo(atributo, valor) {
  return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
  return await SuperHeroRepository.obtenerMayoresDe30();
}
