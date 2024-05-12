import React from 'react'

// Creating custom tables components
const Tables = ({ name, team }) => {
    
    // first converting it to lowercase for case sensetivity
    let tt = team.toLowerCase();
  return (
    <main className=' flex justify-center items-center'>
        {tt === "crooks"?
            <section className=' flex bg-red-500 text-white'>
            <div className=' font-medium text-[12px] items-center justify-start w-[150px] border-black border-t-[1.5px]'>
                <h2 className=' pl-1'>{ name }</h2>
            </div>
            <div className=' font-medium text-[12px] items-center justify-start w-[150px] border-black border-t-[1.5px] border-l-[1.5px]'>
                <h2 className=' pl-1'>{ team }</h2>
            </div>
        </section>
            :
            <section className=' flex bg-green-500 text-white'>
                <div className=' font-medium text-[12px] items-center justify-start w-[150px] border-black border-t-[1.5px]'>
                    <h2 className=' pl-1'>{ name }</h2>
                </div>
                <div className=' font-medium text-[12px] items-center justify-start w-[150px] border-black border-t-[1.5px] border-l-[1.5px]'>
                    <h2 className=' pl-1'>{ team }</h2>
                </div>
            </section>
        }
    </main>
  )
}

export default Tables