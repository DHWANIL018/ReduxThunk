// Shree Ganeshay namah 
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { adduser } from '../Redux/userslice'
import { useNavigate } from 'react-router-dom'
function AddMovie() {

    const {handleSubmit,register,reset} = useForm()
    const dispatch = useDispatch()
    const redirect = useNavigate()
    function submtie(data){
        dispatch(adduser(data))
        redirect('/view')
    }

  return (
    <div>
      <div className="col-6 mx-auto shadow my-5 p-5" onSubmit={handleSubmit(submtie)}>
    <form action="">

        <div className="my-4">
            <input type="text" className=' form-control' {...register('movieName')} placeholder='Enter Movie Name'/>
        </div>

        <div className="my-4">
            <input type="text" className=' form-control' {...register('movieDirector')}  placeholder='Enter Movie Director'/>
        </div>

        <div className="my-4">
            <input type="text" className=' form-control' {...register('movieActor')} placeholder='Enter Actor Name'/>
        </div>

        <div className="my-4">
            <input type="text" className=' form-control' {...register('movieActress')} placeholder='Enter Actress Name'/>
        </div>

        <div>
            <button className='btn btn-success'>Submit</button>
        </div>

        </form>
      </div>
    </div>
  )
}

export default AddMovie
