let arr =[1,2,3,3,4];
arr.forEach(element=>
{
    let a=0;
    for (i=0;i<arr.length;i++)
    {
        if (arr[i]==element && a>=1)
        {
            arr.splice(i,1);
            i--;
            a++;
        }
    }
}
)
console.log(arr);