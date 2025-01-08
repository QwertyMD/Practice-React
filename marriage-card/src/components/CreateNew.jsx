import React from "react";
import { Layout, Plus } from "lucide-react";
import { Button } from "./ui/button";

const CreateNew = ({ setIsHome }) => {
  return (
    <div className="flex flex-col items-center gap-7 text-center">
      <div className="bg-white h-24 w-24 rounded-full shadow-lg flex justify-center items-center">
        <Layout className="h-14 w-14 text-indigo-400" />
      </div>
      <div className="space-y-3">
        <div className="font-semibold text-2xl">No cards yet</div>
        <div className="text-gray-500">
          Create your first card to get started
        </div>
      </div>
      <Button
        onClick={() => setIsHome(false)}
        className="p-5 transition-all hover:scale-105 shadow-lg bg-indigo-700 hover:bg-indigo-800"
      >
        <Plus className="w-10 h-10" />
        Create a new card
      </Button>
    </div>
  );
};

export default CreateNew;
