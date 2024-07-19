import { preload } from "./preload.js"
import { create} from "./create.js"
import { update} from "./update.js"

const config = {
    type: Phaser.AUTO, // webgl, canvas
    width: 900,
    height: 900,
    backgroundColor: '#049cd8',
    parent: 'game',
    physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload, // se ejecuta para precargar recursos
    create, // se ejecuta cuando el juego comienza
    update // se ejecuta en cada frame
  }

}


new Phaser.Game(config)

