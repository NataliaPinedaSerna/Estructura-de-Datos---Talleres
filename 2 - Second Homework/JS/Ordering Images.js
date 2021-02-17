function makeArrayCollection () {

    let imagesCollection = new Array ();
    imagesCollection.push(-10 , 40 , 25 , 100 , -50 , 70);
    console.log(imagesCollection);

return imagesCollection;
}

function bubbleSortUpward () {

    let imagesCollection = makeArrayCollection();

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

}

function bubbleSortDownward (imagesCollection) {
    
    for(let principal=0 ; principal<(imagesCollection.length) ; principal++) {
        for(let p=0 ; p<(imagesCollection.length-principal-1) ; p++) {

            (imagesCollection[p] > imagesCollection[p+1]) ? [imagesCollection(p) , imagesCollection[p+1] = imagesCollection[p] , imagesCollection[p]] : '';
        }
    }
    
    console.log("Burbuja Descendente" + imagesCollection);

}


function selectionSortUpward (imagesCollection) {

    for(let principal=0 ; principal<(imagesCollection.length) ; principal++) {

        let p = minorValueElement = principal;

        for(++p ; p<imagesCollection.length ; ++p) {

            (imagesCollection[p]<imagesCollection[minorValueElement]) && (minorValueElement = p);
        }
        [imagesCollection[principal] , imagesCollection[minorValueElement]] = [imagesCollection[minorValueElement] , imagesCollection[principal]];
    }

}

function selectionSortDownward (imagesCollection) {

    for(let principal=0 ; principal<(imagesCollection.length) ; principal++) {

        let p = minorValueElement = principal;

        for(++p ; p<imagesCollection.length ; ++p) {

            (imagesCollection[p]>imagesCollection[minorValueElement]) && (minorValueElement = p);
        }
        [imagesCollection[principal] , imagesCollection[minorValueElement]] = [imagesCollection[minorValueElement] , imagesCollection[principal]];
    }

}

function insertionSort (imagesCollection) {

}
