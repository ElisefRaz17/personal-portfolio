import "./Chips.css";
import React from "react";
import ChipsProvider, {useChipsContext} from "./ChipsContext.tsx";
import DeleteIcon from "@mui/icons-material/Delete";
import { ChipList, ClickEventArgs } from '@syncfusion/ej2-buttons';

const Chips = () => {
 return( <div className="flex gap-2">
  <div
    className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
    <span className="">chip filled</span>
  </div>
  <div
    className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
    <span className="">chip gradient</span>
  </div>
  <div
    className="relative grid select-none items-center whitespace-nowrap rounded-full border border-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-700">
    <span className="">chip outlined</span>
  </div>
  <div
    className="relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">
    <span className="">chip ghost</span>
  </div>
</div>)
}

// type ChipsContentProps = {
//     items:{
//     label: string;
//     onDelete: () => void;
//     size: "small" | "medium";
//     clickable: boolean;
//     }[];
// }

// type ChipsComposition = {
//     Chip: (props: ChipsContentProps) => React.ReactNode;
// }

// type ChipsProps = {
//     children: React.ReactNode;
// }

// type ChipsWrapper = (props: ChipsProps) => React.ReactNode;

// const Chips: ChipsWrapper & ChipsComposition = ({ children }) => {
//     return <div>{children}</div>;
// };

// Chips.Chip = ({ items }) => {
//     return (
//         <div className="chips">
//             {items.map(({ label, onDelete, size, clickable }) => (
//                 <div
//                     key={label}
//                     className={`chip ${size} ${clickable ? "clickable" : ""}`}
//                     onClick={clickable ? onDelete : undefined}
//                 >
//                     {label}
//                     {clickable && <span className="delete" onClick={onDelete}><DeleteIcon/></span>}
//                 </div>
//             ))}
//         </div>
//     );
// };

// const Chips =  ()=>{
// new ChipList({chips: ['Send a text', 'Set a remainder', 'Read my emails ', 'Set alarm'],
//     click: (e: ClickEventArgs)=>{
//        alert('you have clicked ' + e.text)
//     } }, '#chip');
// }

export default Chips;