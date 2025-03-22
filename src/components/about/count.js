'use client';
import { useEffect, useRef, useState } from 'react';
import 'odometer/themes/odometer-theme-default.css';
import dynamic from 'next/dynamic';

// Dynamically import Odometer with no SSR
const Odometer = dynamic(() => import('odometer'), { ssr: false });

export default function Count() {
  const odometerRefs = {
    customers: useRef(null),
    covered: useRef(null),
    routes: useRef(null),
  };

  const [values, setValues] = useState({
    customers: 100, // Set initial deterministic values
    covered: 140,
    routes: 140,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this runs only on the client

    const customersOdometer = new Odometer({
      el: odometerRefs.customers.current,
      value: 0,
      format: '(,ddd)',
      duration: 2000,
    });
    const coveredOdometer = new Odometer({
      el: odometerRefs.covered.current,
      value: 0,
      format: '(,ddd)',
      duration: 2000,
    });
    const routesOdometer = new Odometer({
      el: odometerRefs.routes.current,
      value: 0,
      format: '(,ddd)',
      duration: 2000,
    });

    let customerTarget = 100;
    let coveredTarget = 140;
    let routeTarget = 140;

    let customerCount = 0;
    let coveredCount = 0;
    let routeCount = 0;

    const customerInterval = setInterval(() => {
      customerCount += 2; // Fixed increment instead of Math.random()
      if (customerCount >= customerTarget) {
        customerCount = customerTarget;
        clearInterval(customerInterval);
      }
      setValues((prev) => ({ ...prev, customers: customerCount }));
    }, 50);

    const coveredInterval = setInterval(() => {
      coveredCount += 2;
      if (coveredCount >= coveredTarget) {
        coveredCount = coveredTarget;
        clearInterval(coveredInterval);
      }
      setValues((prev) => ({ ...prev, covered: coveredCount }));
    }, 100);

    const routeInterval = setInterval(() => {
      routeCount += 2;
      if (routeCount >= routeTarget) {
        routeCount = routeTarget;
        clearInterval(routeInterval);
      }
      setValues((prev) => ({ ...prev, routes: routeCount }));
    }, 100);

    return () => {
      clearInterval(customerInterval);
      clearInterval(coveredInterval);
      clearInterval(routeInterval);
    };
  }, []);

  return (
    <div className="bg-[#006B14] w-11/12 mt-6 lg:mt-0 mb-6 md:mb-0 xl:mb-0 md:mt-0 mx-auto md:w-full rounded-[9px] md:rounded-none ">
      <div className="w-9/12 md:w-10/12 container mx-auto text-white flex flex-col md:flex-row lg:flex-row py-10 gap-4 justify-between">
        <div className="flex lg:flex-row flex-col items-center gap-[14px] ">
          <div className="flex items-center">
            <span
              ref={odometerRefs.customers}
              className="font-bold lg:text-[54px] text-[36px]  odometer"
            >
              {values.customers}
            </span>
            <span className="font-bold lg:text-[54px] text-[36px] mb-2">
              k+
            </span>
          </div>
          <p className="flex flex-row lg:flex-col font-medium gap-[2px] text-left w-28">
            <span>Happy</span>Customers
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-[14px] ">
          <div className="flex items-center justify-center">
            <span
              ref={odometerRefs.covered}
              className="font-bold lg:text-[54px] text-[36px]  odometer"
            >
              {values.covered}
            </span>
            <h1 className="font-bold lg:text-[54px] text-[36px] mb-2">+</h1>
          </div>
          <p className="flex flex-row lg:flex-col  font-medium  gap-[2px]  text-left w-28">
            <span>Routes </span>Covered
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-[14px]">
          <div className="flex items-center">
            <span
              ref={odometerRefs.routes}
              className="font-bold lg:text-[54px] text-[36px]  odometer"
            >
              {values.routes}
            </span>
            <h1 className="font-bold lg:text-[54px] text-[36px] mb-2">+</h1>
          </div>
          <p className="flex flex-row  lg:flex-col font-medium  gap-[2px]  text-left w-28">
            <span>Routes </span>Covered
          </p>
        </div>
      </div>
    </div>
  );
}
