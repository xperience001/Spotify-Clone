import React from 'react'
import '../css/Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilledRounded'
import FavoriteIcon from '@material-ui/icons/FavoriteRounded'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue()


	return (
		<div className='body'>
			<Header spotify={spotify} />
			
			<div className='body-info'>
				<img 
					src={discover_weekly?.images[0].url}
					alt=''
				/>
				<div className='body-info-text'>
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>

			<div className='body-songs'>
					<div className='body-icons'>
						<PlayCircleFilledIcon className='body-shuffle' />
						<FavoriteIcon fontSize='large' />
						<MoreHorizIcon />
					</div>

					{/* List of songs */}
					{discover_weekly?.tracks.items.map((item) => (
						<SongRow track={item.track} />
					))}
				</div>
		</div>
	)
}

export default Body
