import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
        <Post
          nomeUsuario={'jack-sparrow'}
          fotoUsuario={'https://cdn.leouve.com.br/2017/05/20170106-jack-sparrow.jpg'}
          fotoPost={'https://cdn.leouve.com.br/2017/05/20170106-jack-sparrow.jpg'}
        />
        
        <Post
          nomeUsuario={'cardi-b'}
          fotoUsuario={'https://img.buzzfeed.com/buzzfeed-static/static/2020-03/16/20/campaign_images/909db9ff4850/a-mans-remix-of-cardi-b-saying-coronavirus-is-giv-2-3602-1584390625-7_dblbig.jpg'}
          fotoPost={'https://img.buzzfeed.com/buzzfeed-static/static/2020-03/16/20/campaign_images/909db9ff4850/a-mans-remix-of-cardi-b-saying-coronavirus-is-giv-2-3602-1584390625-7_dblbig.jpg'}
        />
      </div>
    );
  }
}

export default App;
