function addData(myname, mname, roll, school, center){
    let newname = myname.substring(0,1);
    let newmname = mname.substring(0,1);
    let newroll = roll.substring(5,7)
    let newschool = school.substring(0,2);
    let newcenter = center.substring(2,5);
    let fullNumber = newname + newmname + newroll + newschool + newcenter;
    let id = fullNumber;

    document.querySelector('.pp').style.display = 'block';
    document.querySelector('.output').style.display = 'block';
    document.getElementById("myInput").value = id.toUpperCase();

    
}

document.getElementById("btn").addEventListener("click", function(event){
  event.preventDefault()
});

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

//IIS

function iisData(myname, mname, roll){
    let newname = myname.substring(0,1);
    let newmname = mname.substring(0,1);
    let newroll = roll.substring(5,7)
    let newschool = 15;
    let newcenter = 24;
    let fullNumber = newname + newmname + newroll + newschool + newcenter;
    let id = fullNumber;

    document.querySelector('.pp').style.display = 'block';
    document.querySelector('.output').style.display = 'block';
    document.getElementById("myInput").value = id.toUpperCase();
}

