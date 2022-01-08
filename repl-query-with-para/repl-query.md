# REPLACE QUERY WITH PARAMETER

Move the responsibility of determining the value for a given variable used by a function out of the
function's body by making the variable a parameter that must be provided by the callers.
This makes the function not dependent on the code/function that determines the value of this variable. If the code that determines this variable does not provide referential transparency, making the variable a parameter helps to achieve referential transparency.
