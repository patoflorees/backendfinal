
import { students } from "../db/students";

export function authenticate(username: string, password: string) {
  const student = students.find(
    (s) => s.username === username && s.password === password
  );

  if (!student) {
    return null;
  }

  return {
    fullName: student.fullName,
    favoriteBook: student.favoriteBook,
  };
}
