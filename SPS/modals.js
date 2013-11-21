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
                        document.getElementById(currID).style.background = "url("+ tmpBackground +")";
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

        var textGenId = "#textGen";
        var textGenPrevId = "#textGenPreview";
        window.setInterval(function () { updatePreview(); }, 350);

		//Updates the preview of the text
        function updatePreview() {
            console.log($(textGenId).val());
            $(textGenPrevId).html($(textGenId).val());
        }
		
		// Depending on the parameter Creates a new tag
		// at cursor position
        function textbox2(tag) {
            var cursorPos = $(textGenId).prop('selectionStart');
            var v = $(textGenId).val();
            var textBefore = v.substring(0, cursorPos);
            var textAfter = v.substring(cursorPos, v.length);
            $(textGenId).val(textBefore + tag + textAfter);
        }
		
		// Sets the formated text to the selected div
        function getFormatedText() {
            var tmpStr = $(textGenId).val();
            console.log(tmpStr);
            document.getElementById(currID).innerHTML = tmpStr;
            $(textGenId).val("");
        }