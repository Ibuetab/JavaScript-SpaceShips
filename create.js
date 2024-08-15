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


    //Incializa un sistema de puntuación
    this.score = 0;

    //Texto con la puntuación
    this.scoreText = this.add.text(16,16, 'Puntuacion: 0',
        {
            fontSize: 20,
            fontFamily: 'Arial',
            fill : '#FFF'

        });


    //Límite para cambiar la apariencia de la nave
    this.limit = 3;



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
        star.disableBody(true, true); //Desactiva la estrella

        //Sistema de puntuación
        this.score += 1;
        this.scoreText.setText('Puntuacion: ' + this.score) //Muestra el texto con la puntuación

        //Cambio de apariencia de la nave al recoger x numéro de estrellas


        if(this.score >= this.limit){
            this.fullship.setTexture('fullship2');
            this.fullship.setScale(0.1);
            this.fullship.body.setSize(this.fullship.width, this.fullship.height, true);
            
        }
        
    } 





    //Se crean los controles de teclado
    this.keys = this.input.keyboard.createCursorKeys()


}