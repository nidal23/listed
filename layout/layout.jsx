const Layout = ({ children }) => {
  return (
    <div className=" m-auto h-screen bg-slate-50 rounded-md  grid lg:grid-cols-5 md:grid-cols-2">
      <div className="bg-black flex justify-center items-center text-white font-bold text-3xl lg:col-span-2 md:col-span-0">
        Board.
      </div>
      <div className="right flex flex-col justify-center items-center bg-slate-50 lg:col-span-3 md:col-span-1">
        <div className="text-center py-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
