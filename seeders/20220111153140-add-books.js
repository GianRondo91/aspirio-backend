'use strict';

let books = [
  {
    name: "El desorden que dejas",
    description: "Raquel es una profesora de instituto que comienza a dar clase en el colegio del pueblo de la infancia de su marido. Durante sus primeros días allí descubre que la profesora a la que está sustituyendo se suicidó y decide investigar en el asunto llevándose grandes sorpresas. Sin duda, un thriller psicológico que engancha a todo aquel que lo lee. Es de Carlos Montero."
  },
  {
    name: "Cartas olor a lavanda",
    description: "Cuando Antoine y María cruzaron sus miradas en aquella floristería ninguno de los dos imaginaba la repercusión que tendría uno en la vida del otro. A través de sus cartas en el tiempo, y sus viajes y experiencias, nos enseñan como el destino une y separa a las personas, sin ninguna fuerza tan grande que nos haga olvidar a las personas que dan belleza y sentido a nuestra vida. Si eres un romántica empedernida este libro de Carmen Calero te encantará."
  },
  {
    name: "Deliciously Ella",
    description: "Si te gusta la cocina y la vida sana, este libro de recetas es perfecto para ti pues incluye más de 100 recetas libres de gluten, de lactosa y de azúcar. Es de Ella Woodward."
  },
  {
    name: "La casa de los espíritus",
    description: "Esta novela de Isabel Allende es otro de esos libros que enganchan. En él se relata la historia de una familia atravesada por tensiones sociales y espirituales, y nos ayuda a entender a la mujer en su contexto, acorde a la cultura y espacio social."
  }
]

books = books.map((book) => ({...book, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', books);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
