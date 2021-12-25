# ENCAPSULATE COLLECTION

Provide collection modifier methods such as add and remove on the class itself so that changes to the collection go through the owning class.

Change collection getter methods to return a copy of the collection rather than a reference to the original collection, that way
users can not modify the collection without going through 
the owning class.

