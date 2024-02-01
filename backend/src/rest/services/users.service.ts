type userType = {
  id: number;
  name: string;
  password: string;
  profession: string;
};

const users: userType[] = [
  {
    name: "mahesh",
    password: "password1",
    profession: "teacher",
    id: 1,
  },
  {
    name: "suresh",
    password: "password2",
    profession: "librarian",
    id: 2,
  },
  {
    name: "ramesh",
    password: "password3",
    profession: "clerk",
    id: 3,
  },
];

function getUsers() {
  return users;
}

function addUser(user: any) {
  users.push(user);
}

export default {
  getUsers,
  addUser,
};
