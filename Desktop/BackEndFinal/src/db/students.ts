// src/db/students.ts

export interface Student {
    username: string;
    password: string;
    fullName: string;
    favoriteBook: string;
  }
  
  export const students: Student[] = [
    {
      username: "ana.t",
      password: "libro123",
      fullName: "Ana Torres",
      favoriteBook: "Cien Años de Soledad",
    },
    {
      username: "marco.r",
      password: "lectura456",
      fullName: "Marco Ramírez",
      favoriteBook: "El Principito",
    },
    {
      username: "sofia.m",
      password: "novela789",
      fullName: "Sofía Morales",
      favoriteBook: "Orgullo y Prejuicio",
    },
  ];
  