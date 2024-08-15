export function preload () {
    this.load.image('fondo', './assets/images/fondo.png');
    this.load.image('fullship', './assets/ships//Full/full.png');
    this.load.image('fullship2', './assets/ships//Full/fullship2.png');

    this.load.spritesheet(
        'star', // <--- id
        'assets/stars/star.png',
        { frameWidth: 25, frameHeight: 27 }
      )

      this.load.spritesheet(
        'star2', // <--- id
        'assets/stars/star.png',
        { frameWidth: 25, frameHeight: 27 }
      )

   
}