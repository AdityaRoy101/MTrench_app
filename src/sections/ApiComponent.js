import React, { useEffect, useState } from 'react'
import Tables from '../components/Tables';

const ApiComponent = () => {
    const [initialobj, setinitialobj] = useState([]);
    const [newobj, setnewobj] = useState([]);


    useEffect( () => {

      const func = async () => {
        return await fetch('https://mocki.io/v1/9344f665-4fa5-4feb-9fcd-32014c32050d')
        .then(res => res.json())
        .then(data => {

          // Setting the initial data
          setinitialobj(data);

          // traversing over the actors array
          let objj = data.actors;

          let arr = [];
          let k = 0;
          for(var key in objj){
            let name = "";
            let team = "";
            if(typeof objj[key] === "object" && objj[key] != null){
              // if(objj[key].name === "")
                // console.log(objj[key].name);
              name = objj[key].name;
              team = objj[key].team;
            }
            arr.push({
              id: k,
              name: name,
              team: team
            })

            k = k+1;
          }

          console.log(arr);
          setnewobj(arr);
        })
        .catch(error => console.log(error))
      }

      func();
    },[])

    // Some parts demonstrated which i got confused
    // =======================================================
    // const iterateOverObjects = (objj) => {

    //   var theNewObj = [];
    //   var k = 0;
    //   let name = "";
    //   let team = "";
    //   for(var key in objj){

    //     // console.log(key);
    //     // let name = "";
    //     //   let team = "";
    //     if(typeof objj[key] === "object" && objj[key] != null){

    //       iterateOverObjects(objj[key]);

    //     }else{

    //       // console.log(key + "/////" + objj[key])
    //       // let name = "";
    //       // let team = "";
    //       if(key === "name"){
    //         // names[k] = objj[key];
    //         name = objj[key];
    //         // console.log(name);
    //       }
    //       else if(key === "team"){
    //         team = objj[key];
    //         // teams[k] = objj[key];
    //         // console.log(team);
    //       }
    //       k = k+1;
    //     }

    //     theNewObj.push({
    //       id: k,
    //       name: name,
    //       team: team
    //     })
    //     console.log(theNewObj);
    //   }

    //   setnewobj(theNewObj);
    // }

    // const iterateOverObjects = (objj) => {

    //   let arr = [];
    //   let k = 0;
    //   for(var key in objj){
    //     let name = "";
    //     let team = "";
    //     if(typeof objj[key] === "object" && objj[key] != null){
    //       // if(objj[key].name === "")
    //         // console.log(objj[key].name);
    //       name = objj[key].name;
    //       team = objj[key].team;
    //     }
    //     arr.push({
    //       id: k,
    //       name: name,
    //       team: team
    //     })

    //     k = k+1;
    //   }

    //   console.log(arr);
    //   setnewobj(arr);
    // }
    // ================================================================
  
    return (
      <main className=' flex items-center justify-center h-screen'>
        <section className='border-[1.5px] border-black flex flex-col '>
            
            <h1 className=' text-center font-semibold text-[20px] text-black'>{ initialobj.film }</h1>

            {/* Using custom reusable components for tables -> table component */}
            {newobj.map((ele) => {
              return(
                <Tables key={ele.id} name={ele.name} team={ele.team} />
              );
            })}
            
            {/* Setting the image */}
            <img 
              src={initialobj.img_url} 
              alt="ImagefromApi"
              width={300}
              height={100}
              className='border-t-[1.5px] border-black'
            />
            
        </section>
      </main>
    )
}

export default ApiComponent