import NotesList from "./components/NotesList";
import CategorySection from "./components/CategorySection";
import AddBtn from "./components/AddBtn";
import SearchBar from "./components/SearchBar";
import useAppState from "./context/useAppState";
import Popup from "./components/popup";

const Root = () => {
  const { isPopupOpen } = useAppState();

  return (
    <main className={`min-h-dvh bg-light relative`}>
      {/* Render Popup & Overlay */}
      {isPopupOpen && (
        <>
          <div className="absolute top-0 left-0 bg-black/80 w-full h-full z-20" />
          <Popup />
        </>
      )}

      <nav className="bg-white shadow-lg px-3 sticky top-0 left-0 z-10">
        <div className="flex items-center gap-5 max-w-[1624px] mx-auto py-4">
          <SearchBar />
          <AddBtn />
        </div>
      </nav>

      <section className="mt-10 px-3">
        <div className="max-w-[1624px] mx-auto">
          <div className="flex flex-col gap-5">
            <CategorySection />
            <NotesList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Root;
