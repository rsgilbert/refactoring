# REPLACE SUPERCLASS WITH DELEGATE

Formerly: Replace Inheritance with Delegation.

Remove inheritance between two classes by making the Superclass a
delegate object accesible through a field created on the subclass. 

The subclass will continue to support the
interface of the superclass through delegate methods created on the subclass that
delegate responsibility to the original superclass that is now a delegate object created as a field on the subclass.

This refactoring shifts the role of the superclass to that of a component on the subclass.