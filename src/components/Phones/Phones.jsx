import axios from "axios";
import { Audio } from "react-loader-spinner";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phones = () => {
  // state hooks
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(phones);
  const url = "https://openapi.programming-hero.com/api/phones?search=iphone";

  useEffect(() => {
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>setPhones(data.data));

    axios
      .get(url)
      // .then(data=>setPhones(data.data.data))
      .then((data) => {
        const phonesDataFromAxios = data.data.data;
        const phonesData = phonesDataFromAxios.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesData);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="text-sm m-2 p-4 bg-slate-200 font-bold">
      {isLoading && (
        <div className="flex items-center justify-center">
          <Audio
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
      )}
      <h4 className="text-xl">Total phones: {phones.length}</h4>
      <BarChart width={1200} height={400} data={phones}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price"></Bar>
      </BarChart>
      {/* <h3>{phones.name}</h3> */}
    </div>
  );
};

export default Phones;
