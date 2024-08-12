import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Sideright from "@/components/sideright";

const Page = () => {
  return (
    <main className="min-h-screen flex">
      {/* max-md:hidden */}
      <Sidebar />

      <div className="w-full md:max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* max-md:block/inline */}
        <Navbar />

        <Main />

        {/* max-[1160px]:hidden */}
        <Sideright />
      </div>
    </main>
  );
};

export default Page;
