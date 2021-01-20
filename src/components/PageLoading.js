import React from 'react';
import Loader from './Loader';
import './PageLoading.css';


const PageLoading = () => {
  return (
    <div className="PageLoading">
      <Loader />
      <h4>Cargando...</h4>
    </div>
  )
}

export default PageLoading;
