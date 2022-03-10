import Head from 'next/head';

export default function Diet () {
    return (
        <div>
            <Head>
                <title>
                    فیت لند | برنامه ی غذایی
                </title>
            </Head>
            <div className='h-screen -mt-20 flex justify-center'>
                <div className='w-2/3 flex justify-center items-center bg-white mt-32 mb-6 p-8 rounded-lg shadow-md'>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    قد (به سانتی متر)
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="۱۸۰" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    وزن (به کیلو گرم)
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="۸۰" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                    هدف(در یک سطر توضیح دهید)
                                </label>
                                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-20 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                سن
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder='20' />
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2 mt-10">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                    دارای بیماری
                                </label>
                                <input className="mr-2 leading-tight" type="checkbox" />
                            </div>
                            <div className="flex flex-wrap  md:w-2/3 -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                        شرح بیماری(در یک سطر توضیح دهید)
                                    </label>
                                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <input type="button" value="دریافت" className='bg-[#0076BF] text-white p-2 shadow-lg cursor-pointer rounded-sm mt-8 active:scale-95 transition-all duration-200' />
                    </form>
                </div>
            </div>
        </div>
    )
}