import { useForm } from "react-hook-form";
import { useState } from "react";
import { db } from "./db";
import { useLiveQuery } from 'dexie-react-hooks';
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting, AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { MdOutlineWavingHand } from "react-icons/md";

function App() {
  const [revenue, setRevenue] = useState("");

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
    setRevenue("");
  }





  return (
    <div className="App">
      <div className="sidebar h-[99vh] bg-emerald-500 border-8 border-emerald-500 rounded-3xl">
        <div className="profile cursor-pointer">
          <div className="profile-icon w-[80px] h-[80px] bg-red-500 mt-[20px] mx-auto border-4 border-white rounded-full"></div>
        </div>

        <div className="pl-[79px] pt-[6px]">

          <div className="list-icon text-white flex flex-row justify-start mt-[10px] p-4 cursor-pointer">
            <AiOutlineHome className="font-semibold text-xl block mt-[3px]" />
            <p className="block text-lg font-semibold pl-[10px]">Create Company</p>
          </div>
          <div className="list-icon text-white flex flex-row justify-start mt-[5px] p-4 cursor-pointer">
            <AiOutlineUser className="font-semibold text-xl block mt-[3px]" />
            <p className="block text-lg font-semibold pl-[10px]">Users</p>
          </div>
          <div className="list-icon text-white flex flex-row justify-start mt-[5px] p-4 cursor-pointer">
            <AiOutlineSetting className="font-semibold text-xl block mt-[3px]" />
            <p className="block text-lg font-semibold pl-[10px]">Settings</p>
          </div>
          <div className="list-icon text-white flex flex-row justify-start mt-[5px] p-4 cursor-pointer">
            <AiOutlineMessage className="font-semibold text-xl block mt-[3px]" />
            <p className="block text-lg font-semibold pl-[10px]">Messages</p>
          </div>
          <div className="list-icon text-white flex flex-row justify-start mt-[5px] p-4 cursor-pointer">
            <AiOutlineBell className="font-semibold text-xl block mt-[3px]" />
            <p className="block text-lg font-semibold pl-[10px]">Notifications</p>
          </div>
        </div>


      </div>
      <div className="content-area h-screen">
        <div className="heading">
          <p className="text-emerald-500 text-2xl font-bold pl-[43px] pt-[20px] flex flex-row gap-2">
            <div>Hi</div>
            <MdOutlineWavingHand className="text-amber-300 mt-[4px]"/>
            <div>Micin</div>
             </p>
        </div>
        <div className="details mt-[50px]">
          <div className="detail-box border-r-2 border-l-2 border-b-2 border-neutral-400 w-[80%] mx-auto rounded-lg h-[80vh]">
            <div className="progress-bar w-[80%] bg-slate-200 h-[15px] mt-[20px] mx-auto rounded-lg">
              <div className="w-[20%] bg-emerald-500 h-[100%] rounded-lg"></div>
            </div>
            <div className="another-detailed-box w-[80%] h-[50%] mx-auto mt-[20px]">
              <p className="text-xl font-semibold">Revenue Forecasts?</p>
              <div className="year-list mt-4">
                {
                  theList?.map(friend => (
                    <div className="indie-items w-[50%] bg-slate-100 py-[5px] px-[5px] border-2 border-slate-100 rounded-lg overflow-auto mt-2">
                      <span className="text-emerald-500">{friend.id}. Year: </span><span className="pr-[21px] border-r-2 border-slate-500">{friend.year}</span><span className="text-emerald-500 pl-[22px]">Expenses: </span><span className="pr-[18px] border-r-2 border-slate-500">{friend.rev}</span><a className="text-red-500 pl-[15px] cursor-pointer" onClick={() => db.friends.delete(friend.id)}>Remove</a>
                    </div>
                  ))
                }
              </div>
              <div className="form-area bg-slate-100 border-2 border-slate-100 rounded-lg p-4 mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
                  <div className="flex-1">
                    <label htmlFor="year-select" className="block text-emerald-500 underline underline-offset-1 font-semibold mb-[10px]">Choose Year</label>

                    <select name="pets" id="year-select" {...register("year", { required: true })} className="py-[5px] px-[18px] rounded-lg bg-white">
                      <option value="1998">1998</option>
                      <option value="2008">2008</option>
                      <option value="2018">2018</option>
                      <option value="2028">2028</option>
                      <option value="2038">2038</option>
                      <option value="2048">2048</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <p className="text-emerald-500 underline underline-offset-1 font-semibold mb-[10px]">Revenue</p>
                    <input type="number" {...register("revenue", { required: true })} placeholder="Enter Amount" className="rounded-lg p-2"/>
                  </div>
                  <div className="flex-1"><button type="submit" className="bg-emerald-500 text-white px-[20px] py-[3px] border-2 border-emerald-500 rounded-md block mx-auto mt-[23px]">ADD</button></div>
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
