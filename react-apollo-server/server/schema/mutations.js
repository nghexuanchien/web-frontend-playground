const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const SongType = require('./song_type');
const LyricType = require('./lyric_type');
const dao = require('../db/dao')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return dao.save('INSERT INTO Song(title) VALUES(?)', [title])
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
        return dao.save('INSERT INTO Lyric(likes, content, song_id) VALUES(?, ?, ?)', [0, content, songId])
            .then(()=>{
              return dao.get('SELECT * FROM Song WHERE id = ?' , [songId])
            })
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return dao.save('UPDATE Lyric SET likes = likes + 1 WHERE id = ?', [id])
            .then(() => {
              return dao.get('SELECT * FROM Lyric WHERE id = ?', [id])
            })
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return dao.save('DELETE FROM Song WHERE id = ?', [id])
      }
    }
  }
});

module.exports = mutation;
