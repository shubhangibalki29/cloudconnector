import {useState, useEffect };
import { useNavigate};

function Dashboard(){
    const [past, setPost]= useState(" ");
    const [posts, setPosts]=useState(" ");
    const navigate = useNavigate();

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        setPosts(savedPosts);
    },[]);

    const handlePost = () => {
        if(!past) return;

        const updatedPosts = [...posts, post];
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        setPost("");

        
    };
    const handlelogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };
    return(
        <div>
        <h2>Dashboard</h2>

        <textarea
        placeholder="write something..."
        value={post}
        onChange={(e)  => setPost(e.target.value)}
        />
        <button onclick={handlePost}>post</button>
        <button onclick={handlelogout}>logout</button>

        <h3>all posts</h3>
        {posts.map((p, index) => (
            <p key={index}>{p}</p>
        ))}
        </div>
    );
    
}