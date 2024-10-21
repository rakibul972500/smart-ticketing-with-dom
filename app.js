// other functionality


const selectedSeatEl= document.getElementById("selected-seat");
console.log(selectedSeatEl)


// menu icons


// seat booking handler
function handleSelectSeat(event){
    console.log(event.innerText);
event.classList.add('bg-primary')

   selectedSeatEl.innerHTML=`
    <li class="text-base flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
</li>`

   

}