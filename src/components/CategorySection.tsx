import CategoryBtn from "./CategoryBtn";
import useAppState from "../context/useAppState";

const CategorySection = () => {
  const categories = ["all", "personal", "home", "business"];
  const {
    activeCategory,
    setActiveCategory,
    showOnlyCompleted,
    setShowOnlyCompleted,
  } = useAppState();

  const handleShowOnlyCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowOnlyCompleted(e.target.checked);
  };

  return (
    <section className={`flex flex-col gap-6`}>
      <h2 className={`text-navy font-bold text-2xl`}>Your notes</h2>

      <div className="flex justify-between flex-col-reverse gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center py-3 border-b border-gray-accent">
          {categories.map((category, index) => (
            <CategoryBtn
              key={index}
              categoryName={category}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>

        <div className={`flex items-center justify-end gap-2`}>
          <input
            type="checkbox"
            id="show-completed"
            checked={showOnlyCompleted}
            onChange={handleShowOnlyCompleted}
          />
          <label htmlFor="show-completed" className={`text-navy`}>
            Show only completed notes
          </label>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
