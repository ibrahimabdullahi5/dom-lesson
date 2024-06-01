// document.getElementById("main")
// document.getElementsByClassName("banner")
// document.getElementById(f1)

//  create with new page with HTML
const heading=document.createElement("h1")
heading.textContent="manipulation"
document.body.append(heading)
heading.style.color="red"
heading.style.fontSize="i6px"

 const newpragraph=document.getElementsByTagName("p")[0]
 newpragraph.textContent = "abdi"
  // newpragraph.remove()
  const pargraph=document.querySelectorAll("p")[0];
  pargraph.style.color="blue"

    // array mod
  //   const array =["abdi","mohamed","rukia","ibro","hussein"]
  //  const orderedlist =document.createElement("ol");
  //  document.body.append(orderedlist);
  //  for(i=0;i<array.length;i++){
  //   let list = document.createElement("li")
  //   list.textContent=array[i]
  //   orderedlist.append(list)
  //  }
const array =["manday","tuesday","wednesday","thursday","friday","days"]
const unorderedlist = document.createElement("ul");
document.body.append(unorderedlist);
for(i=0;i<array.length;i++){
  let list = document.createElement("li")
  list.textContent=array[i]
 unorderedlist.append(list)
}
// const ibrahim =document.createElement("h1")
// ibrahim.textContent="i am software developer"
// document.body.append(ibrahim)

// const newpragraph=document.getElementsByTagName("p")[0]
// newpragraph.textContent=""
// newpragraph.remove()
 
// today lesson even
// const alert=document.getElementsByClassName("alert").addEventListener("click",function (){
//   alert("that your alert");
// });
// const alert=document.getElementById("consloe").addEventListener("click",function(){
//   alert("you have to console message");
//  });