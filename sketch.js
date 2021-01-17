    // compiling all these words into matter family so I do not have to add "Matter." after each of these words
    const{Engine,World,Bodies,MouseConstraint,Constraint} = Matter
    // creating various global variables needed
    let ground;
    let world;
    let engine;
    let bg ;
    let image;
    let mConstraint;
    let slingshot;
    let music;

    function preload(){
        image = loadImage("backdrop.jpg");
        music = loadSound("backmusic.mp3");
    }

    function setup(){
        engine = Matter.Engine.create();
        world = engine.world
        bg = color(random(0,255),random(0,255),random(0,255))
        const Canvas = createCanvas(windowWidth,windowHeight);
       music.play();
        


    // using it
        
        ground = new Ground(width/2 , height-15 , width , 20);
        box1 = new Box(675,100,20,25);
        box2 = new Box(650,100,20,25);
        box3 = new Box(625,100,20,25);
        box4 = new Box(600,100,20,25);
        box5 = new Box(700,100,20,25);
        box6 = new Box(625,50,30,25);
        box7 = new Box(651,50,30,25);
        box8 = new Box(631.5,-900,65,25);
        console.log(box8.y);

        bird = new Bird(300,300,10);
        sling = new SlingShot(300,300,bird.body);
        platform1 = new Ground(650,310,140,7);
        platform2 = new Ground(990,440,200,7);
        box9 = new Box(900,435,20,20);
        box10 = new Box(920,435,20,20);
        box11 = new Box(920+20,435,20,20);
        box12 = new Box(920+40,435,20,20);
        box13 = new Box(920+60,435,20,20);
        box14 = new Box(920+80,435,20,20);
        box15 = new Box(920+100,435,20,20);
        box16 = new Box(920+120,435,20,20);
        box17 = new Box(920+140,435,20,20);
        box18 = new Box(920+160,435,20,20);
        




        const mouse = Matter.Mouse.create(canvas.elt);
        const options={
            mouse: mouse
        }
        mConstraint = Matter.MouseConstraint.create(engine,options);
        World.add(world , mConstraint);
    }


    function draw(){
        background(image);
        Matter.Engine.update(engine);

        bird.display();
        box1.spawn();
        ground.spawn();
        platform1.spawn();
        platform2.spawn();
        box2.spawn();
        box3.spawn();
        box4.spawn();
        box5.spawn();
        box6.spawn();
        box7.spawn();
        box8.spawn();
        box9.spawn();
        box10.spawn();
        box11.spawn();
        box12.spawn();
        box13.spawn();
        box14.spawn();
        box15.spawn();
        box16.spawn();
        box17.spawn();
        box18.spawn();
        sling.spawn();
        textFont("Indie Flower");
        textStyle(BOLD);
        textSize(30);
        text("launch the ball towards the stack of blocks",30,30)
        text("time: "+hour()+" :"+minute()+" :"+second()+" :"+millis(),800,40)
        // if(keyCode===32){
        //     music.play();
        // }
    }
    
    function mouseReleased(){
        setTimeout(() =>{
        sling.release();
        },100);
    }
    