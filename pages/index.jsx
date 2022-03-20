import { useAuth } from "../context/AuthContext";
import Auth from "../components/Auth";
import { AiOutlineLogout } from "react-icons/ai";
import Loading from "../components/Loading";
import Questions from "../components/Questions";

export default function Home() {
  const { loading, isAuth, signOutUser } = useAuth();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col overflow-y-auto overflow-x-hidden text-slate-200 items-center bg-black w-screen min-h-screen justify-center">
      {isAuth && (
        <AiOutlineLogout
          onClick={signOutUser}
          color="#ff3526"
          size={25}
          className="absolute top-6 right-6 cursor-pointer"
        />
      )}
      {isAuth ? <Questions /> : <Auth />}
    </div>
  );
}
