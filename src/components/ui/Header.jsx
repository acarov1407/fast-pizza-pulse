import { Link } from "react-router-dom"
import Username from "../user/Username";
import SearchOrder from "../order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-400 py-2">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between container mx-auto items-center h-full">
        <Link
          className="text-gray-700 uppercase tracking-widest flex items-center"
          to='/'>
          <img src="/app_logo.png" alt="app logo" width={50} height={50} />
          <span>Fast Pizza Pulse</span>
        </Link>
        <SearchOrder />
        <Username />
      </div>

    </header>
  )
}

export default Header