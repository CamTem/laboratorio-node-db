/*
 * Laboratorio — Listado de personas
 * Archivo: src/models/persona.js
 * Tu tarea (paso 6): describir el documento Persona y exportar el modelo.
 * La colección en MongoDB se llama personas.
 * Guía: README.md
 */

const mongoose = require("mongoose");

// TODO (paso 6): crea personaSchema con nombre, apellido, edad y correo.
// Exporta mongoose.model("Persona", personaSchema) y borra el objeto de abajo.

module.exports = {
  find() {
    throw new Error(
      'TODO pendiente (paso 6): en src/models/persona.js crea el esquema y exporta mongoose.model("Persona", personaSchema). Borra este objeto provisional.'
    );
  },
};
