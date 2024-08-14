const Badge = ({ total }: { total: number }) => {
  return (
    <div className="z-10 absolute -top-1.5 left-2.5 h-[22px] w-[22px] rounded-full bg-[#ff3040]">
      <span className="text-[10px] font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {total >= 10 ? "9+" : total}
      </span>
    </div>
  );
};

export default Badge;
