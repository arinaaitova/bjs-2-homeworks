function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

}


Student.prototype.setSubject = function (subjectName) {
this.subjectName = subjectName;
}
Student.prototype.addMark = function (mark) {
  this.mark = mark;
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }

}
Student.prototype.addMarks = function(...mark) {
  this.mark = mark;
}
Student.prototype.getAverage = function () {
  this.average = average;
}
Student.prototype.exclude = function (reason) {
delete Student.subject;
delete Student.marks;
this.reason = reason;
}