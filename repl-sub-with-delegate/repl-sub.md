# REPLACE SUBCLASS WITH DELEGATE 

Saying: Favor a judicious mixture of composition and inheritance over either alone.
Saying2: Favor composition over inheritence.

Make the host class delegate to a seperate hierarchy for states / strategies.

In this refactoring we replace a subclasses for a given superclass with a separate hierarchy of classes. The original superclass then delegates to these
seperate hierarchy of classes for a tightly scoped set of functionality.

