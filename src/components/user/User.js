export default function User({item}) {
    return(
        <div>
            <h2>{item.name}</h2>
            <div>
                <p>User Login: {item.username}</p>
                <p>User ID: {item.id}</p>
                <p>User Company {item.company}</p>
                <p>User Email {item.email}</p>
                <p>User Phone {item.phone}</p>
                <p>User Web Site {item.website}</p>
            </div>
        </div>
    )
}
///////////

// export default function User ({item}) {
//     return (
//         <div>
//             {item.name}
//         </div>
//     )
// }
