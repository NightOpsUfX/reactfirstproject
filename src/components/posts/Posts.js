
// All Posts
import Post from '../post/Post'

export default function Posts({items}) {
    return (
        <div className={'userPostsWrapper'}>
            {
                items.map((value) => <Post item={value}/>)
            }

        </div>
    );
}