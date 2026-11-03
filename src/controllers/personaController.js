/*
 * Laboratorio — Listado de personas
 * Archivo: src/controllers/personaController.js
 * Tu tarea (paso 7): leer las personas y enviarlas a la vista.
 * Guía: README.md
 */

const Persona = require("../models/persona");

async function listarPersonas(req, res) {
  // TODO (paso 7): consulta con Persona.find(), ordena y usa .lean().
  // Renderiza "personas/index" y envía { titulo: "Listado de personas", personas }.
  // Borra el throw cuando el render esté escrito.
  throw new Error(
    'TODO pendiente (paso 7): en src/controllers/personaController.js consulta Persona.find() y haz res.render("personas/index", { titulo, personas }). Elimina este throw.'
  );
}

module.exports = { listarPersonas };
