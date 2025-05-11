
import React from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "@/data/products";

const CategoryFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            currentCategory === "all"
              ? "bg-brand-accent text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              currentCategory === category.id
                ? "bg-brand-accent text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
