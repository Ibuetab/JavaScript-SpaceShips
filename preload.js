export function preload () {
    this.load.image('fondo', './assets/images/fondo.png')
    this.load.image('fullship', './assets/ships/full.png')

    this.load.spritesheet(
        'star', // <--- id
        'assets/stars/star.png',
        { frameWidth: 25, frameHeight: 27 }
      )

   
}