// Task 1: Exam Result Grading System with Bonus Marks
// Description:
// Write a program that:

// Takes total marks and attendance percentage as input.

// If marks ≥ 90 → Grade A, 80–89 → Grade B, 70–79 → Grade C, else Fail.

// If attendance is above 95%, give 5 bonus marks before grading.

// If marks are less than 35 even after bonus → print "Fail – Needs Improvement".

// Use function to check attendance, and grading.

function examResult(subjects, attendance) {
  let total = 0;

  for (let i = 0; i < subjects.length; i++) {
    total += subjects[i];
  }

  let average = total / subjects.length;

  if (attendance > 95) {
    average += 5;
  }

  if (
    subjects[0] <= 35 ||
    subjects[1] <= 35 ||
    subjects[2] <= 35 ||
    subjects[3] <= 35 ||
    subjects[4] <= 35
  ) {
    console.log("Fail - Needs Improvement");
  } else {
    if (average >= 90) {
      console.log("Grade A");
    } else if (average >= 80) {
      console.log("Grade B");
    } else if (average >= 70) {
      console.log("Grade C");
    } else {
      console.log("Fail");
    }
  }
  console.log("Total Marks: " + total);
  console.log("Average: " + average);
}

examResult([88, 92, 95, 100, 85], 96);
