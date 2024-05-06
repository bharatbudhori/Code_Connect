import React from 'react'
import { CircularProgressbarWithChildren, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({calculatePercentage, solved, total}) => {
  return (
    <div style={{maxWidth:"230px", minWidth:"220px"}} className="mx-4">
        <CircularProgressbarWithChildren  styles={buildStyles({
            pathColor: `#4ade80`,
            trailColor: '#34455d'
        })} 
        value={`${calculatePercentage(solved, total)}`
        } >
            <div className="text-5xl text-green-400">
            {solved}
            </div>
            <div>
            <span className="text-gray-400">solved out of </span>{total}
            </div>
        </CircularProgressbarWithChildren>
    </div>
  )
}

export default CircularProgress