import { useEffect, useState } from "react";

const BookMotivateQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<string>("");

  const quotesArr = [
    "Reading books makes you smarter.",
    "Books help you learn new things.",
    "Reading improves your vocabulary.",
    "Books take you to new places in your mind.",
    "Books help you relax and reduce stress.",
    "Reading helps you focus better.",
    "Books inspire you to be creative.",
    "Reading books improves your writing skills.",
    "Reading makes your brain stronger.",
    "Books give you good ideas.",
    "Reading helps you remember things.",
    "Books improve your concentration.",
    "Reading helps you solve problems.",
    "Books show you new ways to think.",
    "Reading helps you make better choices.",
    "Books inspire you to try new things.",
    "Reading helps you feel more confident.",
    "Reading improves your imagination.",
    "Books give you a break from daily worries.",
    "Reading makes you more curious.",
    "Books teach you new skills.",
    "Reading helps you think critically.",
    "Books show you courage and hope.",
    "Reading helps you feel calm.",
    "Books improve your memory.",
    "Books teach important life lessons.",
    "Reading helps you meet new ideas.",
    "Books build your confidence.",
    "Reading helps you enjoy quiet time.",
    "Books help you dream big.",
    "Reading gives you knowledge.",
    "Books help you grow mentally.",
    "Reading helps you relax before sleep.",
    "Books open your mind to new ideas.",
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArr.length);
    const randomQuote = quotesArr[randomIndex];

    setCurrentQuote(randomQuote);
  };

  useEffect(() => {
    if (currentQuote === "") getRandomQuote();

    const interval = setInterval(() => {
      getRandomQuote();
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-5">
      <p className="text-zinc-700 text-sm">Simple Truths About Reading</p>
      <h6 className="text-xl">{currentQuote}</h6>
    </div>
  );
};

export default BookMotivateQuote;
