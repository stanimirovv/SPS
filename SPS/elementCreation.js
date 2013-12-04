// !!!! This file will contain all the functions for the element creation

/* Creates the Text box.  */
// Note: Name must be changed.
  function addTest() {
            var tmp = document.createElement("div");
            tmp.className = "draggable";
            tmp.style.position = "absolute";          
            console.log("INF  "+mouseX);
            console.log("INF  " + mouseY);           
            tmp.id = Math.floor((Math.random() * 2534576) + 1).toString();
            document.getElementById("texts").appendChild(tmp);
            tmp.style.top = mouseY.toString() + "px";
            tmp.style.left = mouseX.toString() + "px";
            $("#" + tmp.id).draggable();
            $("#" + tmp.id).on('mousedown', function (event) {
                if (event.which == 3) {
                    currID = $(this).attr('id');
                    mouseX = event.clientY;
                    mouseY = event.clientX;
                }

            });
        }

		
/* Creates the Picture box.  */		
       function addPicture() {
            var tmp = document.createElement("div");
            tmp.className = "draggable1";
            tmp.style.position = "absolute"
            console.log("INF  " + mouseX);
            console.log("INF  " + mouseY);

            tmp.id = Math.floor((Math.random() * 2534576) + 1).toString();
            document.getElementById("pictures").appendChild(tmp);
            tmp.style.top = mouseY.toString() + "px";
            tmp.style.left = mouseX.toString() + "px";
            tmp.style.backgroundRepeat = "no-repeat";
            tmp.style.backgroundSize = "contain";
            
            $("#" + tmp.id).draggable();
            $("#" + tmp.id).on('mousedown', function (event) {
                if (event.which == 3) {
                    currID = $(this).attr('id');
                    mouseX = event.clientY;
                    mouseY = event.clientX;
                }

            });
        }
		
