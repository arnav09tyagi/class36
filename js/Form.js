class Form{
    constructor(){
        
    }


    display(){
        var title=createElement("h2")
        title.html("car racing")

        var input = createInput("Name");
        var button = createButton('Play');
        var greeting = createElement('h3');

        title.position(478,145)
        input.position(450,200);
        button.position(510,250);
        
        button.mousePressed(function(){
            input.hide()
            button.hide()
        
            var name = input.value();
        
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            
            greeting.html("Hello "+name);
            greeting.position(510,250);     
        })
    }
}