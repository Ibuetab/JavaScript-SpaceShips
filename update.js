export function update(){
    //teclas izquierda, derecha, arriba, abajo
    if (this.keys.left.isDown) {
         this.fullship.x -= 10
    }
    else if (this.keys.right.isDown) {
        this.fullship.x += 10
    }
    else if(this.keys.up.isDown){
        this.fullship.y -=5
    }
    else if(this.keys.down.isDown){
        this.fullship.y +=5
    }

    //poder moverse inclinado
    //arriba a la izquierda
    
    



        

    
        
}