/*
 * Laboratorio — Listado de personas
 * Archivo: src/controllers/personaController.js
 * Tu tarea (paso 7): leer las personas y enviarlas a la vista.
 * Guía: README.md
 */

const Persona = require("../models/persona");

async function listarPersonas(req, res) {
  const personas = await Persona.find()
    .sort({ apellido: 1, nombre: 1 })
    .lean();

  res.render("personas/index", {
    titulo: "Listado de personas",
    personas: personas,
  });
}

module.exports = { listarPersonas };