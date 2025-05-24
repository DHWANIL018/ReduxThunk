// Shree Ganeshay namah 

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateuser, viewuser } from '../Redux/userslice'
function Update() {

    const { id } = useParams()
    console.log(id)
    const {handleSubmit,register,reset} = useForm()
    const dispatch = useDispatch()
    const redirect =useNavigate()
    const { userlist } = useSelector((state) => state.user);
    console.log(userlist)


    useEffect(()=>{
        dispatch(viewuser())
    },[dispatch])


    const singleuser = userlist.find(user=>{
        return user.id == id
    })

    useEffect(()=>{
        if(singleuser){
            reset(singleuser)
        }
    },[singleuser])

    function submtie(data){
        // console.log(data)
        dispatch(updateuser(data))
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

export default Update
