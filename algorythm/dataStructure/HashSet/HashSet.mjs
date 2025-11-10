import { HashTable } from "../HashTable/HashTable.mjs";

class HashSet {
  constructor() {
    this.HashTable = new HashTable();
  }

  add(data) {
    if (this.HashTable.get(data) === null) {
      this.HashTable.set(data, -1);
    }
  }

  isContain(data) {
    return this.HashTable.get(data) !== null;
  }

  remove(data) {
    this.HashTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.HashTable.arr.length; i++) {
      this.HashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;

    for (let i = 0; i < this.HashTable.arr.length; i++) {
      if (this.HashTable.arr[i].count > 0) {
        empty = false;
        break;
      }
    }

    return empty;
  }

  printAll() {
    for (let i = 0; i < this.HashTable.arr.length; i++) {
      let currentNode = this.HashTable.arr[i].head;

      while (currentNode !== null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };
