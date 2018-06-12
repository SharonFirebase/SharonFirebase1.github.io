#### Denormalizing Your Data is Normal
#### https://firebase.googleblog.com/2013/04/denormalizing-your-data-is-normal.html
### NOTE OLD BUT WORTH READING

Firebase essentially has two ways to query for data: by path and by priority. This is more limited than SQL, and there's a very good reason for that — our API is carefully designed to only allow operations we can guarantee to be fast. Firebase is a real-time and scalable backend, and we want to enable you to build great apps that can serve millions of users without compromising on responsiveness.

Firebase comes with two powerful query mechanisms which you should be familiar with. See our Data Structure and Query docs for details, but as a reminder:

You can query data by its location. You can think of the location as being a primary index (In SQL terms, ref.child('/users/{id}/') is roughly equivalent to SELECT * from users WHERE user_id={id}). Firebase automatically sorts data by location, and you can filter the results with startAt, endAt, and limit.

You can query data by its priority. Every piece of data in Firebase can be given an arbitrary priority, which you can use for whatever you want. You can think of this as a secondary index. You might, for example, store timestamps representing a user's date-of-birth as priority and then query for users born after 2000 with ref.child('users').startAt(new Date('1/1/2000').getTime()).

With these two primitives in mind, we can start thinking about how to structure your data.
