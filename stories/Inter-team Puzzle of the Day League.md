Inter-team Puzzle of the Day League
===================================

Aims
----

- Create a competition between teams over Puzzle of the Day

Competition rules
-----------------

- ✅ Various measures from a teams POTD activity can be used:
  - ✅ Highest score of any player
  - ✅ Total highest score of all players
  - ✅ Number of players entering
  - ✅ Average highest score of all players
- ✅ A Team is only entered on a particular day if at least two players play that days puzzle
- ✅ Only each player's highest score for the POTD, on the day, is used
- ✅ The day is midnight-midnight GMT

Requirements - Day only
--------------------

- ✅ Can view a league for each day with all the measures in columns
- ✅ Can change order of the league to each measure
- ✅ Shows which order it is in
- ✅ Selector for current day
- ✅ Shows latest day initially

Requirements - Further
--------------------
- There is a league for each day, each week, each month and each year
- Can view a league for each period with all the measures in columns
- Can change order of the league to each measure
- Menu page with current day, week, month, year
- Menu page with all days/weeks/months/years
- Ability to introduce further comparisons, such as between periods, and positions at certain dates in a period



Calculation flow
----------------

- Select game plays for the previous day's POTD, during that day
- Group by player
- Find high score of each player - store with team id
- Group high scores by team
- For each team group get Max, Count, Sum, Average
- Create a record for each team group with TeamId and numbers
- Filter for min players
- Send a league as list of team + array of numbers - sort on the client



Cached calculations
-----------------------------

- Use CDN caching for each selection
- Write intermediate results to files in storage



Test data needed
----------------

- 5 teams
- 5 days