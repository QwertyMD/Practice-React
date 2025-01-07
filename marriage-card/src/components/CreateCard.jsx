import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreateCard = ({ setisHome }) => {
  const [photos, setPhotos] = useState({ person1: null, person2: null });
  const [names, setNames] = useState({ person1: "", person2: "" });

  const handlePhotoChange = (person, e) => {
    if (e.target.files[0]) {
      setPhotos((prev) => ({
        ...prev,
        [person]: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-2 gap-8">
          {["person1", "person2"].map((person) => (
            <Card key={person} className="p-6">
              <CardContent className="space-y-6">
                <div className="relative">
                  <div className="w-full h-64 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                    {photos[person] ? (
                      <img
                        src={photos[person]}
                        alt={names[person]}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center">
                        <Camera className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">
                          Click to upload photo
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handlePhotoChange(person, e)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${person}-name`}>Name</Label>
                  <Input
                    id={`${person}-name`}
                    value={names[person]}
                    onChange={(e) =>
                      setNames((prev) => ({
                        ...prev,
                        [person]: e.target.value,
                      }))
                    }
                    placeholder="Enter name"
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 hover:scale-105 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => setisHome(true)}
          >
            <Heart className="w-6 h-6 mr-2" />
            Create Marriage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
