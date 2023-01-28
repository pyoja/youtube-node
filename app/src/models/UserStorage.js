"use strict";

const { router } = require("../../app");

class UserStorage {
  static #users = {
    id: ["aaa", "bbb"],
    pw: ["aaa", "bbb"],
    name: ["에이", "비비"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
