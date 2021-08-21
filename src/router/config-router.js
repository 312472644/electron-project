import Music from '../pages/music';
import Friend from '../pages/friend';

export default [{
  path: '/',
  name: "music",
  title: "发现音乐",
  alias: '/music',
  component: Music
},
{
  path: '/friend',
  name: "friend",
  title: "朋友",
  component: Friend
}]