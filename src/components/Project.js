import React from 'react'

const Project = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Nike Shoe Website</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">A showcase of the latest Nike footwear collection, designed and developed by me.</p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Features and Details</h3>
            <p className="mt-3 text-lg dark:text-gray-600">Explore the finest selection of Nike shoes with detailed descriptions and high-quality images. Seamlessly navigate through categories and find your perfect pair effortlessly.</p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Sleek Design</h4>
                  <p className="mt-2 dark:text-gray-600">The website boasts a modern and intuitive design, ensuring a delightful shopping experience for all users.</p>
                </div>
              </div>
              {/* More features can be added here */}
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img src="https://source.unsplash.com/random/360x480" alt="Nike Shoes" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">School Website</h3>
              <p className="mt-3 text-lg dark:text-gray-600">An educational platform tailored for students, parents, and faculty members, developed to streamline communication and enhance learning.</p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Enhanced Communication</h4>
                    <p className="mt-2 dark:text-gray-600">Efficiently communicate announcements, events, and academic updates to students and parents through a centralized platform.</p>
                  </div>
                </div>
                {/* More features can be added here */}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img src="https://source.unsplash.com/random/361x481" alt="School Website" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Project