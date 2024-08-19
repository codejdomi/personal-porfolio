import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
        <div className='flex p-10 flex-col items-start'>
            <div className='flex flex-row p-2'>
                <LocalPhoneIcon/>
                <h2 className='ml-4 xs:text-xs lg:text-sm'>63+ 09505974873</h2>
            </div>
            <div className='flex flex-row p-2'>
                <EmailIcon/>
                <h2 className='ml-4 xs:text-xs lg:text-sm'>francisdelatorre89@gmail.com</h2>
            </div>
            <div className='flex flex-row p-2'>
                <GitHubIcon/> 
                <a href="https://github.com/codejdomi" className='ml-4 hover:text-gray-400 xs:text-sm lg:text-base'>codejdomi</a>
            </div>
            <p className='p-2 xs:text-xs lg:text-sm'>&copy; {new Date().getFullYear()} Francis</p>
        </div>
  )
}

export default Footer

