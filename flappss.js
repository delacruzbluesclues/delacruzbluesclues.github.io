PImage background; 
PImage black;
int x = 0; int count = 0; int Vy = 0; int My = 0;

int gamestate = 0;
void setup(){
   size(1280, 640);
   background = loadImage("./IMG/game.png");
   black = loadImage("./IMG/african.png");
   //wall = loadImage("./IMG/
   
}

void draw(){
  if (gamestate == 0){
    image(background, 0 + x, 0);
    image(background,  1280 + x, 0);
    count --;
    if (x == - 1280){
      x = 0;
      
    }
    
    image(black, 100, My);
    x--;
    Vy++;
    My = My + Vy;
    if (My > 640){
      gamestate = 2;
      
    }
  
   }
 
   if (gamestate == 2){
     textSize(30); fill(0);
     text("Mr. Thoe Please Give Me An A In This Class :D", 250, 300);
     fill(255,0,0);
     rect(455, 415, 190, 50);
     fill(0); //black
     text("Restart", 500, 450);
     
     if(mouseX > 455 && mouseX < 645 && mouseY > 415 && mouseY < 465){
     textSize(30); fill(255,255,0);
     rect(455, 415, 190, 50);
     fill(0); //black
     text("Restart", 500, 450);
     
     
     if (mousePressed){ //Click to restart
       gamestate = 0;
       My = 200;
       
     }
       
     }
     
   }
  
    
    
  }
  
  void mousePressed(){
    Vy = - 17;
  

  
  
  }