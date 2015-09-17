# Why?

I'm a big fan of [Instapaper](instapaper.com), but I have a terrible habit of throwing way too many articles in my Instapaper, only to never read them again. As a result, my Instapaper feed is an unmaintainable list of articles that don't really interest me anymore.

Personally, my goal is to reach 'Instapaper zero', but a list of 200+ articles is not very motivating, and I end up reading nothing at all. About a week ago, I decided to throw out all the old articles I hadn't read. If I don't read something within a month, I probably don't care about it. I was left with a list of about 20 articles, and managed to get to Instapaper zero on a Sunday afternoon. I think this is what Instapaper is meant for.

Of course there are some exceptions. I have two separate folders: longreads and longwatches. Those two folders contain content that takes at least an hour to 'process'. I don't mind if that kind of content stays in my Instapaper for over a month (this script only deletes articles that are in you 'Home' folder.)

**TL;DR:** When you see a list of 200+ articles, you end up reading none.

# How to use

1. Run `npm i`
2. Create a `config.js` file

    ```
export default {
    instapaper: {
    key: '[KEY]',
    secret: '[SECRET]',
    username: '[USERNAME]',
    password: '[PASSWORD]'
    }
}
    ```

3. Run `node index.js`

Optionally you could wrap the whole thing inside a [node-cron](https://github.com/ncb000gt/node-cron) to automatically clean your list every day/week/month it.
