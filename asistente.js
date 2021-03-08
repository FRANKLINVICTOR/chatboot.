if(annyang){
    var voices;

    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es-AR';

    //Cargamos las voces que tenemos en nuestro sistema.
    window.speechSynthesis.onvoiceschanged= function(){
        voices=window.speechSynthesis.getVoices();
        console.log(voices);
    };

    var commands = {
        'hola Alex': function() {
            alert('hola quetal Victor!!!!!!.......');
            window.SpeechSynthesis.speak(utter);
        }   
       
    };

 

 // Add our commands to annyang
annyang.addCommands(commands);

  

  // Start listening.
  annyang.start({ autoRestart: false, continuous: true });
}