import React, { useEffect, useRef } from "react";

function ElementTest() {
  const tmp = [1, 2, 3, 4, 5, 6, 7];
  const test = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (test?.current) {
      // (test.current as any).onchange = () => console.log(1);
      test.current.addEventListener("change", (e: any) => {
        console.log(e);
      });
    }
  }, []);
  return (
    // <ul>
    //   {tmp.map((data, idx) => {
    //     return (
    //       <li key={`${data}-${idx}`} style={{ listStyle: "none" }}>
    //         {data}
    //       </li>
    //     );
    //   })}
    // </ul>
    <input ref={test} />
  );
}

export default ElementTest;
