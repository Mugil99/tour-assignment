const Loading=(props)=>{
    const{setLoad}=props;
   setTimeout(()=>{
    setLoad(false);
   },1000)

    return(
       <h1>
          Text Is Loading...
       </h1>
    )
}
export default Loading;