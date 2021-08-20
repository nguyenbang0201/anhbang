var sileIndex =0;
sileShow();
function sileShow(){
    var i =0;
    var sile = document.getElementsByClassName("mysile");
    for(i=0;i<sile.length;i++){
        sile[i].style.display = "none"
    }
    sileIndex++;
    if(sileIndex>sile.length){
        sileIndex=1
    }
    sile[sileIndex-1].style.display = "block";
    setTimeout(sileShow,3000);
}