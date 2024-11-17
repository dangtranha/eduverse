

// import React from 'react';

// const Information = () => {
//     return (
//         <div className="bg-white h-screen p-8">

//             <form>
//                 <div class="grid gap-6 mb-6 md:grid-cols-2">
//                     <div>
//                         <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
//                         <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
//                     </div>
//                     <div>
//                         <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
//                         <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
//                     </div>
//                     <div>
//                         <label for="birthday" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
//                         <input type="text" id="birthday" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2024/12/31" required />
//                     </div>
//                     <div>
//                         <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
//                         <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
//                     </div>
//                     <div>
//                         <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
//                         <input type="url" id="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="VietNam" required />
//                     </div>

//                 </div>
//                 <div class="mb-6">
//                     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
//                     <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
//                 </div>


//                 <div className='flex flex-col items-center'>
//                     <button type="edit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change</button>

//                 </div>
//             </form>


//         </div>
//     );
// };

// export default Information;

import React from "react";

const InformationView = ({ userInfo, onEdit }) => {
    return (
        <div className="bg-white h-screen p-8">
            <h1 className="text-2xl font-bold mb-4">User Information</h1>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    {Object.keys(userInfo).map((key) => (
                        <div key={key}>
                            <label className="block mb-2 text-sm font-medium text-gray-900 capitalize">
                                {key.replace(/([A-Z])/g, " $1")} {/* Format key to readable */}
                            </label>
                            <input
                                type="text"
                                value={userInfo[key]}
                                disabled
                                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={onEdit}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Change
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InformationView;
