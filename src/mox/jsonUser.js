import { action, observable, makeAutoObservable } from "mobx";
import axios from "axios";

class Store {
  userList = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {
      userList: observable,
      loading: observable,
      fetchApi: action,
      deletePart: action
    });
  }

  async fetchApi() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.userList = data;
    this.loading = false;
  }

  deletePart() {
    this.userList = this.userList.slice(3);
  }
}

export default Store;
