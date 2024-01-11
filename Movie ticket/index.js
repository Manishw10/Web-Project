let cost = 0;
let seat_no = [];
let cnt=0;

document.addEventListener('DOMContentLoaded', function () {
  const seats = document.querySelectorAll('.seat');
  const seatno=document.getElementById("seat-dis");
 

  seats.forEach(function (seat, index) {
    seat.addEventListener('click', function () {


      // Toggle the background color of the first row of seats
      if (seat.style.backgroundColor === 'cadetblue') {
        seat.style.backgroundColor = '#4e4f51';
        cost -= 100;
        seat_no.pop(index + 1);
        cnt--;
        seatno.innerHTML=cnt;


      } else {
        seat.style.backgroundColor = 'cadetblue';
        cost += 100;
        seat_no.push(index + 1);
        cnt++;
        seatno.innerHTML=cnt;
      }

      // Update the cost display
       document.getElementById("cost").innerHTML = cost;
      console.log(seat_no);
      
    });
  });



  const dis_seat = document.getElementById("display-seat");
  const bookbtn = document.getElementById("bookbtn");
  const name = document.getElementById("user-name");
  const dis_name = document.getElementById("dis-uname");
  const open_popup=document.getElementById("popup");
  const dis_price=document.getElementById("dis-price");

  console.log(open_popup);


  bookbtn.addEventListener('click', function () {
    if(name.value!=""){
    open_popup.classList.add("open-popup");
    seat_no.sort(function(a, b){return a - b});
    dis_name.innerHTML = dis_name.innerHTML + name.value;
    dis_price.innerHTML = dis_price.innerHTML + cost;
    dis_seat.innerHTML = dis_seat.innerHTML + seat_no.join(" ");
    }
    else{
      alert("Enter Name");
    }

  });



});


