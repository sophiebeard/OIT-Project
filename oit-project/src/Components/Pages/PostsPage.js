import Posts from '../Posts';

function PostsPage({ posts }) {

    return (
        <div className="PostsPage">
            <main>
                {posts.map(post => (
                    <Posts key={post.id} id={post.id.replaceAll('/', '-')} profileName={post.username} caption={post.caption} picture={post.media_url} />))}
            </main>
        </div>
    );
};

export default PostsPage;
