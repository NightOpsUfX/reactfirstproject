// import {useEffect, useState} from "react";
// import User from '../user/User';
//
//
// export default function Users () {
//     let [userslist, setUsersList] = useState([]);
//
//     useEffect(()=> {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(response => {
//                 console.log(response);
//                 setUsersList(response);
//             });
//     }, []);
//
//     return (
//         <div>
//             {
//                 userslist.map(value => <User item={value}/>)
//             }
//         </div>
//     )
// }

////////////////////
////////////////////
import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users () {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                // console.log(value)
                setUsers(value);
            });

    }, [])

    return (
        <div>
            {
                users.map(value => <User item={value}/>)
            }
        </div>
    );
}