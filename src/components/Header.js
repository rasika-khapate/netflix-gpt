const Header = () => {
  return (
    <>
      <div className="w-full flex justify-around items-center absolute">
        <div>
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
            className="w-48 bg-gradient-to-t from-black"
          />
        </div>
        <div className="flex gap-4 ">
          <select className="px-4 py-1 rounded-lg border-2 border-white bg-transparent text-white ">
            <option className="text-black">English</option>
            <option className="text-black">हिन्दी</option>
          </select>
          <button className="bg-red-600 text-white px-4 py-1 rounded-lg font-semibold">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
