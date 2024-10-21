Invite someone to a Team
========================

Aims
----

- A Team owner can invite someone to join their team

Requirements
------------

- ✅ A Team owner can create an invitation
- ✅ Only available to a logged in user who owns a Team
- ✅ Creating the invitation generates a link that can be used to accept the invitation
- ✅ The link can easily be copied
- Works easily on mobile
- ✅ The invitation is for that Team
- ✅ The invitation can be used by anyone (see further requirements)
- ✅ Invitations are difficult to forge or guess


Further requirements
--------------------

- Option to create an invitation specific to one person
- Accept Page metadata shows interesting info on WhatsApp etc

Technical
---------

- Invites collection - no read or write access, so server side app only
- Id is a random id
- Accept link includes the id
- Record holds Team Id, Date Created, Date Accepted, UserId (of accepting user)