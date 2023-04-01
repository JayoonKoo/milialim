import { useState } from "react";
import getMyList, { ResMyList } from "../api/mylist";

function useMyList() {
  const [loading, setLoading] = useState(false);
  const [myList, setMyList] = useState<ResMyList[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetch = async () => {
    setLoading(true);

    try {
      const resMyList = await getMyList();
      setMyList(resMyList);
    } catch (e: any) {
      setError(e.name);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    myList,
    error,
    fetch,
  };
}

export default useMyList;
