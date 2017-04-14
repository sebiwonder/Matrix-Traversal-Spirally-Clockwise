var staticMatrix = [
    [ 1, 2, 3, 4],
    [ 12, 13, 14, 5],
    [ 11, 16, 15, 6],
    [ 10, 9, 8, 7]
];

var R = staticMatrix.length;
var C = staticMatrix.length;

traverse(R, C, staticMatrix);

function traverse(R, C, staticMatrix) {
    var i = 0, j = 0, m, k = '';

    while (i < R && j < C) {
        for (m = j; m< C; ++m) {
            k += staticMatrix[i][m] + ' ';
        }
        i++;
 
        for (m = i; m < R; ++m) {
            k += staticMatrix[m][C - 1] + ' ';
        }
        C--;
 
        if (i < R) {
            for (m = C - 1; m >= j; --m) {
                k += staticMatrix[R - 1][m] + ' ';
            }
            R--;
        }

        if (j < C) {
            for (m = R - 1; m >= i; --m) {
                k += staticMatrix[m][j] + ' ';
            }
            j++;
        }
    }

    console.log(k);
    
    /*******************************
**	 Concatenation/Merge of two arrays **
************************************/
    var a = [1,2,3]
    var b = [4,5]
    var c = a.concat(b);
    console.log("c: ",c);

}