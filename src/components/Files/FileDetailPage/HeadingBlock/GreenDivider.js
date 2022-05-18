import * as React from "react";

export default function GreenDivider() {
  return (
    <div className="mb-5 mt-5 h-1 flex items-stretch">
      <div className="bg-primary w-[91px] flex-none"></div>
      <div className="bg-primary opacity-60 flex-auto"></div>
    </div>
  );
}
