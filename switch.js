function toggleS1() {
        document.getElementById("myswitch1").checked = true;
        document.getElementById("myswitch2").checked = false;
        document.getElementById("myswitch3").checked = false;
        updateparagraph();
        updateSwitchView();
}

function toggleS2() {
        document.getElementById("myswitch1").checked = false;
        document.getElementById("myswitch2").checked = true;
        document.getElementById("myswitch3").checked = false;
        updateparagraph();
        updateSwitchView();
}
function toggleS3() {
        document.getElementById("myswitch1").checked = false;
        document.getElementById("myswitch2").checked = false;
        document.getElementById("myswitch3").checked = true;
        updateparagraph();
        updateSwitchView();
}
function updateparagraph(){
    if (document.getElementById("myswitch1").checked) {
            document.getElementById("2011").style.display = 'inline';
        } else {
            document.getElementById("2011").style.display = 'none';
    }

    if (document.getElementById("myswitch2").checked) {
            document.getElementById("2016").style.display = 'inline';
        } else {
            document.getElementById("2016").style.display = 'none';
    }

    if (document.getElementById("myswitch3").checked) {
            document.getElementById("2011-2016").style.display = 'inline';
        } else {
            document.getElementById("2011-2016").style.display = 'none';
    }
}
    function updateSwitchView(){
        if (document.getElementById("myswitch1").checked) {
            map.setLayoutProperty('IND2011', 'visibility', 'visible');
        } else {
            map.setLayoutProperty('IND2011', 'visibility', 'none');
        }

        if (document.getElementById("myswitch2").checked) {
            map.setLayoutProperty('IND2016', 'visibility', 'visible');
        } else {
            map.setLayoutProperty('IND2016', 'visibility', 'none');
        }

        if (document.getElementById("myswitch3").checked) {
            map.setLayoutProperty('IND2011_2016', 'visibility', 'visible');
        } else {
            map.setLayoutProperty('IND2011_2016', 'visibility', 'none');
        }
    }