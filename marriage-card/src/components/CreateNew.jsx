import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Layout } from "lucide-react";

const CreateNew = ({ setisHome }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md mx-auto">
        <div className="rounded-full bg-white/80 p-6 w-24 h-24 mx-auto flex items-center justify-center shadow-md">
          <Layout className="w-12 h-12 text-indigo-400" />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-800">No cards yet</h2>
          <p className="text-gray-500">Create your first card to get started</p>
        </div>
        <Button
          variant="default"
          size="lg"
          className="flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-all bg-indigo-600 hover:bg-indigo-700 hover:scale-105"
          onClick={() => setisHome(false)}
        >
          <Plus className="w-5 h-5" />
          Add marriage card
        </Button>
      </div>
    </div>
  );
};

export default CreateNew;
