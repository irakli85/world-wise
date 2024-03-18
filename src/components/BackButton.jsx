import Button from './Button'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const handleBack = (e) => {
        e.preventDefault()
        navigate(-1)
      }
  return (
    <Button type='back' onClick={handleBack}>&larr; Back</Button>   
  )
}

export default BackButton