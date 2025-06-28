import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { getAccount, getCurrentUser, saveUserToDb } from "../../appwrite/auth";
import { avatars } from "../../appwrite/config";


export default function GoogleCallback() {
const navigate = useNavigate();
  const { setUser, setIsAuthenticated, user } = useAuthContext();

  useEffect(() => {
    const setupGoogleUser = async () => {
      try {
        const accountData = await getAccount();
        let dbUser = await getCurrentUser();

        if (!dbUser) {
          const avatarUrl = avatars.getInitials(accountData.name);
          dbUser = await saveUserToDb({
            name: accountData.name,
            accountId: accountData.$id,
            email: accountData.email,
            imageUrl: avatarUrl,
          });
        }

        setUser({
          id: dbUser.$id || accountData.$id,
          name: dbUser.name,
          email: dbUser.email,
          imageUrl: dbUser.imageUrl || "",
        });
        setIsAuthenticated(true);
        navigate(`/dashboard/${dbUser.$id || accountData.$id}`);
      } catch (err) {
        console.error("Google Sign-In Error:", err);
        navigate("/sign-in");
      }
    };

    setupGoogleUser();
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <p className="text-center font-[18px]">Signing you in with Google...</p>
    </div>
  );
}

