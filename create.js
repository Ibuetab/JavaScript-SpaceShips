export function create () {

    //Genera un numero aleatorio para elementos en el fondo
    let random;

    function generateRandomNumber(random){
        for(let i =0;i<5;i++){
            let random = Math.random() * 1000;
            return random;
        }
    }
    

    //Crea el fondo
    //image(x, y, id)
   this.fondo = this.add.image(100, 50, 'fondo')
    .setOrigin(0.15, 0.1)
    .setScale(1.5)

    //Crea la nave
    this.fullship = this.physics.add.sprite(100, 800, 'fullship')
    .setOrigin(1, 1)
    .setCollideWorldBounds(true)
    .setGravityY(-300)
    
    //Creación del grupo de estrellas
    this.stars = this.physics.add.group(); 


    //Caen estrellas por intervalos de tiempo
    this.time.addEvent(
        {
            delay: 1000,
            callback: () =>  {
                let star = this.physics.add.sprite(generateRandomNumber(random) -300,0, 'star')
                            .setOrigin(0, 1)
                            .setCollideWorldBounds(false)
                            .setGravityY(-295)

                this.stars.add(star);
            },

            loop:true

        });


    //Añadir colisión de la nave con el grupo de estrellas
    this.physics.add.overlap(this.fullship,this.stars,collectStar,null,this) 

    //Función de colisión de la nave con el grupo de estrellas
    function collectStar (fullship,star)
    {
        star.disableBody(true, true); 
        
    } 





    //Se crean los controles de teclado
    this.keys = this.input.keyboard.createCursorKeys()


}