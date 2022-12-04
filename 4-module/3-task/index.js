function highlight(table) {
      for (let row of table.rows) {
        //Проверяем наличие data атрибута, если его нет, то прячем строку, если есть то проставим класс в зависимости от его значения.
        if (!row.cells[3].hasAttribute("data-available")) {
          row.hidden = true
        } else if (row.cells[3].getAttribute("data-available") === "true") {
          row.classList.add("available");
        } else {
          row.classList.add("unavailable");
        };
        // Проверим содержание ячейки на текст и проставим класс в зависимости от значения.
        if (row.cells[2].textContent === "m") {
          row.classList.add("male")
        } else {
          row.classList.add("female")
        }
        //Приведем значение ячейки к числу, и если оно меньше необходимого добавим стиль к строке.
        if (Number(row.cells[1].textContent) <= 18) {
          row.style.textDecoration = "line-through"
        }
      }
}
