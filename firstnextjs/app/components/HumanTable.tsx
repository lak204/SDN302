"use client";

import { useEffect, useState } from "react";

interface Human {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

export default function HumanTable() {
  const [humans, setHumans] = useState<Human[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHumans = async () => {
      try {
        const response = await fetch("/api/humans");
        const data = await response.json();
        setHumans(data);
      } catch (error) {
        console.error("Error fetching humans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHumans();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-4xl">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Occupation
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {humans.map((human) => (
            <tr key={human.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {human.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {human.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {human.age}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {human.occupation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
