import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball, faSoccerBall, faVolleyball, faDumbbell, faHandFist, faPersonHiking } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';

export default function Sports () {
    const { push } = useRouter()
    return (
        <div>
            <Head>
                <title>
                    فیت لند |  برنامه ی ورزشی
                </title>
            </Head>
            <div className="flex h-screen justify-around items-center gap-x-2 text-center -mt-20 flex-wrap">
                <div onClick={() => push('/sports/fitness')} className='w-1/4 cursor-pointer bg-white h-1/4 flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-lg transition-all duration-500'>
                    <FontAwesomeIcon className='text-2xl -mt-8 py-6' icon={faDumbbell} />
                    تناسب اندام
                </div>
                <div className='w-1/4 cursor-pointer bg-white h-1/4 flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-lg transition-all duration-500'>
                    <FontAwesomeIcon className='text-2xl -mt-8 py-6' icon={faBasketball} />
                    بسکتبال
                </div>
                <div className='w-1/4 cursor-pointer bg-white h-1/4 flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-lg transition-all duration-500'>
                    <FontAwesomeIcon className='text-2xl -mt-8 py-6' icon={faHandFist} />
                    رزمی
                </div>
                <div className='w-1/4 cursor-pointer -mt-40 bg-white h-1/4 flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-lg transition-all duration-500'>
                    <FontAwesomeIcon className='text-2xl -mt-8 py-6' icon={faVolleyball} />
                    والیبال
                </div>
                <div className='w-1/4 cursor-pointer -mt-40 bg-white h-1/4 flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-lg transition-all duration-500'>
                    <FontAwesomeIcon className='text-2xl -mt-8 py-6' icon={faSoccerBall} />
                    فوتبال
                </div>
                <div className='w-1/4 cursor-pointer -mt-40 bg-white h-1/4 flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-lg transition-all duration-500'>
                    <FontAwesomeIcon className='text-2xl -mt-8 py-6' icon={faPersonHiking} />
                    کوه نوردی
                </div>
            </div>
        </div>
    )
}