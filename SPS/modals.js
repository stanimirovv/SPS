// !!!! This file will contain all of the script for the modals

/* Modal for setting the URL for the picture */
    $(function () {
            $("#dialog-confirm").dialog({
                autoOpen: false,
                resizable: true,
                height: 380,
                modal: true,
                buttons: {
                    "Confirm": function () {
                        console.log(document.getElementById("picURL").value);
                        var tmpBackground = document.getElementById("picURL").value;
                        document.getElementById("picURL").value = "";
                        document.getElementById(currID).style.background = "url(" + tmpBackground + ")";
                        document.getElementById(currID).style.backgroundRepeat = "no-repeat";
                        document.getElementById(currID).style.backgroundSize = "contain";
                        $(this).dialog("close");
                    },
                    Cancel: function () {
                        $(this).dialog("close");
                    }
                }
            });
        });
		
/* Modal for the text insertion */
	//modal initialization
 $(function () {
         $("#dialog-confirm1").dialog({
             autoOpen: false,
             resizable: true,
             height: 680,
             width: 500,
             modal: true,
             buttons: {
                 "Confirm": function () {
                     getFormatedText();
                     $(this).dialog("close");
                 },
                 Cancel: function () {
                     $(this).dialog("close");
                 }
             }
         });     
     });
		
		/*
			- textGenId Id of the input box
			- textGenPrevId id of the preview div
			- (last row) updates the preview 150 miliseconds is good enough
		*/
        var textGenId = "#textGen";  
        var textGenPrevId = "#textGenPreview"; 
        window.setInterval(function () { updatePreview(); }, 150); 

		//Updates the preview of the text
        function updatePreview() {
            console.log($(textGenId).val());
            $(textGenPrevId).html($(textGenId).val());
        }
		
		// Depending on the parameter Creates a new tag
		// at cursor position
        function textbox2(tag) {
         /*   var cursorPos = $(textGenId).prop('selectionStart');
            var v = $(textGenId).val();
            var textBefore = v.substring(0, cursorPos);
            var textAfter = v.substring(cursorPos, v.length);
            $(textGenId).val(textBefore + tag + textAfter);*/
            var selStart = $("#textGen")[0].selectionStart;
            var selEnd = $("#textGen")[0].selectionEnd;

            var originalString = $("#textGen").val();

            var segment_1 = originalString.substr(0, selStart);
            var segment_2 = originalString.substr(selStart, selEnd);
            var segment_3 = originalString.substr(selEnd, originalString.length);

            var finalString = segment_1 + tag + segment_2 + tag + segment_3; // < ===== Error

            $("#textGen").val(finalString);
        }
		
		// Sets the formated text to the selected div
        function getFormatedText() {
            var tmpStr = $(textGenId).val();
            console.log(tmpStr);
            document.getElementById(currID).innerHTML = tmpStr;
            $(textGenId).val("");
        }
		
/* Modal for the body edit */
        var font1; // font name
        var fsize1; //font size

        $(function () {
            $("#dialog-confirm657").dialog({
                autoOpen: false,
                resizable: true,
                height: 680,
                width: 500,
                modal: true,
                buttons: {
                    "Confirm": function () {
                        $(this).dialog("close");
                        document.body.style.fontFamily = font1;
                        document.getElementById("texts").style.fontSize = fsize1;
                    },
                    Cancel: function () {
                        $(this).dialog("close");
                    }
                }
            });

        });



        function changeStyle() {

        }

        function changeFont(newFont) {
            document.getElementById("testFont").style.fontFamily = newFont;
            font1 = newFont;
        }

        function changeSize(newSize) {
            document.getElementById("testiSize").style.fontSize = newSize;
            fsize1 = newSize;
        }
