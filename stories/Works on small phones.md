Works on small phones
=====================

Requirements
------------

- Puzzle and all controls visible without scrolling
- Use 375 x 555 as smallest viewport size likely - all iphones since 2020 larger than this

Possible changes
----------------

- ✅ Reduce whitespace around puzzle title and score/time
- ✅ Reduce size of puzzle title and score/time, only on smaller screens if poss
- ✅ Replace puzzle teams nav buttons with dropdown menu if screen narrow
- ✅ Control buttons to one line
- ✅ Round status show over puzzle
- Control buttons show icons on small screens
- Show puzzle title in Puzzle Teams app bar
- ✅ Hide bottom title if small screen
- On-screen keyboard needs to fit

Whitespace
----------

- div main has 4px margin all round
- App, app bar and main box have no whitespace
- Container has 8px padding top and bottom
- Page has 8px padding all round
- puzzle iframe has 16px top margin from page Stack
- inner div main has 4px margin all round
- inner container has 8px padding top and bottom
- inner page has 8px padding all round
- puzzle title has 16px top margin from page stack
- Top margins on page components are erratic because of hidden divs for calcs etc

So:
- Remove div main margin
- Remove container padding
- Keep page padding as looks bad without
- Get control of Stack gaps/margins
- iframe margins: height: calc(100% + 16px);
                  width: calc(100% + 8px);
                  margin-top: -8px;
                  margin-left: -4px;
                  margin-right: -4px;