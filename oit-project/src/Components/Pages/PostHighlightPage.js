import PostHighlight from '../PostHighlight';
import { useParams } from 'react-router-dom';

function PostHighlightPage({ posts }) {

    const { id } = useParams();

    return (
        <div className="postHighlightPage" >
            <div>
                {posts.map(post => post.id.replaceAll(`/`, `-`) === id ?
                    <PostHighlight key={post.id} profileName={post.username} picture={post.media_url} caption={post.caption} /> : <p key={post.id}></p>)}
            </div>
        </div>
    );
};

export default PostHighlightPage;

// You will need to add the access keys when you get them! See example e.g. post.fields.id.content