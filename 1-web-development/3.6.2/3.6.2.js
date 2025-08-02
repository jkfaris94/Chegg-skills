function findLowestScoringStudent(students) {
    if (students.length === 0) {
     return null;
   }
   let lowestScoringStudent = students[0];
   for (let i = 1; i < students.length; i++) {
     if (students[i].score < lowestScoringStudent.score) {
       lowestScoringStudent = students[i];
     }
   }
 
   return lowestScoringStudent;
 }
 
 module.exports = findLowestScoringStudent;
 