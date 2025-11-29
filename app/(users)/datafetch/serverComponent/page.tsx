import React, { Suspense } from "react";
import { User, Users, AlertCircle, CheckCircle2 } from "lucide-react";
import DataCard from "./components/DataCard";
import Loading from "../loading";

const ServerComponent = async (props: any) => {
  const searchParams = await props.searchParams;

  if (!searchParams.name || searchParams.name.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-200">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-amber-100 p-4 rounded-full">
              <AlertCircle className="w-12 h-12 text-amber-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            No Name Provided
          </h2>
          <p className="text-center text-gray-600">
            Please provide a valid name in the URL query parameter
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Gender Detector
          </h2>
          <p className="text-center text-gray-600">
            This is a simple server component that uses the genderize.io API to
            determine the gender of a provided name.
          </p>
        </div>
       <Suspense fallback={<Loading />}>
        <DataCard name={searchParams.name} />
       </Suspense>
         <Suspense fallback={<Loading />}>
        <DataCard name={searchParams.name} />
       </Suspense>
         <Suspense fallback={<Loading />}>
        <DataCard name={searchParams.name} />
       </Suspense>
      </div>
    </div>
  );
};

export default ServerComponent;
