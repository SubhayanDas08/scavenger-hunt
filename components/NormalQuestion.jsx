import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, updateDoc, increment, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function NormalQuestion({ question, difficulty, totalQue, points, answer, qn }) {
  const { questionsNum, setQuestionsNum } = useAuth();
  const [inputVal, setInputVal] = useState("");
  const { user, loading } = useAuth();

  useEffect(() => {
    const getDataFromCloud = async () => {
      const AnsDocRef = doc(db, "users", user.uid);
      const res = await getDoc(AnsDocRef);
      const data = res.data();
      if (!data?.score && !loading) {
        await updateDoc(AnsDocRef, { score: 0 });
      }
      if (!data?.qNum && !loading) {
        await updateDoc(AnsDocRef, { qNum: 0 });
      }
    };
    getDataFromCloud().then();
  }, []);

  return (
    <>
      <p className="w-full mx-2">Riddle {qn} / 4 </p>
      <div className="rounded-xl w-full bg-gray-900 py-2 px-4 mt-2 border border-slate-800 text-slate-300 overflow-x-hidden text-lg">
        {question}
      </div>
      <div className="text-slate-500 text-sm p-4">Difficulty: {difficulty}</div>
      <div className="mt-8 text-md text-slate-300 ">
        <p className="w-full mx-2">Answer</p>
        <input
          type="text"
          onChange={(e) => setInputVal(e.target.value)}
          className="w-full rounded-lg bg-slate-900 mt-4 h-12 p-4 focus:ring-1 focus:ring-slate-700 focus:outline-none"
        />
      </div>
      <div className="flex w-full justify-center mt-8">
        <button
          onClick={async (e) => {
            if (
              !e.target.className.split(" ").includes("cursor-not-allowed") ||
              totalQue > questionsNum ||
              user
            ) {
              setQuestionsNum(questionsNum + 1);
              const AnsDocRef = doc(db, "users", user.uid);
              await updateDoc(AnsDocRef, {
                qNum: increment(1),
              });

              async function saveScore(isCorrect) {
                const AnsDocRef = doc(db, "users", user.uid);
                const res = await getDoc(AnsDocRef);
                const data = res.data();
                return updateDoc(AnsDocRef, {
                  score: isCorrect ? data.score + points : data.score,
                });
              }
              const input = inputVal.toLowerCase().trim();
              if (answer.includes(input)) {
                await saveScore(true);
              } else {
                await saveScore(false);
              }
            }
          }}
          className={`${
            inputVal === "" ? "cursor-not-allowed" : ""
          } text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          Next
        </button>
      </div>
    </>
  );
}
