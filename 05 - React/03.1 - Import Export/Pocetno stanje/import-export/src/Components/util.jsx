  export function wufwuf(){
    const age=11;
    const myear=new Date().getFullYear();
    function dif(a,b) {
        return a-b;
    }
    return <p>Rođen je  {dif(myear.toString(),age)}  godine..</p>
}
