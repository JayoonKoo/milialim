function getMyList() {
  return new Promise<ResMyList[]>((resolve, reject) => {
    try {
      const mylist = MyListRepo.getMyList();
      resolve(mylist);
    } catch (e) {
      reject(e);
    }
  });
}

export default getMyList;

class MyListRepo {
  static MY_LIST_KEY = "myList";

  static getMyList(): ResMyList[] {
    const myListStr = localStorage.getItem(this.MY_LIST_KEY);

    if (!myListStr) {
      localStorage.setItem(this.MY_LIST_KEY, JSON.stringify([]));
      return [];
    }

    try {
      const myList = JSON.parse(myListStr) as ResMyList[];
      return myList;
    } catch (e: any) {
      if (e.name === "SyntaxError") {
        throw new Error("Parsing Error");
      }
      throw e;
    }
  }
}

export type ResMyList = {
  id: number;
  color: string;
  title: string;
  count: number;
};
