import { ArrowRight, Plus } from "../../../svg";
import "./style.css";
import { stories } from "../../../data/home";
import Story from "./Story";

export default function Stories() {
  return (
    <div className="stories">
                <div className="create_story_card">
               <img className="create_story_image" src="../../../images/default_pic.png" alt="" />
               <div className="plus_story">
                   <Plus color="#fff" />
               </div>
               <div className="story_create_text">Post Story</div>
           </div>
           {
               stories.map((story, i) => (
                   <Story story={story} key={i} />
               ))
           } 
               <div className="white_circle">
                  <ArrowRight color="#fff" />
              </div>
          </div>
  )
}
