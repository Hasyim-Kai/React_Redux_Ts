import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from '../components/Loading';
import { fetchCarDetail } from '../redux/car/carAction';

export default function CarDetailPage() {
   const Cars = useSelector((state: RootStateOrAny) => state.car)
   const dispatch = useDispatch()
   const { id } = useParams();

   useEffect(() => { dispatch(fetchCarDetail(id)) }, [])

   return <>
      <h2 className='font-bold text-3xl'>Cars Detail</h2>
      <div>
         {Cars.loading ? <Loading /> : Cars.error ? <h2>{Cars.error}</h2> : <p>{Cars.carDetail.name}</p>}
      </div>
      <button className='p-3 bg-lime-500 hover:bg-lime-400 text-white rounded-lg' onClick={() => dispatch(fetchCarDetail(id))}>Refresh</button>
   </>
}