import Stories from "./stories";
import Pages from "./pages";

const Main = () => {
  return (
    <section className="w-full max-w-2xl pb-6 mx-auto">
      <div className="flex flex-col space-y-3">
        <Stories />
        <Pages />
      </div>
    </section>
  );
};

export default Main;
