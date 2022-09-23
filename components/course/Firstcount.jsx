// import React from "react";

// export default function Firstcount() {
//   const countdown = () => {
//     const countDate = new Date("July 05, 2022 00:00:00");
//     const now = new Date().getTime();
//     const gap = countDate - now;

//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const textDay = Math.floor(gap / day);
//     const textHour = Math.floor((gap % day) / hour);
//     const textMinute = Math.floor((gap % hour) / minute);
//     const textSecond = Math.floor((gap % minute) / second);

//     document.querySelector(".day").innerText = textDay;
//     document.querySelector(".hour").innerText = textHour;
//     document.querySelector(".minute").innerText = textMinute;
//     document.querySelector(".second").innerText = textSecond;

//     if (gap < 0) {
//       clearInterval(countdown);
//       document.querySelector(".day").innerText = "😢";
//       document.querySelector(".hour").innerText = "😢";
//       document.querySelector(".minute").innerText = "😢";
//       document.querySelector(".second").innerText = "😢";
//     }
//   };

//   setInterval(() => {
//     countdown();
//   }, 1000);

//   return (
//     <div>
//       <button className="py-1 px-8 text-lg text-gray-100 font-medium tracking-wide antialiased">
//         <div className="countdown flex justify-center gap-2 md:gap-4">
//           <div className="container-day bg-[#193247] rounded-sm py-1 px-2">
//             <h3 className="day text-3xl">Time</h3>
//             {/* <h3 className="text-sm capitalize">Days</h3> */}
//           </div>
//           <div className="container-hour bg-[#193247] rounded-sm py-1 px-2">
//             <h3 className="hour text-3xl">Time</h3>
//             {/* <h3 className="text-sm capitalize">Hour</h3> */}
//           </div>
//           <div className="container-minute bg-[#193247] rounded-sm py-1 px-2">
//             <h3 className="minute text-3xl">Time</h3>
//             {/* <h3 className="text-sm capitalize">minute</h3> */}
//           </div>
//           <div className="container-second bg-[#193247] rounded-sm py-1 px-2">
//             <h3 className="second text-3xl">Time</h3>
//             {/* <h3 className="text-sm capitalize">second</h3> */}
//           </div>
//         </div>
//       </button>
//     </div>
//   );
// }
