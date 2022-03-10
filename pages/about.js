import Head from 'next/head';

export default function About () {
    return (
        <div>
            <Head>
                <title>
                    فیت لند | درباره ی ما
                </title>
            </Head>
            <div className="flex justify-center gap-12 flex-wrap m-8 md:m-0">
                <div className="flex flex-col items-center md:w-1/4 h-72 bg-white mt-40 p-9 relative rounded-md shadow-md">
                    <div className="text-2xl font-semibold mt-8">مصطفی فاتحی نیا </div>
                    <p className="mt-4 text-gray-800"> توسعه دهنده فول استک و دیتا ساینس</p>
                    <p className="mt-6 text-center text-gray-600">
                        صاحب ایده فیت لند با بیش از ۴ سال تجربه توسعه دهنده بودن در زمینه وب و دیتا ساینس
                    </p>
                    <img
                        className="rounded-full border-2 border-white absolute w-32 h-32 -top-20"
                        src={'images/mo3tafa.jpg'}
                    />
                </div>

                <div className="flex flex-col items-center md:w-1/4 h-72 bg-white mt-40 p-9 relative rounded-md shadow-md">
                    <div className="text-2xl font-semibold mt-8">نگار رحمانی</div>
                    <p className="mt-4 text-gray-800">برنامه نویس فرانت اند و بازار یاب</p>
                    <p className="mt-6 text-center text-gray-600">
                        هم بنیان گذار ایده فیت لند با بیش از ۴ سال تجربه توسعه دهنده بودن در زمینه وب
                    </p>
                    <img
                        className="rounded-full border-2 border-white absolute w-32 h-32 -top-20"
                        src={'images/negar.jpg'}
                    />
                </div>
                <div className="flex flex-col items-center md:w-1/4 h-72 bg-white mt-40 p-9 relative rounded-md shadow-md">
                    <div className="text-2xl font-semibold mt-8">آرین رحمانی</div>
                    <p className="mt-4 text-gray-800">برنامه نویس فرانت اند</p>
                    <p className="mt-6 text-center text-gray-600">
                        توسعه دهنده وب با بیش از یک سال تجربه در این زمینه
                    </p>
                    <img
                        className="rounded-full border-2 border-white absolute w-32 h-32 -top-20"
                        src={'images/arian.jpg'}
                    />
                </div>
            </div>
        </div>
    )
}