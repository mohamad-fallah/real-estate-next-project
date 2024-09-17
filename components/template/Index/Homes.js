import Home from "@/components/modules/Home";
import db from "@/data/db.json";
import React from "react";

export default function Homes() {
  return (
    <>
      <div className="homes">
        {
        db.homes.slice(0, 6).map((home) => (
          <Home key={home.id} {...home} />
        ))
        }
      </div>
    </>
  );
}
