import { useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";
import { API_URL } from "../../constants";
import { set } from "react-hook-form";
// import {db} from '../../firebase';
// import {collection,getDocs} from 'firebase/firestore';

function useProblems() {
  const { setProblems,setProblemLoading } = useContext(GlobalContext);
  useEffect(() => {
    // console.log("useProblems useEffect called, getting problems from backend");
    try {
      setProblemLoading(true);
      fetch(API_URL + "/getProblems").then((response) => {
        response.json().then((data) => {
          // console.log("data", data);
          setProblems(data);
        });
        setProblemLoading(false);
      });

    } catch (e) {
      console.log("Error in fetching problems from backend", e);
    }
  }, []);
}

export default useProblems;
