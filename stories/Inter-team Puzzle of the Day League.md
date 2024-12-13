Inter-team Puzzle of the Day League
===================================

Aims
----

- Create a competition between teams over Puzzle of the Day

Competition rules
-----------------

- Various measures from a teams POTD activity can be used:
  - Highest score of any player
  - Total highest score of all players
  - Number of players entering
  - Average highest score of all players
- A Team is only entered on a particular day if at least two players play that days puzzle
- Only each player's highest score for the POTD, on the day, is used
- The day is midnight-midnight GMT
- There is a league for each day, each week, each month and each year

Requirements
------------

- Can view a league for each period with all the measures in columns
- Can change order of the league to each measure
- Menu page with current day, week, month, year
- Menu page with all days/weeks/months/years
- Ability to introduce further comparisons, such as between periods, and positions at certain dates in a period

Stage 1 - Calculation on request
--------------------------------

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



Stage 2 - Cached calculations
-----------------------------

- Write each result to file in storage id'ed by date - or a db record?
- Check for file before recalculating
- Calculate the period data at end of each day for that day
- Calculate a new period so far data set for week, month, year


Test data needed
----------------

- 5 teams
- 5 days