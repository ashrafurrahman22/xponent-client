import { useEffect, useState } from "react";

const useIdentity = () =>{
    const [identities, setIdentities] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/identity')
        .then(res => res.json())
        .then(data => setIdentities(data))
    } , [identities])
    return [identities, setIdentities];
}

export default useIdentity;