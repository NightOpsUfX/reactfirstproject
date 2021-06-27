
// Single Post

export default function Post ({item}) {
    return (
        <div className={'userSinglePost'}>
            <h3 className={'postTitle'}>{item.title}</h3>
            <p className={'postBody'}>{item.body}</p>
        </div>
    )
}