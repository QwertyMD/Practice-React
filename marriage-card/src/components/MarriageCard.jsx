import { Heart, Plus } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const MarriageCard = ({
  setIsHome,
  brideName,
  bridegroomName,
  brideImage,
  bridegroomImage,
}) => {
  return (
    <div className="flex flex-col items-center gap-7 text-center">
      <Card className="shadow-lg max-w-xs md:max-w-2xl">
        <CardContent className="p-5 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-full h-0.5 bg-gray-300"></div>
            <Heart size={32} color="red" className="flex-shrink-0" />
            <div className="w-full h-0.5 bg-gray-300"></div>
          </div>
          <div className="font-medium text-3xl">Getting Married</div>
          <div className="flex flex-col md:flex-row items-center gap-7 justify-center">
            <div className="space-y-1">
              <img
                className="w-48 h-60 rounded-lg object-cover"
                src={brideImage}
                alt={brideName}
              />
              <p className="text-lg font-medium">{brideName}</p>
            </div>
            <Heart size={50} color="red" fill="red" />
            <div className="space-y-1">
              <img
                className="w-48 h-60 rounded-lg object-cover"
                src={bridegroomImage}
                alt={bridegroomName}
              />
              <p className="text-lg font-medium">{bridegroomName}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-96 h-0.5 bg-gray-300"></div>
            <Heart size={32} color="red" className="flex-shrink-0" />
            <div className="w-96 h-0.5 bg-gray-300"></div>
          </div>
        </CardContent>
      </Card>
      <Button
        onClick={() => setIsHome(true)}
        className="p-5 transition-all hover:scale-105 shadow-lg bg-pink-600 hover:bg-pink-700"
      >
        <Plus className="w-10 h-10" />
        Create a new card
      </Button>
    </div>
  );
};

export default MarriageCard;
