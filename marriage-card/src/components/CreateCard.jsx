import { Heart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const CreateCard = ({ setIsHome }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      <div className="flex flex-col items-center gap-7">
        <div className="flex gap-5">
          {["Bride", "Bridegroom"].map((person) => (
            <Card key={person}>
              <CardContent>
                {/* <div className="">
                  <Input />
                </div> */}
                <div className="">
                  <Label>Enter the name of {person}:</Label>
                  <Input />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          onClick={() => setIsHome(true)}
          className="p-5 transition-all hover:scale-105 shadow-lg bg-pink-600 hover:bg-pink-700"
        >
          <Heart />
          Create Marriage
        </Button>
      </div>
    </div>
  );
};

export default CreateCard;
