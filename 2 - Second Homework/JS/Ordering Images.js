function callAllOrdering () {

    let imagesCollection = new Array ();
    imagesCollection.push(-10 , 40 , 25 , 100 , -50 , 70);
    console.log(imagesCollection);

    bubbleSortUpward (imagesCollection);
    bubbleSortDownward (imagesCollection);
    
    selectionSortUpward (imagesCollection);
    selectionSortDownward (imagesCollection);

return imagesCollection;
}

function bubbleSortUpward (imagesCollection) {

    /* let aux; */
    for(let principal=0 ; principal<(imagesCollection.length) ; principal++) {
        for(let p=0 ; p<(imagesCollection.length-principal-1) ; p++) {
 
            /* 
            if(imagesCollection[p] > imagesCollection[p+1]) {
                aux=arreglo[p];
                arreglo[p]=arreglo[j+1];
                arreglo[p+1]=aux;
            } 
            */

            (imagesCollection[p]>imagesCollection[p+1]) && (minorValueElement=p) ? [imagesCollection[p] , imagesCollection[p+1] = imagesCollection[p] , imagesCollection[p]] : '';
        }
    }

    console.log("Burbuja Ascendente" + imagesCollection);

return imagesCollection;
}

function bubbleSortDownward (imagesCollection) {
    
    for(let principal=0 ; principal<(imagesCollection.length) ; principal++) {
        for(let p=0 ; p<(imagesCollection.length-principal-1) ; p++) {

            (imagesCollection[p] > imagesCollection[p+1]) ? [imagesCollection(p) , imagesCollection[p+1] = imagesCollection[p] , imagesCollection[p]] : '';
        }
    }
    
    console.log("Burbuja Descendente" + imagesCollection);

return imagesCollection;
}

function selectionSortUpward (imagesCollection) {

    for(let principal=0 ; principal<(imagesCollection.length) ; principal++) {

        let p = minorValueElement = principal;

        for(++p ; p<imagesCollection.length ; ++p) {

            (imagesCollection[p]<imagesCollection[minorValueElement]) && (minorValueElement = p);
        }
        [imagesCollection[principal] , imagesCollection[minorValueElement]] = [imagesCollection[minorValueElement] , imagesCollection[principal]];
    }

    console.log("Selección Ascendente" + imagesCollection);

return imagesCollection;
}

function selectionSortDownward (imagesCollection) {

    for(let principal=0 ; principal<(imagesCollection.length) ; principal++) {

        let p = minorValueElement = principal;

        for(++p ; p<imagesCollection.length ; ++p) {

            (imagesCollection[p]>imagesCollection[minorValueElement]) && (minorValueElement = p);
        }
        [imagesCollection[principal] , imagesCollection[minorValueElement]] = [imagesCollection[minorValueElement] , imagesCollection[principal]];
    }

    console.log("Selección Descendente" + imagesCollection);

return imagesCollection;
}

function insertionSort (imagesCollection) {

}
