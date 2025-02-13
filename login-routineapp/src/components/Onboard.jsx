import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";

const Onboard = ({ setIsLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-blue-200 flex justify-center items-center">
      <Card className="max-w-4xl flex flex-col items-center text-center m-5">
        <CardHeader>
          <CardTitle className="text-xl">Welcome to Routine App</CardTitle>
          <CardDescription>Please Login to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="https://media.discordapp.net/attachments/1276931429338714254/1311298629931237396/get_attachment_url.png?ex=67ae85c4&is=67ad3444&hm=a4c12d2dbcabb27a784e9a813db9db89f851fb769eafd503594299b0b5a116cd&=&format=webp&quality=lossless&width=572&height=572"
            alt="Logo"
            className="w-96 h-96"
          />
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => setIsLogin(true)}
            className="px-10 py-5 bg-[#f84178] hover:bg-[#f84178] shadow-[0_2px_5px_#f84178] active:scale-90 rounded-full transition"
          >
            Go to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Onboard;
