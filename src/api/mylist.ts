import { IconType } from "../components/atom/Icon/Icon";
import { v4 as uuid4 } from "uuid";

// 나의 리스트 가져오기
export type ResMyList = {
  id: string;
  color: string;
  title: string;
  count: number;
  icon: IconType;
};
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

// 나의 리스트 추가하기
export type addMyListReq = {
  title: string;
  icon: IconType;
  color: string;
};
export function addMyList(req: addMyListReq) {
  return new Promise<ResMyList>((resolve, reject) => {
    try {
      const addedMyList = MyListRepo.addMyList(req);
      resolve(addedMyList);
    } catch (e) {
      reject(e);
    }
  });
}

export default getMyList;

// MyListRepo
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

  static addMyList(req: addMyListReq) {
    const newMyListItem: ResMyList = {
      id: uuid4(),
      color: req.color,
      count: 0,
      icon: req.icon,
      title: req.title,
    };
    try {
      const myList = MyListRepo.getMyList();
      myList.push(newMyListItem);
      localStorage.setItem(this.MY_LIST_KEY, JSON.stringify(myList));
      return newMyListItem;
    } catch (e: any) {
      throw e;
    }
  }
}
