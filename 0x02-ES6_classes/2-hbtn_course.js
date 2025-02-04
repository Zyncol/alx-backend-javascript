/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new  HolbertonCourse
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Getting the name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Seting the name of course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Getting the length of course
   */
  get length() {
    return this._length;
  }

  /**
   * Setting the length of course
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Getting the names of students in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Setting the names of students in the course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
