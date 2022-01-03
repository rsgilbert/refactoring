# SEPARATE QUERY FROM MODIFIER

If a function returns a value but also has observable side effects such 
as making modifications to data, break it down into two functions, one function to do the querying and then return data (query) and another function to do the side effects or modifications (modifier).