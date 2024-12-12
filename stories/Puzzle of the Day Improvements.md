Puzzle of the Day Improvements
==============================

Aims
----

- Prepare the way for running with daily POTD competitions

Requirements
------------

- POTD can be set up in advance
- Clients can only see POTD from start up until the current day
- Secure against simple hacking to find future POTD

Technical
---------

- ✅ Transfer Puzzles collection to Firebase db
- ✅ Create DayPuzzles collection with date, puzzleId
- ~~Rules on DayPuzzles to allow read only if date is less than request timestamp~~
- ✅ Server function to get current Puzzle of the Day