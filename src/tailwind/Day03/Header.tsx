import { UserOutlined } from "@ant-design/icons";

function Header() {
  return (
    <header className="py-2 px-4 bg-orange-200 text-orange-600 font-semibold">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex flex-row items-center gap-4">
          <a href="#" className="hover:text-orange-700">
            About
          </a>
          <a href="#" className="hover:text-orange-700">
            Store
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded cursor-pointer">
            Settings
          </button>
          <UserOutlined />
        </div>
      </div>
    </header>
  );
}

export default Header;
