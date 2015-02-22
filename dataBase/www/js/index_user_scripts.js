(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Submit */
    $(document).on("click", ".uib_w_8", function(evt)
    {
       alert("at least I'm here");/* your code goes here */ 
        initDatabase();
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
