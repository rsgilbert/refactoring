# ENCAPSULATE RECORD

Wrap a record data structure into a class. All
accesses and modifications will go through methods on the class.

We can then make accesses to raw data return a deep clone of the data.

We can also apply this strategy to data that is deeply nested thereby providing easy-to-use update and accessor functions.
