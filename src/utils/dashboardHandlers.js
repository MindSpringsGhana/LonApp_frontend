// File: handleItemClick.js

export const handleItemClick = (
  index,
  setActiveIndex,
  firstNavItemsLength,
  isLastSection = false
) => {
  const newIndex = isLastSection ? firstNavItemsLength + index : index; // Calculate the new index
  setActiveIndex(newIndex); // Update the activeIndex state
};
