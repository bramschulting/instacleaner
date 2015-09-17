import config from './config';
import Instapaper from 'instapaper';
import moment from 'moment';

const client = new Instapaper(config.instapaper.key, config.instapaper.secret);
client.setUserCredentials(config.instapaper.username, config.instapaper.password);

const limit = moment().subtract(1, 'months');

client.bookmarks.list().then((res)=> {
  return res
    .filter((result)=> result.type === 'bookmark')
    .map((bookmark)=> {
      bookmark.date = moment(bookmark.time * 1000);
      return bookmark;
    });
}).then((bookmarks)=> {
  const deletePromise = [];
  bookmarks.forEach((bookmark)=> {
    if (bookmark.date.isBefore(limit)) {
      console.log('Remove: ', bookmark.title);

      deletePromise.push(client.bookmarks.delete(bookmark.bookmark_id));
    }
  });

  return Promise.all(deletePromise);
}).then(()=> {
  console.log('Done!');
});
