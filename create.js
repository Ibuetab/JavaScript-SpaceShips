export function create () {

    //Genera un numero aleatorio para elementos en el fondo
    let random;

    function generateRandomNumber(random){
        for(let i =0;i<5;i++){
            let random = Math.random() * 1000;
            return random;
        }
    }
    
    //Genera un numero aleatorio de estrellas
    let randomstars;
    function generateRandomStars(randomstars){
        for(let i =0;i<5;i++){
            let randomstars = Math.random() * 10;
            return randomstars;
        }
    }





    //image(x, y, id)
   this.fondo = this.add.image(100, 50, 'fondo')
    .setOrigin(0.15, 0.1)
    .setScale(1.5)


    this.fullship = this.physics.add.sprite(100, 800, 'fullship')
    .setOrigin(1, 1)
    .setCollideWorldBounds(true)
    .setGravityY(-299)
    .setVelocityY(-1)




    this.star = this.physics.add.group({
        key: 'star',
        repeat: 3,
        setXY: { x: generateRandomNumber(random), y: 0, stepX: generateRandomNumber(random)-300 }
    });
    
    this.star.children.iterate(function (child) {

        child.setGravityY(generateRandomNumber(random)-300)
        //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
    }); 

  

    
 
  
/* 
    this.star = this.physics.add.sprite(generateRandomNumber(random),0, 'star')
    .setOrigin(0, 1)
    .setCollideWorldBounds(false)
    .setGravityY(-295)  
 */

    
 
    this.physics.add.collider(this.fullship, this.star.child)

    this.physics.add.overlap(this.fullship,this.star.child,collectStar,null,this)

    function collectStar (fullship,star)
    {
        this.star.child.disableBody(true, true);
        this.fullship.setGravityY(-299).setVelocityY(-1)
    }

    //Se crean los controles de teclado
    this.keys = this.input.keyboard.createCursorKeys()


}