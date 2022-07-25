export const sorts = [
  { name: "по категории", type: "category" },
  { name: "по дате", type: "timestamp" },
  { name: "по названию", type: "image" },
  { name: "по размеру файла", type: "filesize" },
];

export const views = [
  { name: "карточки", type: "cards" },
  { name: "древовидный", type: "tree" },
];

///функция для сортировки данных по заданному полю
export function SortItems(items, type) {
  items.sort((a, b) => {
    if (typeof a[type] === "string") {
      return a[type].localeCompare(b[type]);
    } else {
      return a[type] - b[type];
    }
  });
  return items;
}
