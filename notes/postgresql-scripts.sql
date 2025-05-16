
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

/* UPDATE */
UPDATE employees
SET country = 'USA';

/*UPDATE with DEFAULT*/ 
UPDATE employees
SET fax = DEFAULT;

/*UPDATE with WHERE*/ 
UPDATE table_name
SET column_name_1 = <value_1>,
    column_name_n = <value_n>
WHERE <conditions>;

UPDATE employees
SET reports_to = 'Fibber McGee'
WHERE reports_to = 'Willie Lyons';

/*multiple*/
UPDATE employees
SET job_title = 'Chemical Engineer II', city = 'Lawrenceville'
WHERE job_title = 'Chemical Engineer' AND city = 'Trenton';

/*DELETE*/
DELETE FROM <table_name>
WHERE <conditions>

SELECT * FROM employees
WHERE job_title = 'VP Sales' AND reports_to <> 'Adele Gonzalez';

DELETE FROM employees
WHERE job_title = 'VP Sales' AND reports_to <> 'Adele Gonzalez';

/*TRUNCATE TABLE*/
-- TRUNCATE TABLE removes all rows in the table without scanning every row,
--  unlike the DELETE statement.
TRUNCATE TABLE <table_name>;

TRUNCATE TABLE products;

/*multiple*/
TRUNCATE TABLE <table_name_1>, <table_name_2>, …;
TRUNCATE TABLE articles, employees;

/* Joining tables */ 
SELECT <columns>
FROM <table1>
  JOIN <table2>
  ON <related columns>;

  /* example joining tables including selected columns*/
  -- It is also recommended that all column names be qualified with the table name; that is, `employees.salary` rather than just `salary`.
SELECT
  departments.department_id,
  departments.department_name,
  employees.first_name,
  employees.last_name,
  employees.salary
FROM
  departments
  JOIN employees
  ON departments.manager = employees.employee_id;

  -- Create table aliases
  SELECT
  d.department_id,
  d.department_name,
  e.first_name,
  e.last_name,
  e.salary
FROM
  departments d -- Create alias `d` for the `departments` table
  JOIN employees e -- Create alias `e` for the `employees` table
  ON d.manager = e.employee_id;

  /*Left Join Example*/ 
  SELECT
  d.department_id AS id,
  d.department_name AS department,
  e.first_name,
  e.last_name
FROM
  departments d
  JOIN -- Recall that the default `JOIN` type is an `INNER JOIN`
  employees e
  ON d.manager = e.employee_id;

/*Right Join Example*/ 
  SELECT
  e.first_name AS manager_first_name,
  e.last_name AS manager_last_name,
  d.department_id AS id,
  d.department_name AS department
FROM
  departments d
  RIGHT JOIN -- Specify `RIGHT JOIN` as the clause
  employees e
  ON d.manager = e.employee_id;

  /*Full Join */
  SELECT
  d.department_id AS id,
  d.department_name AS department,
  e.first_name,
  e.last_name
FROM
  departments d
  FULL JOIN -- Specify `FULL JOIN` here
  employees e
  on d.manager = e.employee_id;