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
  [key: number]: {
    count: number;
    color: string;
  };
};

const initialCategory = {
  1: {
    count: 0,
    color: "#1e90ff",
  },
  2: {
    count: 0,
    color: "#1e90ff",
  },
  3: {
    count: 0,
    color: "#1e90ff",
  },
  4: {
    count: 0,
    color: "#1e90ff",
  },
  5: {
    count: 0,
    color: "#1e90ff",
  },
  6: {
    count: 0,
    color: "#1e90ff",
  },
};
