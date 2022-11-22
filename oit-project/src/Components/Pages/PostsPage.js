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

// You will need to add the access keys when you get them! See example e.g. post.fields.id.content