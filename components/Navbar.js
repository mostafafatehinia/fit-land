import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faDumbbell, faFish, faIdCardClip } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ({ children }) => {
    const { push } = useRouter()
    return (
        <>
            <nav className='flex justify-around py-6 text-sm font-semibold sticky top-0 bg-[#A8DADC]'>
                <div onClick={() => push('/')} className='hover:text-[#0076BF] transition-all duration-200 cursor-pointer'>
                    خانه
                    <FontAwesomeIcon className='pr-2' icon={faHome} />
                </div>
                <div onClick={() => push('/sports')} className='hover:text-[#0076BF] transition-all duration-200 cursor-pointer'>
                    برنامه ی ورزشی
                    <FontAwesomeIcon className='pr-2' icon={faDumbbell} />
                </div>
                <div onClick={() => push('/diet')} className='hover:text-[#0076BF] transition-all duration-200 cursor-pointer'>
                    برنامه ی غذایی
                    <FontAwesomeIcon className='pr-2' icon={faFish} />
                </div>
                <div onClick={() => push('/profile')} className='hover:text-[#0076BF] transition-all duration-200 cursor-pointer'>
                    پروفایل
                    <FontAwesomeIcon className='pr-2' icon={faUserAlt} />
                </div>
                <div onClick={() => push('/about')} className='hover:text-[#0076BF] transition-all duration-200 cursor-pointer'>
                    درباره ی ما
                    <FontAwesomeIcon className='pr-2' icon={faIdCardClip} />
                </div>
            </nav>
            {children}
        </>
    )
}