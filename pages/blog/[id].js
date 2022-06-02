import React from 'react'
import data from '../../data/data';

const blog = ({_data}) => {


    console.log(_data);
  return (
    <div><h1>{_data.id}</h1></div>
  )

}


export const getStaticPaths = async () => {
   
    const paths = data.map((curElem) => {
      return {
        params: {
          id: curElem.id.toString(),
        },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  };


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const _data =  data.find(item => item.id === parseInt(id))
    console.log(id);
    return {
      props: {
        _data:_data || null,
      },
    };
  };

export default blog