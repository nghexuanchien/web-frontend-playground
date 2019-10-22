// const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
// const Lyric = mongoose.model('lyric');
const dao = require('../dao')

const LyricType = new GraphQLObjectType({
  name:  'LyricType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: require('./song_type'),
      resolve(parentValue) {
        /*return Lyric.findById(parentValue).populate('song')
          .then(lyric => {
            console.log(lyric)
            return lyric.song
          });*/
        return dao.get('SELECT * FROM Lyric WHERE id = ?', [parentValue.id])
            .then((lyric) => {
              return dao.get('SELECT * FROM Song WHERE id = ? ', [lyric.song_id])
            })
      }
    }
  })
});

module.exports = LyricType;
