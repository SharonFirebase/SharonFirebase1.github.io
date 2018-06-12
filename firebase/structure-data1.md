#### What's the best way of structuring data on firebase?
#### https://stackoverflow.com/questions/16421179/whats-the-best-way-of-structuring-data-on-firebase?rq=1

UPDATE: There is now a doc on structuring data. Also, see this excellent post on NoSQL data structures.

The main issue with hierarchical data, as opposed to RDBMS, is that it's tempting to nest data because we can. Generally, you want to normalize data to some extent (just as you would do with SQL) despite the lack of join statements and queries.

You also want to denormalize in places where read efficiency is a concern. This is a technique used by all the large scale apps (e.g. Twitter and Facebook) and although it goes against our DRY principles, it's generally a necessary feature of scalable apps.

The gist here is that you want to work hard on writes to make reads easy. Keep logical components that are read separately separate (e.g. for chat rooms, don't put the messages, meta info about the rooms, and lists of members all in the same place, if you want to be able to iterate the groups later).

The primary difference between Firebase's real-time data and a SQL environment is querying data. There's no simple way to say "SELECT USERS WHERE X = Y", because of the real-time nature of the data (it's constantly changing, sharding, reconciling, etc, which requires a simpler internal model to keep the synchronized clients in check)

A simple example will probably set you in the right state of mind, so here goes:
/users/uid
/users/uid/email
/users/uid/messages
/users/uid/widgets
Now, since we're in a hierarchical structure, if I want to iterate users' email addresses, I do something like this:

// I could also use on('child_added') here to great success
// but this is simpler for an example
        firebaseRef.child('users').once('value')
        .then(userPathSnapshot => {
           userPathSnapshot.forEach(
              userSnap => console.log('email', userSnap.val().email)
           );
        })
        .catch(e => console.error(e));
The problem with this approach is that I have just forced the client to download all of the users' messages and widgets too. No biggie if none of those things number in thousands. But a big deal for 10k users with upwards of 5k messages each.

So now the optimal strategy for a hierarchical, real-time structure becomes more obvious:

        /user_meta/uid/email
        /messages/uid/...
        /widgets/uid/...
An additional tool which is extremely useful in this environment are indices. By creating an index of users with certain attributes, I can quickly simulate a SQL query by simply iterating the index:

/users_with_gmail_accounts/uid/email
Now if I want to, say, get messages for gmail users, I can do something like this:

        var ref = firebase.database().ref('users_with_gmail_accounts');
        ref.once('value').then(idx_snap => {
           idx_snap.forEach(idx_entry => {
               let msg = idx_entry.name() + ' has a new message!';
               firebase.database().ref('messages').child(idx_entry.name())
                  .on(
                     'child_added', 
                     ss => console.log(msg, ss.key);
                  );
           });
        })
        .catch(e => console.error(e));
I offered some details in another SO post about denormalizing data, so check those out as well. I see that Frank already posted Anant's article, so I won't reiterate that here, but it's also a great read.
