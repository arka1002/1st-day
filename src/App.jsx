import { useForm } from "react-hook-form";
import { useState } from "react";
import { db } from "./db";
import { useLiveQuery } from 'dexie-react-hooks';
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineMessage, AiOutlineBell } from "react-icons/ai";

function App() {
  const [revenue, setRevenue] = useState("Enter Amount");

  const theList = useLiveQuery(
    () => db.friends.toArray()
  );
  console.log(theList);



  //react-form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const year = data.year;
    const rev = data.revenue;
    const id = await db.friends.add({ year, rev });
  }





  return (
    <div className="App">
      <div className="sidebar h-[99vh] bg-emerald-500 border-8 border-emerald-500 rounded-3xl">
        <div className="profile cursor-pointer">
          <div className="profile-icon w-[80px] h-[80px] bg-red-500 mt-[20px] mx-auto border-4 border-white rounded-full"></div>
        </div>
        <div className="list-icon text-white flex flex-row justify-center mt-[10px] p-4 cursor-pointer">
          <AiOutlineHome className="font-semibold text-xl block mt-[3px]"/>
          <p className="block text-lg font-semibold pl-[10px]">Create Company</p>
        </div>
        <div className="list-icon text-white flex flex-row justify-center mt-[5px] p-4 cursor-pointer">
          <AiOutlineUser className="font-semibold text-xl block mt-[3px]"/>
          <p className="block text-lg font-semibold pl-[10px]">Users</p>
        </div>
        <div className="list-icon text-white flex flex-row justify-center mt-[5px] p-4 cursor-pointer">
          <AiOutlineSetting className="font-semibold text-xl block mt-[3px]"/>
          <p className="block text-lg font-semibold pl-[10px]">Settings</p>
        </div>
        <div className="list-icon text-white flex flex-row justify-center mt-[5px] p-4 cursor-pointer">
          <AiOutlineMessage className="font-semibold text-xl block mt-[3px]"/>
          <p className="block text-lg font-semibold pl-[10px]">Messages</p>
        </div>
        <div className="list-icon text-white flex flex-row justify-center mt-[5px] p-4 cursor-pointer">
          <AiOutlineBell className="font-semibold text-xl block mt-[3px]"/>
          <p className="block text-lg font-semibold pl-[10px]">Notifications</p>
        </div>
      </div>
      <div className="content-area h-screen">
        <div className="heading">
          <p className="text-emerald-500 text-2xl font-bold pl-[43px] pt-[20px]">Hi Micin</p>
        </div>
        <div className="details mt-[50px]">
          <div className="detail-box border-r-2 border-l-2 border-b-2 border-neutral-400 w-[80%] mx-auto rounded-lg h-[80vh]">
            <div className="progress-bar w-[80%] bg-slate-200 h-[15px] mt-[20px] mx-auto border-2 border-slate-200 rounded-lg"></div>
            <div className="another-detailed-box w-[80%] h-[50%] mx-auto mt-[20px]">
              <p className="text-xl font-semibold">Revenue Forecasts?</p>
              <div className="year-list">
                <div className="indie-items w-[60%] bg-slate-100 py-[5px] px-[5px] border-2 border-slate-100 rounded-lg overflow-auto">
                  <span className="text-emerald-500">1. Year: </span><span className="pr-[10px] border-r-4 border-slate-500">1998</span><span className="text-emerald-500 pl-[10px]">Expenses: </span><span className="pr-[10px] border-r-4 border-slate-500">16098</span><span className="text-red-500">Remove</span>
                </div>
              </div>
              <div className="form-area bg-slate-100 border-2 border-slate-100 rounded-lg p-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
                  <div className="flex-1">
                    <label htmlFor="year-select" className="block text-emerald-500 underline underline-offset-1 font-semibold">Choose Year</label>

                    <select name="pets" id="year-select" {...register("year", { required: true })}>
                      <option value="1998">1998</option>
                      <option value="2008">2008</option>
                      <option value="2018">2018</option>
                      <option value="2028">2028</option>
                      <option value="2038">2038</option>
                      <option value="2048">2048</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <p className="text-emerald-500 underline underline-offset-1 font-semibold">Revenue</p>
                    <input type="number" {...register("revenue", { required: true })} placeholder={revenue} />
                  </div>
                  <div className="flex-1"><button type="submit" className="bg-emerald-500 text-white px-[20px] py-[3px] border-2 border-emerald-500 rounded-md block mx-auto mt-[8px]">ADD</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
