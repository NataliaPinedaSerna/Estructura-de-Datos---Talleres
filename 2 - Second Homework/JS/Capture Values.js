function selectData() {
    
    const img1 = document.getElementById("1").checked;
    const img2 = document.getElementById("2").checked;
    const img3 = document.getElementById("3").checked;
    const img4 = document.getElementById("4").checked;
    const img5 = document.getElementById("5").checked;
    const img6 = document.getElementById("6").checked;
    
    let arrayImageSelected = new Array();
    arrayImageSelected.push(img1,img2,img3,img4,img5,img6);
    console.log(arrayImageSelected);
}