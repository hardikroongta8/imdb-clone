import MediaTile from './MediaTile';

function ScrollableMediaList({isTV, mediaList}){
    const mediaCards = mediaList.map(media => <MediaTile isTV={isTV} key={media.id} media={media}/>);

    return <div className='scrollable-media-list'>{mediaCards}</div>
}

export default ScrollableMediaList;