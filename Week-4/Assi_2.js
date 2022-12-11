class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  
  class Student extends Person {
    constructor(name, age, gender, subject) {
      super(name, age, gender);
      this.subject = subject;
    }
  
    learn() {
      return `${this.name} is now learning ${this.subject}`;
    }
  }
  
  const teacher = new Student("Harsh", 22, "Male", "Javascript");
  
  console.log(teacher.learn());