import React from "react";
import styles from "./page.module.css"
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="flex justify-between columns-2 bg-emerald-100 text-black">
        <div className="p-1">
          <h1>Tailwind</h1>
          <button className="w-16 bg-black text-white rounded-lg"> Click Here</button>
        </div>
        <div>
          <h1>Otro Texto</h1>
        </div>
      </div>    
    </>
  );
}
