function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  
  this.subject = subjectName;
}
    
Student.prototype.addMark = function (mark) {
    this.mark = mark;
    if (this.marks === undefined) {
      this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...markN) {
    if (this.marks === undefined) {
      this.marks = [...markN];
    } else {
      this.marks.push(...markN);
    }
}
  
Student.prototype.getAverage = function () {
  if(this.marks === undefined){
    return 0;
  } 
    let sum = 0;
    for(i = 0; i < this.marks.length; i++){
      sum = sum + this.marks[i];
    }
    return sum / this.marks.length;
}


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}



// ваш код для остальных методов