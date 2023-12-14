import MediaTile from './MediaTile';

function MediaList({isTV, mediaList}){
    const mediaCards = mediaList.map(media => <MediaTile isTV={isTV} key={media.id} media={media}/>);

    return <div className='media-list'>{mediaCards}</div>
}

export default MediaList;