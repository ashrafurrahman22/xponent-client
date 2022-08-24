import { useEffect, useState } from "react";

const useIdentity = () =>{
    const [identities, setIdentities] = useState([]);

    useEffect( ()=>{
        fetch('https://shielded-reef-80315.herokuapp.com/identity')
        .then(res => res.json())
        .then(data => setIdentities(data))
    } , [identities])
    return [identities, setIdentities];
}

export default useIdentity;