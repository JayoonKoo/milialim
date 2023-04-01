export function getCategories() {
  const CATEGORY_KEY = "categories";

  return new Promise<ResCategory>((resolve, reject) => {
    const categoriesStr = localStorage.getItem(CATEGORY_KEY);

    if (!categoriesStr) {
      localStorage.setItem(CATEGORY_KEY, JSON.stringify(initialCategory));
      resolve(initialCategory);
      return;
    }

    try {
      const categories = JSON.parse(categoriesStr);
      resolve(categories);
    } catch (e: any) {
      if (e.name === "SyntaxError") {
        reject({
          message: "Parsing Error",
        });
      }
    }
  });
}

type ResCategory = {
  [key: number]: number;
};

const initialCategory = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
