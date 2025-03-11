import Image from "next/image";
import React from "react";

const Header = ({ userDisplayName }: { userDisplayName: string }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 border-b mb-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-3">
        <p className="text-lg font-semibold">{userDisplayName}</p>
        <Image
          src="https://as1.ftcdn.net/jpg/02/44/43/50/1000_F_244435000_orBnSERPq9fO8MjkGnEH55FeKQKRPdm4.jpg"
          alt={`Avatar de ${userDisplayName}`}
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
