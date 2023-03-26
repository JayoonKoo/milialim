import { Category } from "../type/category";

export function getCategories() {
  return new Promise<Category[]>((resolve, reject) => {
    const categoriesStr = localStorage.getItem("categories");

    if (!categoriesStr) {
      resolve([]);
      return;
    }

    try {
      const categories = JSON.parse(categoriesStr);
      resolve(categories as Category[]);
    } catch (e: any) {
      if (e.name === "SyntaxError") {
        reject({
          message: "Parsing Error",
        });
      }
    }
  });
}
