const Sideright = () => {
  return (
    <aside className="ps-16 py-8 max-xl:py-4 w-full max-w-[319px]">
      <div className="flex flex-col">
        {/* switch account */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-x-3">
            <img
              src="/profile.jpg"
              alt="profile"
              width={44}
              height={44}
              className="w-[44px] h-[44px] object-cover rounded-full"
            />
            <h6 className="text-xs font-bold tracking-tighter">433</h6>
          </div>

          <button type="button" className="font-normal text-[#0095f6] text-xs">
            Switch
          </button>
        </div>

        {/* Suggested for you */}
        <div></div>
      </div>
    </aside>
  );
};

export default Sideright;
