Secure score recording
======================

Aims
----

- Prevent players recording false scores

Problems
--------

- Can send a fake score recording request
- Can intercept a genuine score recording request and change it

Possibilities
-------------

- Game requests server to generate random starting position
- Send answer and server marks it
- Game can store pure code for generating and marking that server can safely execute
  - Sandbox on server - see https://healeycodes.com/sandboxing-javascript-code 
  - Parse very limited subset of JS - (prob not)
- Easier execution for server side code, so any proj can do it without complex deployment