import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const CountdownBox = ({ value, label }) => {
  return (
    <div className="flex lg:w-[156px] w-[80px] p-[17px] flex-col flex-shrink-0 self-stretch rounded-[8px] shadow-[1px_1px_2px_rgba(10,10,130,0.6)] bg-[rgba(0,0,0,0.50)] backdrop-blur-[2px]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl font-bold text-[#8A8ACC]"
      >
        {label === "Seconds" ? (
          value
        ) : (
          <CountUp start={0} end={value} duration={5} />
        )}
      </motion.p>
      <p className="text-[14px] text-[#B0B0DD]">{label}</p>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center text-center z-[100] gap-3">
      <CountdownBox value={timeLeft.days} label="Days" />
      <CountdownBox value={timeLeft.hours} label="Hours" />
      <CountdownBox value={timeLeft.minutes} label="Minutes" />
      <CountdownBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
