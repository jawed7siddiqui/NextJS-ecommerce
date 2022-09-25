// import React from "react";

// export default function Thirdcount() {
//   const countdown2 = () => {
//     const countDate3 = new Date("July 17, 2022 00:00:00");
//     const now3 = new Date().getTime();
//     const gap3 = countDate3 - now3;

//     const second3 = 1000;
//     const minute3 = second3 * 60;
//     const hour3 = minute3 * 60;
//     const day3 = hour3 * 24;

//     const textDay3 = Math.floor(gap3 / day3);
//     const textHour3 = Math.floor((gap3 % day3) / hour3);
//     const textMinute3 = Math.floor((gap3 % hour3) / minute3);
//     const textSecond3 = Math.floor((gap3 % minute3) / second3);

//     document.querySelector(".day3").innerText = textDay3;
//     document.querySelector(".hour3").innerText = textHour3;
//     document.querySelector(".minute3").innerText = textMinute3;
//     document.querySelector(".second3").innerText = textSecond3;

//     if (gap3 < 0) {
//       clearInterval(countdown2);
//       document.querySelector(".day3").innerText = "😢";
//       document.querySelector(".hour3").innerText = "😢";
//       document.querySelector(".minute3").innerText = "😢";
//       document.querySelector(".second3").innerText = "😢";
//     }
//   };

//   setInterval(() => {
//     countdown2();
//   }, 1000);

//   return (
//     <div>
//       <button className="py-1 px-8 text-lg text-gray-100 font-medium tracking-wide antialiased">
//         <div className="countdown flex justify-center gap-2 md:gap-4">
//           <div className="container-day bg-[#193247] rounded-sm py-1 px-2">
//             <h3 className="day3 text-3xl">Time</h3>
//             {/* <h3 className="text-sm capitalize">Days</h3> */}
//           </div>
//           <div className="container-hour bg-[#193247] rounded-sm py-1 px-2">
//             <h3 className="hour3 text-3xl">Time</h3>
//             {/* <h3 className="text-sm capitalize">Hour</h3> */}
//           </div>
//           <div className="container-minute bg-[#193247] rounded-sm py-1 px-2">
//             <h3 className="minute3 text-3xl">Time</h3>
//             {/* <h3 className="text-sm capitalize">minute</h3> */}
//           </div>
//           <div className="container-second bg-[#193247] rounded-sm py-1 px-2">
//             <h3 className="second3 text-3xl">Time</h3>
//             {/* <h3 className="text-sm capitalize">second</h3> */}
//           </div>
//         </div>
//       </button>
//     </div>
//   );
// }
