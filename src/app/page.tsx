"use client";

import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const NegativeWords = [
    "No",
    "Are you sure?",
    "Think again!",
    "You'are breaking my heart",
    "Certainly sure",
  ];

  const [noCount, setNoCount] = useState(0);
  const [yesCount, setYesCount] = useState(1);

  const [ifYes, setIfYes] = useState(false);

  const paddingYes = yesCount * 5 + "rem";
  const paddingYesH = yesCount * 2.5 + "rem";

  const NegativeText =
    noCount >= NegativeWords.length
      ? (setNoCount(1), NegativeWords[noCount])
      : NegativeWords[noCount];

  return (
    <div className="container mx-auto">
      <div
        className={`flex flex-col items-center w-screen h-screen bg-white text-black py-8 overflow-hidden ${
          ifYes && "hidden"
        }`}
      >
        <div className="w-2/6 h-[8rem] sm:h-[12rem] md:h-[17rem] lg:h-[20rem] relative">
          <Image
            alt="Cute Bear"
            src={
              "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            }
            objectFit="contain"
            layout="fill"
            className="relative block"
          />
        </div>
        <div className="">
          <h1 className="text-xl sm:test-2xl md:text-3xl">Will you be my valentine?</h1>
        </div>

        <div
          className={`mt-6 flex items-center justify-start gap-6 lg:h-[80vh] overflow-hidden`}
        >
          <button
            style={{
              width: paddingYes,
              height: paddingYesH,
            }}
            onClick={() => setIfYes(true)}
            className={`bg-green-500 rounded-md text-white `}
          >
            Yes
          </button>
          <button
            onClick={() => (setNoCount(noCount + 1), setYesCount(yesCount + 1))}
            className="bg-red-500 px-8 py-2 rounded-md text-white "
          >
            {NegativeText}
          </button>
        </div>
      </div>

      <div
        className={`${
          !ifYes && "hidden"
        } w-screen h-screen flex flex-col items-center overflow-hidden bg-white text-black`}
      >
        <div className="w-2/6 h-[20rem] relative">
          <Image
            alt="Cute Bear"
            src={
              "https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.gif"
            }
            objectFit="contain"
            layout="fill"
            className="relative block"
          />
        </div>
        <div className="">
          <h1 className="text-3xl">{" Okay! Let's meet tomorrow"}</h1>
        </div>

        <button
          onClick={() => (setIfYes(false), setYesCount(1), setNoCount(0))}
          className="bg-green-500 text-white mt-4 px-8 py-2 rounded-md"
        >
          Reanswer
        </button>
      </div>
    </div>
  );
};

export default Home;
