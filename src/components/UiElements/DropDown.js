import * as React from "react";

export default function DropDown({variant}) {
    switch (variant){
        case "S":
            return <div>S</div>;
        case "M":
            return <div>M</div>;
        case "P":
            return <div>P</div>;
        default:
            return <div>Default</div>;
      } 
}