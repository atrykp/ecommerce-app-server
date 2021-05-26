import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Michael Smalec",
    email: "mich@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ewa Tryr",
    email: "tyrury@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
