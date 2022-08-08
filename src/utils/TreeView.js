///функция для извлечения имени файла - 5837675__480.jpg по прошлому примеру
function extractFileName(str) {
  const indexOfLastWord = str.split("/").length - 1;
  return str.split("/")[indexOfLastWord];
}

// функция для построения дерева формата [имя_ветки,
//                                          [имя_вложенной_ветки,
//                                                 [имя_вложееной_х2_ветки, [...]
//                                                 ]
//                                          ]
//                                          [имя_вложенной_ветки,
//                                                 [имя_вложееной_х2_ветки, [...]
//                                                 ]
//                                          [
//                                       ]
export function buildTree(items) {
  let result = items
    .reduce((r, s) => {
      ("root/" + s.path).split("/").reduce((a, item) => {
        let array = a.find(([v]) => v === item);
        if (!array) {
          if (item === extractFileName(s.path)) {
            a.push((array = [item, s]));
          } else {
            a.push((array = [item, []]));
          }
        }
        return array[1];
      }, r);
      return r;
    }, [])
    .pop();
  return result;
}
