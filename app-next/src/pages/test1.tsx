"use client";
import React, { memo, useCallback, useState } from "react";

type Props = {
  val: string;
};
const Test = (props: Props) => {
  console.log("TEst render");
  return <>{props.val}</>;
};

// hook
const useCounter = () => {
  const [count, _setCount] = useState<number>(0);

  const setCount = useCallback((count: number) => {
    _setCount(count);
  }, []);

  return { count, setCount };
};

export const Test2 = () => {
  const [data, setData] = useState<string>("てすと");
  const [data2, setData2] = useState<string>("てすと");

  const { count, setCount } = useCounter();

  // console.log(count);

  const a = data.slice(1);

  return (
    <div className="App">
      <Test val={a} />
      <br />
      <Test val={data} />
      <br />
      <Test val={data2} />

      <br />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          // setData("あいう");
          // setData2(data2 + "2");
          setCount(count + 1);
        }}
      >
        ぼたん
      </button>
    </div>
  );
};

export default Test2;
