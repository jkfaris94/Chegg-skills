
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

/*Satisfying two conditions with AND*/
SELECT product_name, aisle, department
FROM products
WHERE department = 'bakery'
AND aisle = 'bakery desserts';

/*Satisfying two conditions with OR*/
SELECT product_name, aisle, department
FROM products
WHERE department = 'bakery'
OR aisle = 'bakery desserts';

/* Stacking conditions with AND and comparison operators */
SELECT product_name, price
FROM products
WHERE department = 'beverages'
AND aisle = 'tea';

SELECT product_name, price
FROM products
WHERE department = 'beverages'
AND aisle = 'tea'
AND price < 15
AND price > 10;


/*  Add the DISTINCT operator to the query to remove duplicates from the results. */
SELECT DISTINCT aisle
FROM products;

SELECT DISTINCT aisle
FROM products
WHERE department = 'beverages';

/* you can count the number of rows that have distinct aisles by using the count() aggregate function and DISTINCT: */
SELECT count(DISTINCT aisle)
FROM products;

/*LIKE*/
SELECT product_name, price
FROM products
WHERE department = 'beverages'
AND aisle = 'tea'
AND price < 15
AND price > 10
AND product_name LIKE '%Raspberry%';

/*ORDER BY*/
SELECT product_name, price
FROM products
WHERE department = 'pets'
ORDER BY price;

/*DESC */
SELECT product_name, price
FROM products
WHERE department = 'pets'
ORDER BY price DESC;

/* GROUP BY */
SELECT department, count(*)
FROM products
GROUP BY department;

                            /* Aggregate functions */
 /* sum() */
 SELECT department, sum(price)
FROM products
GROUP BY department;

/* min(), max(), and avg() */
SELECT department, count(*), sum(price), min(price), max(price), avg(price)
FROM products
GROUP BY department
ORDER BY department;