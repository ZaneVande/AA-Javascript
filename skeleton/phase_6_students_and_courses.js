function Student (first_name, last_name) {
    this.firstname = first_name
    this.lastname = last_name
    this.courses = []
}

Student.prototype.name = function() {
    return (this.firstname + this.lastname);
}

Student.prototype.enroll = function(course) {
    if (!this.courses.includes(course)) {
        this.courses.forEach(crs => {
            if (crs.conflictsWith(course)) {
                throw "Course conflict";
            }
        });
        this.courses.push(course);
        course.addStudent(this);
    }
}

Student.prototype.courseLoad = function () {
    const courseLoad = {};
  
    this.courses.forEach(course => {
      let dpt = course.department;
      courseLoad[dpt] = courseLoad[dpt] || 0;
      courseLoad[dpt] += course.credits;
    });
  
    return courseLoad;
  };
  
  function Course (name, department, credits, days, block) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.days = days;
    this.block = block;
    this.students = [];
  }
  
  Course.prototype.addStudent = function (student) {
    if (this.students.indexOf(student) === -1) {
      this.students.push(student);
      student.enroll(this);
    }
  };
  
  Course.prototype.conflictsWith = function (other) {
    if (this.block !== other.block) { return false; }
  
    return this.days.some(day => other.days.indexOf(day) !== -1 );
  };