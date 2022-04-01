import React from "react";
import { getDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
    
    const character = useSelector((state) => state.detail);
  
    return (
        
    )
    
    
}
