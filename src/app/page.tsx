import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Navbot from "@/components/navbot";
import Sidebar from "@/components/sidebar";
import Sideright from "@/components/sideright";

const Page = () => {
  return (
    <main className="min-h-screen flex">
      {/* max-md:hidden */}
      <Sidebar />

      <div className="max-md:w-full md:max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* max-md:block/inline */}
        <Navbar />

        <Main />

        {/* max-[1160px]:hidden */}
        <Sideright />

        {/* max-md:block/inline */}
        <Navbot />
      </div>
    </main>
  );
};

export default Page;
