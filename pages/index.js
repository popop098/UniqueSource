import {Badge} from "flowbite-react";

export default function Home() {
    return (
        <div className="h-screen">
            <div className="h-2/3 bg-gradient-to-r from-violet-500 to-fuchsia-700">
                <div className="px-36">
                    <div className="flex h-32">
                        <div className="m-auto">
                            <h1 className="text-4xl font-bold">이곳에서 다양한 템플릿들을 만나보세요!</h1>

                        </div>
                    </div>
                    <form>
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative">
                            <div
                                className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                   className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search Mockups, Logos..." required/>
                            <button type="submit"
                                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                            <div className="py-1 px-2 text-sm font-medium text-gray-900 rounded-lg bg-cyan-400">
                                React.js
                            </div>
                            <div className="py-1 px-2 text-sm font-medium text-gray-900 rounded-lg bg-cyan-400">
                                Next.js
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
