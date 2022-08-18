import { VscEmptyWindow } from "react-icons/vsc";
import { usePosts } from "../context/postContext.js";

export function HomePage() {
  const { posts } = usePosts();

  if(posts.length===0) {
    return (
      <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 h-48 text-white"/>
        <h1 className="text-white text-2xl">
          No hay publicaciones cargadas!!
        </h1>
      </div>
    )
  }

  return (
    <div className="text-white bg-black">
    {posts.map(post =>(
      <div key={post._id}>
        {post.title}

        {post.description}

      </div>
    ))}
    </div>
  )
}

