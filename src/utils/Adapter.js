///функция по замене имени файла из формата animals/annas-hummingbird-5837675__480.jpg
/// в формат animals/annas-hummingbird/5837675__480.jpg
export function AdaptData(items) {
  let reg = /-/y;
  return items.map((item) => {
    reg.lastIndex = item.image.lastIndexOf("-");
    item.path = item.image.replace(reg, "/");
    item.image = "http://contest.elecard.ru/frontend_data/" + item.image;

    return item;
  });
}
