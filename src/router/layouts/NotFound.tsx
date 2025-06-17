import GradientButton from '../../components/ui/GradientButton'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='p-80 text-center'>
        <div className="m-auto">
            <p className='m-2'>Page not found! Click the link to return home.</p>
        <GradientButton text="Return Home" onClick={() => navigate("/")} />
        </div>
    </div>
  )
}

export default NotFound