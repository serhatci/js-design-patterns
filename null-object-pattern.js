// User class
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  hasAccess() {
    if (this.name === "Bob") {
      return "User has access";
    } else {
      return "User does not have access";
    }
  }
}

// Null user class for undefined data return
// This class prevents us to write many if clauses later to
// check if a user exist or not
class NullUser {
  constructor(name, id) {
    this.name = "Guest";
    this.id = -1;
  }

  hasAccess() {
    return "Guest user does not have access";
  }
}

// Some users
const users = [new User("Bob", 1), new User("John", 2)];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user === undefined) {
    return new NullUser();
  } else {
    return user;
  }
}

// User that have access
console.log(getUser(1).hasAccess());
// User that have no access
console.log(getUser(2).hasAccess());
// Guest users
console.log(getUser(3).hasAccess());
console.log(getUser(4).hasAccess());
console.log(getUser(5).hasAccess());
console.log(getUser(6).hasAccess());
