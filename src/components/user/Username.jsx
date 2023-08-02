import { useSelector } from "react-redux";
import { getUsername } from "../../app/features/userSlice";

function Username() {

  const username = useSelector(getUsername);

  if (!username) return null;

  return (
    <div className="font-semibold uppercase text-sm">
      {username}
    </div>
  )
}

export default Username