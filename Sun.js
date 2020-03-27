class Sun extends BaseClass
{
    constructor(x,y,width,height)
        {
            var options={
             isStatic:true
        }
            super(x,y,height,width,options);
            
       this.image = loadImage("download.png");
       
       this.debug=true;
    
        }
        display()
        {
            super.display();
           
        
        if(frameCount%2===0)
        {
            this.width=this.width+2.5;
            this.height=this.height+2.5;
        }



        }


    
}