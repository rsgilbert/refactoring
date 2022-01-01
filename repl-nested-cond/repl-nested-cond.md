# REPLACE NESTED CONDITIONAL WITH GUARD CLAUSES

I think it should be called: Replace Unusual conditional with Guard Clause.

Replace a conditional which has an if and else leg with 
a guard clause. This is done when the condition is an unusual condition, that is, one leg is normal and the other leg indicates
an unusual condition that is not core to the function.

The guard clause consists of a single if statement that
checks for the unusual conditional and returns, possibly with a result.

Many times the unusual condition is in the else branch (which may be absent). When the unusual condition is in the else branch, we have to 
reverse the condition when creating a guard clause. This was suggested by Joshua Kerievsky.