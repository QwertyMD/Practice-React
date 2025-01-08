import { Heart, Image } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const CreateCard = ({ setIsHome }) => {
  const [images, setImages] = useState({ Bride: null, Bridegroom: null });

  const handleImageChange = (e, person) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => ({ ...prevImages, [person]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex gap-9">
        {["Bride", "Bridegroom"].map((person) => (
          <Card key={person} className="shadow-lg">
            <CardContent className="p-5 space-y-9">
              <div className="w-full h-48 rounded-lg border-2 flex justify-center items-center relative">
                {images[person] && (
                  <img
                    src={images[person]}
                    alt={person}
                    className="absolute rounded-lg w-full h-full"
                  />
                )}
                <Input
                  type="file"
                  accept="image/*"
                  className="absolute opacity-0 cursor-pointer h-full"
                  onChange={(e) => handleImageChange(e, person)}
                />
                <Image className="text-gray-300 w-12 h-12" />
              </div>
              <div className="">
                <Label>Name of {person}:</Label>
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
  );
};

export default CreateCard;
