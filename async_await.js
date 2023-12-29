console.log("person1 shows ticket ");
console.log("person2 shows ticket ");

const preMovie = async ()=>{
    const promiseWifeBringTicket=new Promise((res,rej)=>{
        setTimeout(()=>{
            res("ticket")
        },3000)
    })

    const getPopcorn = new Promise((res,rej)=>res("Popcorn"));
    const getButter = new Promise((res,rej)=>res("butter"));
    const getColdDrink = new Promise((res,rej)=>res("coke"));

    let ticket = await promiseWifeBringTicket;
    console.log(`husband: lets go where is ${ticket}` );
    console.log("wife: i want popCorn ");

    let popCorn=await getPopcorn;

    console.log(`husband: your ${popCorn}` );
    console.log(`wife: i want butter in popCorn` );
    
    let butter=await getButter;
    console.log(`husband: your ${butter}`);
    console.log(`wife: i want cold Drink`);

    let coldDrink =await getColdDrink;

    console.log(`husband: your ${coldDrink}` );
    console.log(`wife: let go we are getting late` );


    return ticket



};
 
preMovie().then((msg)=>{console.log(`person3 show ${msg}`)});
console.log("person4 shows ticket ");
console.log("person5 shows ticket ");