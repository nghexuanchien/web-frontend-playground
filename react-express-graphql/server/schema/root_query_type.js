// const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const SongType = require('./song_type');
const LyricType = require('./lyric_type');
// const Lyric = mongoose.model('lyric');
// const Song = mongoose.model('song');
const dao = require('../dao')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return dao.all('SELECT * FROM Song')
      }
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return dao.get('SELECT * FROM Song WHERE id = ? ', [id])
      }
    },
    lyric: {
      type: LyricType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return dao.get('SELECT * FROM Lyric WHERE id = ? ', [id])
      }
    }
  })
});

module.exports = RootQuery;
