const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const LyricType = require('./lyric_type');
const dao = require('../db/dao')

const SongType = new GraphQLObjectType({
  name:  'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        return dao.all('SELECT * FROM Lyric WHERE song_id = ? ', [parentValue.id])
      }
    }
  })
});

module.exports = SongType;
