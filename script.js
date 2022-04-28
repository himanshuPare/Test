var arra=[12,25,3,13,5,6,1,0,25,0,5]

function Mysort(MyArray){
    var temp,i,j;
    var n=MyArray.length;

    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(MyArray[i] < MyArray[j]){
                temp=MyArray[i];
                MyArray[i]=MyArray[j];
                MyArray[j]=temp;
            }

        }

    }
    return MyArray;
}

console.log(Mysort(arra))