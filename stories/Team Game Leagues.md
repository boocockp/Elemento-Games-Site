Team Game Leagues
=================

Aim
---

- Competition between players in a Team on each game

Requirements
------------

- ✅ Player Game Leagues page
- ✅ Show general login page if not logged in
- ✅ Show sorry message if not in a team
- ✅ Scrolling list to left with all games
- ✅ On small screen, scrolling list is a pop-out
- ✅ No selection shows instruction panel on right
- ✅ Selection shows the league for that game
- ✅ League is a table with Player, High score, average score
- ✅ League has Team Name and Game Name at top
- ✅ No results message
- ✅ It looks nice
- ✅ URL path has game id
- ✅ Works correctly on refresh, whether logged in or not

Depends on
----------
- ✅ Game Plays are recorded with TeamId, may be null if user not in a team
- ✅ GroupBy function added - use radash group
- ✅ ForEach can be applied to an object and use $key as well as $item
- ✅ User data has to exist for every player and have display name

Technical
---------

- ✅ Server-side function to get data
- ✅ Query on GamePlays by Team Id - which needs to be added, then in memory
- ✅ Query on Users by Team Id
- ✅ Filter within results for Puzzle Id
- ✅ Group by User Id
- ✅ Map each group to average and high and lookup the user in the results to get the name
- Condense into one function once working

Setting up test data
--------------------

- ✅ Script and service account key
- ✅ Delete all test data
- ✅ Set up data for existing teams and users