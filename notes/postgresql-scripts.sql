
/*basic syntax of the SELECT statement can be seen below:*/
SELECT title, abstract
FROM articles;

SELECT title
FROM articles;


/*To narrow the query results of a SELECT statement, 
use the WHERE clause to specify a condition. The basic syntax can be seen below:*/
SELECT <column list>
FROM <table name>
WHERE <conditions>;

/*example:*/
SELECT title
FROM articles
WHERE author='Dwight Schrute';

/*Run the following code to find all articles where the body field is NULL: */

SELECT title
FROM articles
WHERE body IS NULL;

/*IS DISTINCT FROM works like an ordinary inequality operator <>, except that it always returns either TRUE or FALSE*/

SELECT *
FROM articles
WHERE body IS NOT DISTINCT FROM NULL;