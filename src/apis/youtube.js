import axios from "axios";
const KEY = "AIzaSyCVzOatyTl-T9Ii0LRfFTMsSC_74yleeTs";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      key: KEY
      
  }
});