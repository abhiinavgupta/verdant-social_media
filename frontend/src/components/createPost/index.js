import { Feeling, LiveVideo, Photo } from "../../svg"
import "./style.css"

export default function CreatePost({user , setPostVisible}) {
  return (
    <div className="createPost">
        <div className="createPost_header">
        <img src={user?.picture} alt="" />
        <div className="open_post" onClick={() => {
                    setPostVisible(true);}}
                    >
        Say hii to world, {user?.first_name}
        </div>
        </div>
        <div className="create_splitter"></div>
        <div className="createPost_body">
        <div className="createPost_icon hover4">
        <LiveVideo color="#f3425f" />  Video Chat
        </div>
        <div className="createPost_icon hover4">
        <Photo color="#4bbf67" />  Photo/video
        </div>
        <div className="createPost_icon hover4">
        <Feeling color="#f7b928" />  Feeling/Activity
        </div>
        </div>
    </div>
  )
}
