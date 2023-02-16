import { useForm } from "react-hook-form";


function App() {
  //react-form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      <div className="sidebar h-[99vh] bg-emerald-500 border-8 border-emerald-500 rounded-3xl"></div>
      <div className="content-area h-screen">
        <div className="heading">
          <p className="text-emerald-500 text-2xl font-bold pl-[43px] pt-[20px]">Hi Micin</p>
        </div>
        <div className="details mt-[50px]">
          <div className="detail-box border-2 border-neutral-400 w-[80%] mx-auto rounded-lg h-[80vh]">
            <div className="progress-bar w-[80%] bg-slate-200 h-[15px] mt-[20px] mx-auto border-2 border-slate-200 rounded-lg"></div>
            <div className="another-detailed-box w-[80%] h-[50%] mx-auto mt-[20px]">
              <p className="text-xl font-semibold">Revenue Forecasts?</p>
              <div className="year-list">
                <div className="indie-items w-[60%] bg-slate-100 py-[5px] px-[5px] border-2 border-slate-100 rounded-lg overflow-auto">A</div>
              </div>
              <div className="form-area">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Select Year Field */}
                  <div>
                    <label for="year-select">Choose Year</label>

                    <select name="pets" id="year-select" {...register("year", { required: true })}>
                      <option value="">--Please choose a year--</option>
                      <option value="1998">1998</option>
                      <option value="2008">2008</option>
                      <option value="2018">2018</option>
                      <option value="2028">2028</option>
                      <option value="2038">2038</option>
                      <option value="2048">2048</option>
                    </select>
                  </div>
                  <div>
                    <p>Revenue</p>
                    <input type="number" {...register("revenue", { required: true })}/>
                  </div>
                  <button type="submit">Add</button>
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
