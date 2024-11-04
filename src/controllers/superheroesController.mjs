import {
  obtenerSuperheroePorId,
  obtenerSuperheroesMayoresDe30,
  obtenerTodosLosSuperheroe,
  buscarSuperheroePorAtributo,
} from "../services/SuperheroesService.mjs";

import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.mjs";

export async function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroes = await obtenerSuperheroePorId(id);
  if (superheroes) {
    res.send(renderizarSuperheroe(superheroes));
  } else {
    res.status(404).send({ mensaje: "Superheroe no encontrado" });
  }
}

export async function obtenerTodosLosSuperheroeController(req, res) {
  const superheroes = await obtenerTodosLosSuperheroe();
  res.send(renderizarListaSuperheroes(superheroes));
}

export async function buscarSuperheroePorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = await buscarSuperheroePorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res
      .status(404)
      .send({ mensaje: "No se encontraron superheroes con ese atributo " });
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = await obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroes(superheroes));
}
