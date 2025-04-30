export const getBgCategoryColor = (color: string): string => {
  const colors: Record<string, string> = {
    personal: "rgb(250 204 21)",
    home: "rgb(74 222 128)",
    business: "rgb(129 140 248)",
  };

  return colors[color] || "rgb(129 140 248)"; // Default color if status is not found
};

export const getTxtCategoryColor = (color: string): string => {
  const colors: Record<string, string> = {
    personal: "rgb(202 138 4)",
    home: "rgb(22 163 74)",
    business: "rgb(79 70 229)",
  };

  return colors[color] || "rgb(79 70 229)"; // Default color if status is not found
};
