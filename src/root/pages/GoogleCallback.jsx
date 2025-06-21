import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { getAccount, getCurrentUser, saveUserToDb } from "../../appwrite/auth";
import { avatars } from "../../appwrite/config";


export default function GoogleCallback() {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuthContext();

  useEffect(() => {
    let isMounted = true;

    const setupGoogleUser = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const accountData = await getAccount();
        const existingUser = await getCurrentUser();

        if (!existingUser && isMounted) {
          const avatarUrl = avatars.getInitials(accountData.name);
          await saveUserToDb({
            name: accountData.name,
            accountId: accountData.$id,
            email: accountData.email,
            imageUrl: avatarUrl,
          });
        }

        if (isMounted) {
          setUser({
            id: accountData.$id,
            name: accountData.name,
            email: accountData.email,
            imageUrl: accountData.imageUrl || "",
          });
          setIsAuthenticated(true);
          navigate("/");
        }
      } catch (err) {
        console.log(err);
        if (isMounted) navigate("/sign-in");
      }
    };

    setupGoogleUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <p className="text-center font-[18px]">Signing you in with Google...</p>
    </div>
  );
}

