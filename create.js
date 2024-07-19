export function create () {

    var random = Math.random() * 1000;

    //image(x, y, id)
   this.fondo = this.add.image(100, 50, 'fondo')
    .setOrigin(0.15, 0.1)
    .setScale(1.5)

    //this.fullship = this.add.image(100,800,'fullship')

    this.fullship = this.physics.add.sprite(100, 800, 'fullship')
    .setOrigin(1, 1)
    .setCollideWorldBounds(true)
    .setGravityY(-300)


    this.star = this.physics.add.sprite(random,random, 'star')
    .setOrigin(0, 1)
    .setGravityY(-300)



    this.physics.add.collider(this.fullship, this.star);

    this.physics.add.overlap(this.fullship,this.star,collectStar,null,this)

    function collectStar (fullship,star)
    {
        this.star.disableBody(true, true);
    }

    //Se crean los controles de teclado
    this.keys = this.input.keyboard.createCursorKeys()


}