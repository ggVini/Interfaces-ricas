
export function quadradoForEach(arr: number[]): number[] {
    let novo : number[] = [];
    arr.forEach(element => {
       novo.push(element * element) 
    });
    return novo;
}