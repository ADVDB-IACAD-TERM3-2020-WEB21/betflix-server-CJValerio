// TODO: Import Mongoose here
var mongoose = require('mongoose');
// TODO: Connect to mongo here
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// TODO: Replace `{}` with actual Movie model
var model = mongoose.model('Movie', new mongoose.Schema({
  title: String
}))

const Movie = model

const getMovieList = async () => {
  return await Movie.find({})
}

const resolvers = {
    Query: {
      movies: async () =>  {
        const movieList = await getMovieList()
        return movieList
      }
    },
  };
  
export default resolvers;