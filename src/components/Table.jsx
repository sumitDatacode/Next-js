import React from 'react'

const Table = () => {
  const table = [
    { id: 1, title: "The Life is Shorting !!", date: "23 Jan 2024", status: "Completed" },
    { id: 2, title: "The Life is Shorting !!", date: "24 Jan 2024", status: "Pending" },
    { id: 3, title: "The Life is Shorting !!", date: "25 Jan 2024", status: "Pending" },
    { id: 4, title: "The Life is Shorting !!", date: "26 Jan 2024", status: "Pending" },

  ]

  const statusColors = {
    Completed: "text-[#7DEF0B]",
    Pending: "text-[#FFC70E]",
  };


  return (
    <div className='font-[700]'>
      <h2 className='text-2xl'>Reading Plan</h2>
      <div className='flex gap-[210px] mt-12 mb-12'>
          <h1 className='text-4xl'>Chapters: <span className='text-[#4A83F6]'>20</span></h1>
          <h1 className='text-4xl'>Days: <span className='text-[#4A83F6]'>20</span></h1>
    
      </div>

      <div className="space-y-6 mb-10">
          {table.map((chapter) => (
            <div
              key={chapter.id}
              className="flex justify-between items-center "
            >
              <div className="inline-block  text-xl  font-[700]">Chapter {chapter.id}</div>
              <div className="w-1/4  text-xl font-[400]">{chapter.title}</div>
              <div className="w-1/5  text-xl text-[#4A83F6] font-[400]">{chapter.date}</div>
              <div className={`w-1/7 text-xl  font-[400] ${statusColors[chapter.status]}`}>
                {chapter.status}
              </div>
            </div>
          ))}
        </div>

     </div>
  )
}

export default Table
