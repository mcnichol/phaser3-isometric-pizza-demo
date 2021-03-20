import Phaser from "phaser";
import pizza from "./assets/Isometric/pizza_NE.png";
import pizzaBox from "./assets/Isometric/pizzaBox_SE.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("pizza", pizza);
  this.load.image("pizzaBox", pizzaBox);
}

function create() {
  this.pizzaBox = this.add.image(400, 160, "pizzaBox");
  this.pizza = this.add.image(400, 164, "pizza").setScale(0.9).setInteractive({draggable: true});

  this.pizza.on('drag', (pointer, dragX, dragY) => {
    this.pizza.setPosition(dragX, dragY);
  });
}
