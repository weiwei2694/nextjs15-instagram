import Sidebar from "@/components/sidebar";

const Page = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div>Main</div>
      <div>Side Right</div>
    </main>
  );
};

export default Page;
