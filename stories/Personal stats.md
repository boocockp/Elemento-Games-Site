Personal stats
==============

Aims
----

- Create the stored data that is the basis for competitions

Requirements
------------

- ✅ Store a record of each completed game
- ✅ Store date/time, game id, user id, score
- ✅ Page that shows a list of games played
- ✅ List has date/time, game name, score
- ✅ Game has a link to play the game

Technical
---------

- Firestore database
- Games collection 
- Users collection - or leave until needed?
- Game Plays collection
- ~~Server app to update and get data~~

Issues
------

- This should probably be common functionality provided by Games site
- Don't want to repeat in each game
- User Logon belongs to Games Site
- Don't want games to be able to update records on their own
- So need a way for games to report the score to the parent app
