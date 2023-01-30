"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, pw } = await UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && pw === client.pw) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호 틀림" };
    }
    return { success: false, msg: "존재하지 않는 아이디" };
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = User;
