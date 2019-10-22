const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
// const mongoose = require('mongoose');
// const Song = mongoose.model('song');
// const Lyric = mongoose.model('lyric');
const SongType = require('./song_type');
const LyricType = require('./lyric_type');
const dao = require('../dao')

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
        // return Song.addLyric(songId, content);
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
        // return Lyric.like(id);
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
        // return Song.remove({ _id: id });
        return dao.save('DELETE FROM Song WHERE id = ?', [id])
      }
    }
  }
});

module.exports = mutation;
