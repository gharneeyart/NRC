'use client';
import Link from 'next/link';
import { useSearchStore } from '@/store/useSearchStore';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SearchTrain({
  w,
  bg,
  btnBg,
  rounded,
  inputBg,
  gap,
  inputBorder,
  inputPy,
  inputPadding,
  inputText,
  btnText,
  content1,
  content2,
  content3,
  inputW,
  btnWidth,
  py,
  inputText2,
}) {
  const { from, to, date, setFrom, setTo, setDate } = useSearchStore();
  const [stationNames, setStationNames] = useState([]);
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchStationNames = async () => {
      try {
        const response = await axios.get('/trains');
        const trains = response.data;
        const stations = Array.from(
          new Set(
            trains.flatMap((train) => [
              train.departure.station,
              train.arrival.station,
            ])
          )
        );
        setStationNames(stations);
      } catch (error) {
        console.error('Error fetching station names:', error);
      }
    };

    fetchStationNames();
  }, []);

  useEffect(() => {
    setIsFormValid(from !== '' && to !== '' && date !== '');
  }, [from, to, date]);

  const handleFrom = () => {
    setShowFrom(true);
  };
  const handleTo = () => {
    setShowTo(true);
  };
  const handleDate = () => {
    setShowDate(true);
  };

  const handleFindTrain = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsLoading(true);
    // Simulate a small delay for better UX
    setTimeout(() => {
      router.push(`/trip?from=${from}&to=${to}&date=${date}`);
      setIsLoading(false);
    }, 500);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <form
        className={`${w} ${bg} flex flex-col lg:flex-row ${gap} items-end ${py} ${rounded} justify-between px-3 md:px-8 lg:px-10 mx-auto shadow-xl container`}
        onSubmit={handleFindTrain}
      >
        <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
          <label htmlFor="from">{content1}</label>
          <select
            id="from"
            value={from}
            onClick={handleFrom}
            className={`${showFrom ? `${inputText2}` : `${inputText}`} ${inputBg} ${inputBorder}  ${inputPy} outline-none rounded-md px-2`}
            onChange={(e) => {
              const selected = e.target.value;
              setFrom(selected);
              if (selected === to) setTo(''); // Clear destination if same as origin
            }}
          >
            <option value="">Select Originating Station</option>
            {stationNames.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1 w-full lg:w-[25%] xl:w-[30%]">
          <label htmlFor="to">{content2}</label>
          <select
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onClick={handleTo}
            className={`${showTo ? `${inputText2}` : `${inputText}`} ${inputBg} ${inputBorder}  ${inputPy} outline-none rounded-md px-2`}
          >
            <option value="">Select Destination Station</option>
            {stationNames
              .filter((station) => station !== from)
              .map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
          </select>
        </div>
        <div className={`flex flex-col gap-1 ${inputW}`}>
          <label htmlFor="date">{content3}</label>
          <input
            type="date"
            id="date"
            value={date}
            min={today}
            onClick={handleDate}
            className={`${showDate ? `${inputText2}` : `${inputText}`} ${inputBg} ${inputBorder}  ${inputPadding} outline-none rounded-md px-2 w-full`}
            placeholder="Select Date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        
        {isFormValid ? (
          <button
            type="submit"
            className={`${btnBg} ${btnText} py-2.5 rounded-sm text-[14px] ${btnWidth} font-medium text-center flex items-center justify-center gap-2`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Finding Trains...
              </>
            ) : (
              'Find my Train'
            )}
          </button>
        ) : (
          <button
            disabled
            className={`${btnBg} ${btnText} py-2.5 rounded-sm text-[14px] ${btnWidth} font-medium text-center opacity-50 cursor-not-allowed`}
          >
            Find my Train
          </button>
        )}
      </form>
    </div>
  );
}