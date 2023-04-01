import { useState } from "react";
import { getCategories } from "../api/category";
import { Category } from "../type/category";

function useCategories() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(initialCategories);
  const [error, setError] = useState<string | null>(null);

  const fetch = async () => {
    setLoading(true);

    try {
      const resCategory = await getCategories();
      categories.map((c) => {
        const { color, count } = resCategory[c.id];
        return {
          ...c,
          count,
          color,
        };
      });
      setCategories(categories);
    } catch (e: any) {
      setError(e.name);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    categories,
    error,
    fetch,
  };
}

const initialCategories: Category[] = [
  {
    id: 1,
    title: "오늘",
    count: 0,
    color: "#1e90ff",
  },
  {
    id: 2,
    title: "예정",
    count: 0,
    color: "#1e90ff",
  },
  {
    id: 3,
    title: "전체",
    count: 0,
    color: "#1e90ff",
  },
  {
    id: 4,
    title: "깃발 표시",
    count: 0,
    color: "#1e90ff",
  },
  {
    id: 5,
    title: "완료됨",
    count: 0,
    color: "#1e90ff",
  },
  {
    id: 6,
    title: "할당",
    count: 0,
    color: "#1e90ff",
  },
];

export default useCategories;
