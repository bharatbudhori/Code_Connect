import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../../constants";

function useUserDetails(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          serverUrl + `api/getUserProfile/${username}`
        );
        setUser(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [username]);

  return { user, loading };
}

export default useUserDetails;
