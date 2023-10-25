// const button = document.getElementsByClassName("button")[0];
// const input = document.querySelector("input");
// button.addEventListener("click",()=>{
//     console.log(input.value);
// });



     //  change event type

// input.addEventListener("change",()=>{
//     console.log("ayyo ram");
// });


    //   focus event type
// input.addEventListener("focus",()=>{
//     console.log("inpout focus");
// });


//    blur event type
// input.addEventListener("blur",()=>{
//     console.log("input blur");
// });

// input event type
// input.addEventListener("input",()=>{
//     console.log("input input");
// });

// const select = document.querySelector("select");
// select.addEventListener("change",()=>{
//      console.log(select.value);
// });

const form = document.querySelector("form");

form.addEventListener("submit",(event)=>{
      event.preventDefault();
     let collectingInfo = {
          Name : form.name.value,
          Number : form.number.value,
          Email : form.email.value,
          Gender : form.gender.value

     }
     console.log(collectingInfo);
     form.reset();
});