

// Мы создаем базовый класс Shape, который представляет общие свойства и методы для всех фигур.
// Дочерние классы Circle и Rectangle наследуют класс Shape и расширяют его функциональность для отображения конкретных фигуp

class Shape {
  constructor(className) {
    this.element = document.createElement('div');
    this.element.classList.add('shape', className);
  }
  render() {
    document.body.append(this.element);
  }

  setStyle(obj) {
    for (const key in obj) {
      document.querySelector('.circle').style[key] = `${obj[key]}`
    }
  }
}

let circle = new Shape('circle');

circle.render();

// Разработать логику setStyle для класса Shape, нужно передать объект для данного метода и он преобразует это в css и применит стили

circle.setStyle(
    {
        background: "orange",
        width: "150px",
        height: "150px",
        color: "red"
    }
);