// import Image from "next/image"

// export default function Illustrations() {
//   return (
//     <div className="absolute left-[98px] top-[72px] h-[569px] w-[566px]">
//       {/* Main hero image */}
//       <div className="absolute left-[35.26px] top-0 h-[545.91px] w-[530.74px] overflow-visible">
//         <Image src="/hero1.svg" alt="Hero illustration" fill />
//       </div>

//       {/* Group 3 */}
//       <div className="absolute inset-y-[78.68%] right-[89.75%] left-0 bottom-[10.02%] top-[78.68%] h-[11.31%] w-[10.25%] overflow-visible">
//         <Image src="/group2.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 4 */}
//       <div className="absolute left-[calc(50%-97.87px)] bottom-[68.17%] top-[23.45%] h-[8.38%] w-[49.54px] overflow-visible">
//         <Image src="/group3.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 5 */}
//       <div className="absolute left-[calc(50%+62.25px)] bottom-[70.17%] top-[25.57%] h-[4.26%] w-[25.21px] overflow-visible">
//         <Image src="/group4.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 6 */}
//       <div className="absolute left-[calc(50%+129.07px)] bottom-[60.73%] top-[35.19%] h-[4.08%] w-[23.61px] overflow-visible">
//         <Image src="/group5.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 7 */}
//       <div className="absolute left-[calc(50%+37.38px)] bottom-[57.7%] top-[38.27%] h-[4.03%] w-[23.94px] overflow-visible">
//         <Image src="/group6.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 8 */}
//       <div className="absolute left-[calc(50%+95.04px)] bottom-[44.9%] top-[51.05%] h-[4.04%] w-[23.84px] overflow-visible">
//         <Image src="/group7.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 9 */}
//       <div className="absolute left-[calc(50%-81.54px)] bottom-[10.96%] top-[85%] h-[4.04%] w-[23.84px] overflow-visible">
//         <Image src="/group8.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 10 */}
//       <div className="absolute left-[calc(50%-110.7px)] bottom-[55.26%] top-[40.38%] h-[4.36%] w-[24.58px] overflow-visible">
//         <Image src="/group9.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 11 */}
//       <div className="absolute left-[calc(50%+141.51px)] bottom-[40.04%] top-[55.69%] h-[4.27%] w-[25.15px] overflow-visible">
//         <Image src="/group10.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 12 */}
//       <div className="absolute left-[calc(50%-151.54px)] bottom-[17.98%] top-[77.77%] h-[4.25%] w-[25.25px] overflow-visible">
//         <Image src="/group11.svg" alt="Illustration element" fill />
//       </div>

//       {/* Group 13 */}
//       <div className="absolute right-[2.94%] left-[88.99%] bottom-[30.71%] top-[60.63%] h-[8.66%] w-[8.07%] overflow-visible">
//         <Image src="/group12.svg" alt="Illustration element" fill />
//       </div>

//       {/* Ellipse 3 */}
//       <div className="absolute left-[28px] top-[185px] aspect-square h-[46px] w-[46px] rounded-full border-2 border-solid border-[#f8b959] object-cover">
//         <Image src="/ellipse-30.png" alt="Ellipse decoration" fill className="rounded-full" />
//       </div>

//       {/* Ellipse 4 */}
//       <div className="absolute left-[390px] top-[497px] aspect-square h-[46px] w-[46px] rounded-full border-2 border-solid border-[#f8b959] object-cover">
//         <Image src="/ellipse-40.png" alt="Ellipse decoration" fill className="rounded-full" />
//       </div>

//       {/* Ellipse 7 */}
//       <div className="absolute right-[12.37%] left-[80.21%] top-[calc(50%-179.5px)] aspect-square h-[42px] w-[7.42%] rounded-full border-2 border-solid border-[#f8b959] object-cover">
//         <Image src="/ellipse-70.png" alt="Ellipse decoration" fill className="rounded-full" />
//       </div>

//       {/* Ellipse 2 */}
//       <div className="absolute left-[148px] top-[527px] aspect-square h-[42px] w-[42px] rounded-full border-2 border-solid border-[#f8b959] object-cover">
//         <Image src="/ellipse-20.png" alt="Ellipse decoration" fill className="rounded-full" />
//       </div>
//     </div>
//   )
// }


import Image from "next/image"

export default function Illustrations() {
  return (
    <div className="  h-[300px]  -translate-x-[-40px] lg:h-[510px] w-full ">
      {/* Main hero image */}
      <div className="absolute  md:mx-1 lg:top-[-60]   h-[90%] md:h-[90%] lg:h-[500px] w-[90%] md:w-[90%] lg:w-[638px] overflow-visible">
        <Image src="/hero1.svg" alt="Hero illustration" fill/>
      </div>

      {/* Group 3 - Hidden on mobile */}
      <div className="block absolute lg:left-[38px] inset-y-[78.68%] right-[89.75%] md:left-[22%] bottom-[10.02%] top-[68.68%] h-[11.31%] w-[10.25%] overflow-visible">
        <Image src="/group2.svg" alt="Illustration element" fill />
      </div>

      {/* Group 4 - Hidden on mobile */}
      <div className=" absolute  left-[calc(50%-97.87px)] bottom-[68.17%] top-[10.45%] h-[8.38%] w-[49.54px] overflow-visible">
        <Image src="/group3.svg" alt="Illustration element" fill />
      </div>

      {/* Group 5 - Hidden on mobile */}
      <div className=" absolute  left-[calc(50%)] bottom-[70.17%] top-[20.57%] h-[4.26%] w-[25.21px] overflow-visible">
        <Image src="/group4.svg" alt="Illustration element" fill />
      </div>

      {/* Group 6 - Hidden on mobile */}
      <div className=" absolute  left-[calc(20%)] bottom-[60.73%] top-[40.19%] h-[4.08%] w-[23.61px] overflow-visible">
        <Image src="/group5.svg" alt="Illustration element" fill />
      </div>

      {/* Group 7 - Hidden on mobile */}
      <div className=" absolute  left-[calc(50%+37.38px)] bottom-[57.7%] top-[28.27%] h-[4.03%] w-[23.94px] overflow-visible">
        <Image src="/group6.svg" alt="Illustration element" fill />
      </div>

      {/* Group 8 - Hidden on mobile */}
      <div className=" absolute left-[calc(30%+95.04px)] bottom-[44.9%] top-[37.05%] h-[4.04%] w-[23.84px] overflow-visible">
        <Image src="/group7.svg" alt="Illustration element" fill />
      </div>

      {/* Group 9 - Hidden on mobile */}
      <div className=" absolute lg:left-[208px] left-[calc(44%-81.54px)] bottom-[10.96%] top-[65%] h-[4.04%] w-[23.84px] overflow-visible">
        <Image src="/group8.svg" alt="Illustration element" fill />
      </div>

      {/* Group 10 - Hidden on mobile */}
      <div className=" absolute  left-[calc(80%-110.7px)] bottom-[55.26%] top-[30.38%] h-[4.36%] w-[24.58px] overflow-visible">
        <Image src="/group9.svg" alt="Illustration element" fill />
      </div>

      {/* Group 11 - Hidden on mobile */}
      <div className=" absolute  left-[calc(55%)] bottom-[40.04%] top-[45.69%] h-[4.27%] w-[25.15px] overflow-visible">
        <Image src="/group10.svg" alt="Illustration element" fill />
      </div>

      {/* Group 12 - Hidden on mobile */}
      <div className=" absolute  left-[calc(58%)] bottom-[17.98%] top-[57.77%] h-[4.25%] w-[25.25px] overflow-visible">
        <Image src="/group11.svg" alt="Illutration element" fill />
      </div>

      {/* Group 13 - Hidden on mobile */}
      <div className=" lg:left-[478px] block absolute right-[2.94%] md:left-[55.99%] left-[75.99%] bottom-[30.71%] top-[50.63%] h-[8.66%] w-[8.07%] overflow-visible">
        <Image src="/group12.svg" alt="Illustration element" fill />
      </div>
      
      {/* Ellipse 3 - Smaller on mobile */}
      <div className="absolute lg:left-[38px] md:left-[200px] left-[2px] top-[120px] md:top-[150px] lg:top-[185px] aspect-square h-[30px] w-[30px] md:h-[38px] md:w-[38px] lg:h-[46px] lg:w-[46px] rounded-full border-2 border-solid border-[#f8b959] object-cover">
        <Image src="/ellipse-30.png" alt="Ellipse decoration" fill className="rounded-full" />
      </div>

      {/* Ellipse 4 - Smaller on mobile */}
      <div className="absolute left-[70%] top-[80%] md:left-[50%] md:top-[85%] lg:left-[390px] lg:top-[397px] aspect-square h-[30px] w-[30px] md:h-[38px] md:w-[38px] lg:h-[46px] lg:w-[46px] rounded-full border-2 border-solid border-[#f8b959] object-cover">
        <Image src="/ellipse-40.png" alt="Ellipse decoration" fill className="rounded-full" />
      </div>

      {/* Ellipse 7 - Smaller on mobile */}
      <div className="absolute right-[12.37%] lg:left-[80.21%] md:left-[58.21%] left-[75.21%] top-[20%] md:top-[30%] lg:top-[calc(50%-179.5px)] aspect-square h-[28px] w-[28px] md:h-[35px] md:w-[35px] lg:h-[42px] lg:w-[7.42%] rounded-full border-2 border-solid border-[#f8b959] object-cover">
        <Image src="/ellipse-70.png" alt="Ellipse decoration" fill className="rounded-full" />
      </div>

      {/* Ellipse 2 - Smaller on mobile */}
      <div className="absolute left-[30%] top-[90%] md:left-[35%] md:top-[90%] lg:left-[148px] lg:top-[427px] aspect-square h-[28px] w-[28px] md:h-[35px] md:w-[35px] lg:h-[42px] lg:w-[42px] rounded-full border-2 border-solid border-[#f8b959] object-cover">
        <Image src="/ellipse-20.png" alt="Ellipse decoration" fill className="rounded-full" />
      </div>
    </div>
  )
}
