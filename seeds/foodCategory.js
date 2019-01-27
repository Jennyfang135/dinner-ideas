
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodCategory').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodCategory').insert([
        {id: 1, name: 'chicken', image: 'chicken.jpg'},
        {id: 2, name: 'beef', image: 'beef.jpg'},
        {id: 3, name: 'lamb', image: 'lambRack.jpg'},
        {id: 4, name: 'pork', image: 'pork.jpg'},
        {id: 5, name: 'seafood', image: 'seafood.jpg'},
        {id: 6, name: 'vegetables', image: 'veges.jpg'}
      ]);
    });
};
