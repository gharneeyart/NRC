'use client';
// import { useSearchStore } from '@/store/useSearchStore';
import SearchTrain from '@/components/reusables/search';
import Class from '@/components/transport/class';
import Hours from '@/components/transport/hours';
import { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import NoTrains from '@/components/transport/noTrains';


function TripContent() {
  // Retrieve the persisted search state
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const date = searchParams.get('date');
  const { auth } = useAuth();
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); 

  useEffect(() => {
    const fetchTrains = async () => {
      if (!auth.user || !auth.token) {
        setError('Unauthorized, no token provided');
        setLoading(false);
        router.push('/auth/login')
        return;
      }

      try {
        const response = await axios.post(
          '/trains/search',
          {
            fromStation: from,
            toStation: to,
            date,
          }
        );
        setTrains(response.data);
      } catch (error) {
        setError(error.response?.data?.message || 'Something went wrong. Please try again.');

      } finally {
        setLoading(false);
      }
    };

    if (from && to && date) {
      fetchTrains();
    }
  }, [from, to, date, auth.user, auth.token]);

  const filterTrainsByTimeOfDay = (timeOfDay) => {
    return trains.filter((train) => train.timeOfDay === timeOfDay);
  };

  const morningTrains = filterTrainsByTimeOfDay('Morning Train');
  const afternoonTrains = filterTrainsByTimeOfDay('Afternoon Train');
  const eveningTrains = filterTrainsByTimeOfDay('Evening Train');


  return (
    <div className="space-y-11 pt-44">
      <SearchTrain
        w="w-11/12"
        bg="bg-[#006B14]"
        gap="gap-8"
        btnBg="bg-[#FFFFFF]"
        inputPy="py-2"
        inputPadding="py-1.5"
        inputBg="bg-[#FFFFFF36]"
        inputBorder="border-2 border-[#FFFFFF61]"
        inputText="text-[#FFFFFF]"
        inputText2="text-[#ffffff]"
        btnText="text-[#006B14]"
        inputW="w-full lg:w-[25%] xl:w-[25%]"
        btnWidth="w-full lg:w-[25%] xl:w-[20%]"
        py="pt-6 pb-6 lg:pt-6 lg:pb-7 xl:pt-6 xl:pb-7 lg:mt-1"
      />

      {loading && <p>Loading trains...</p>}
      {error && <NoTrains/>}

      {!loading && !error && (
        <>
          <div className="space-y-11 mt-6">
            {morningTrains.map((train, index) => (
              <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
                <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
                  <h1>{train.route} | {train.timeOfDay} | {train.trainNumber}</h1>
                </div>
                <div className="lg:px-11 ">
                  <div>
                    <Hours schedule={train} />
                  </div>
                  <div className="border-b"></div>
                  <Class train={train} timeOfDay="Morning" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-11 mt-6">
            {afternoonTrains.map((train, index) => (
              <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
                <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
                  <h1>{train.route} | {train.timeOfDay} | {train.trainNumber}</h1>
                </div>
                <div className="lg:px-11 ">
                  <div>
                    <Hours schedule={train} />
                  </div>
                  <div className="border-b"></div>
                  <Class train={train} timeOfDay="Afternoon" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-11 mt-6">
            {eveningTrains.map((train, index) => (
              <div key={index} className="w-[335px] md:w-[81%] lg:w-11/12 container mx-auto shadow-md rounded-b-md">
                <div className="font-semibold text-[16px] md:text-[20px] px-[39px] xl:text-[29px] text-center bg-[#E2F5E5] py-6 rounded-t-md">
                  <h1>{train.route} | {train.timeOfDay} | {train.trainNumber}</h1>
                </div>
                <div className="lg:px-11 ">
                  <div>
                    <Hours schedule={train} />
                  </div>
                  <div className="border-b"></div>
                  <Class train={train} timeOfDay="Evening" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Trip() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TripContent />
    </Suspense>
  );
}
