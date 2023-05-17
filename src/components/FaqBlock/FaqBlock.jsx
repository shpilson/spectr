// import React, { useState } from "react";
// import s from "./FaqBlock.module.scss";
// import cn from "classnames";

// const FaqBlock = ({ title, description, id, i }) => {
//   const [selected, setSelected] = useState(null);

//   const toggleAccordion = (i) => {
//     if (selected === i) {
//       return setSelected(null);
//     }

//     setSelected(i);
//     console.log(selected);
//     console.log(i);
//   };

//   return (
//     <div
//       className={cn(s.faqBlock, "d-fl-col")}
//       onClick={() => toggleAccordion({ i })}
//     >
//       <div className={cn(s.title, "d-fl")}>
//         <h2>{title}</h2>
//         <span className={s.iconPlus}>{selected === i ? "-" : "+"}</span>
//       </div>
//       <div className={s.content}>
//         <p className={s.description}>{description}</p>
//       </div>
//     </div>
//   );
// };

// export { FaqBlock };
