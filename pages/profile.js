import Head from 'next/head';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
    },
};

const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'];

export const data = {
    labels,
    datasets: [
        {
            label: 'برنامه رژیمی',
            data: [12, 22, 34, 55, 64, 22, 11],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'برنامه ورزشی',
            data: [17, 28, 14, 9, 23, 16, 2],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};




export default function Profile () {
    return (
        <div>
            <Head>
                <title>
                    فیت لند | پروفایل
                </title>
            </Head>
            <div className='flex justify-center mt-20'>
                <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-[#0076BF]">
                    <img src="images/mo3tafa.jpg" className="w-full" />
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white text-sm bold font-sans">مصطفی فاتحی نیا </h3>
                        <p className="mt-2 font-sans font-light text-white">۱۴۰۰/۱۲/۱۹</p>
                    </div>
                    <div className="flex justify-center pb-3 text-white">
                        <div className="text-center ml-3 border-l pl-3">
                            <h2>۴۲</h2>
                            <span>برنامه ی رژیمی</span>
                        </div>
                        <div className="text-center">
                            <h2>۱۲</h2>
                            <span>برنامه ورزشی</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-1/2 flex mx-auto rounded-md my-20 p-8'>
                <Line options={options} data={data} />
            </div>
        </div>
    )
}


