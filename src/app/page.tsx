import Main from "@/components/main";
import Sidebar from "@/components/sidebar";
import Sideright from "@/components/sideright";

const Page = () => {
  return (
    <main className="min-h-screen flex">
      <Sidebar />

      <div className="max-w-7xl mx-auto flex">
        <Main />
        <Sideright />
      </div>
    </main>
  );
};

export default Page;
