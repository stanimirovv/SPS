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