
//Loop Problems

//Square Pattern

function squarepattern(n) {
    for (let row = 1; row <= n; row++) {
        let line = ''; 
        for (let col = 1; col <= n; col++) { 
            line += '*'; 
        }
        console.log(line); 
    }
}

squarepattern(n=4);

//pattern2 
console.log('Pattern2')

function seqpattern(n) {
    for (let row = 1; row <= n; row++) {
        let line = ''; 
        for (let col = 1; col <= row; col++) { 
            line += '*'; 
        }
        console.log(line); 
    }
}

seqpattern(n=4);

//patern 3 
console.log('Pattern3')

function reverseSeqPattern(n){
    for(let row = 1; row<=n; row++){
        let line = '';
        for(col=n; col>=row;col--){
            line+='*'
        }
        console.log(line); 
    }

}
reverseSeqPattern(n=5);

//patern 4
console.log('Pattern4------')

function rumSeqPattern(n){
    for(let row = 1; row<=n; row++){
        let line = '';
        for(col=1; col<=row;col++){
            line+=col
        }
        console.log(line); 
    }

}
rumSeqPattern(n=5);

