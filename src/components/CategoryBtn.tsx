interface Props {
  categoryName: string;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryBtn = ({
  categoryName,
  activeCategory,
  setActiveCategory,
}: Props) => {
  const commonStyles =
    "px-5 uppercase cursor-pointer duration-200 relative before:absolute before:left-0 before:-bottom-3 before:w-0 before:h-[1px] before:bg-blue before:duration-200";

  return (
    <button
      className={`${commonStyles} ${
        activeCategory === categoryName ? "text-blue before:w-full" : ""
      }`}
      onClick={() => setActiveCategory(categoryName)}
    >
      {categoryName}
    </button>
  );
};

export default CategoryBtn;
