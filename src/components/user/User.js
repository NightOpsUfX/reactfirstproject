// export default function User({item: {name, username, id, company, email, phone, website}}) {
//     return(
//         <div>
//             <h2>{name}</h2>
//             <div>
//                 <p>User Login: {username}</p>
//                 <p>User ID: {id}</p>
//                 <p>User Company {company.name}</p>
//                 <p>User Email {email}</p>
//                 <p>User Phone {phone}</p>
//                 <p>User Web Site {website}</p>
//             </div>
//         </div>
//     )
// }
///////////////////////////////////
//////////////////////////////////

// Single User

import {useEffect, useState} from "react";
import Posts from "../posts/Posts";

export default function User ({item}) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + item.id + '/posts')
            .then(value => value.json())
            .then(value => {
                console.log(value);
                setPosts(value);
            });

    }, [])
    return (
        <div className={'userItem userItem' + '-' + item.id}>
            <h2>{item.name}</h2>
            <Posts items={posts}/>


        </div>
    )
}
