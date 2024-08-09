
interface CardProps {
  image: string,
  title: string,
  year: number,
}
export default function MovieAddUpdate() {
  { }
  return (
    <div className=" flex flex-col items-center justify-between  lg:p-[100px] pb-[100px] ">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3">
        <section className="max-w-md max-sm:mx-auto self-center">
          <label
            className="flex justify-center w-[380px] h-[380px] lg:w-[500px] lg:h-[500px] px-4 transition bg-[#094a57] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="font-medium text-white">
                Drop an image here
              </span>
            </span>
            <input type="file" name="file_upload" className="hidden" />
          </label>
        </section>
        <section className="max-w-md mx-auto w-[400px] lg:w-[400px] mt-[10px] lg:ml-[150px]">
          <form className="space-y-4">
            <div>
              <input
                id="input1"
                type="text"
                placeholder="Title"
                className="w-full h-[50px] px-3 py-2 bg-[#094a57] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>

              <input
                id="input2"
                type="text"

                placeholder="Publishing year"
                className="w-[60%] h-[50px] mt-[10px] mb-[40px] px-3 py-2  bg-[#094a57] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 border w-full h-[60px] text-white rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 w-full h-[60px] text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 ml-2"
              >
                Submit
              </button>
            </div>
          </form>
        </section>


      </div>
    </div>

  </div>
  );

}
