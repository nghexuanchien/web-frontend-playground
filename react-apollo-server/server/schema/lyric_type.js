const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;

const dao = require('../db/dao')

const LyricType = new GraphQLObjectType({
  name:  'LyricType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: require('./song_type'),
      resolve(parentValue) {
        return dao.get('SELECT * FROM Lyric WHERE id = ?', [parentValue.id])
            .then((lyric) => {
              return dao.get('SELECT * FROM Song WHERE id = ? ', [lyric.song_id])
            })
      }
    }
  })
});

module.exports = LyricType;
