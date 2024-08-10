import Main from "@/components/main";
import Sidebar from "@/components/sidebar";

const Page = () => {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <Main />
      <div>Side Right</div>
    </main>
  );
};

export default Page;
