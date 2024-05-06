import React from 'react'

const DifficultyProgressBar = ({calculatePercentage, questionsTrack}) => {
  return (
    <div>
        <div className="m-4">
            <p className="text-green-500 font-semibold text-lg">Easy</p>
            <p className="text-gray-400">{questionsTrack.easy.solved} / {questionsTrack.easy.total}</p>
            <div className="bg-green-200 h-2 mt-1 rounded-md">
            <div
                className="bg-green-500 h-full rounded-md"
                style={{ width: `${calculatePercentage(questionsTrack.easy.solved, questionsTrack.easy.total)}%` }}
            ></div>
            </div>
        </div>
        <div className="m-4">
            <p className="text-yellow-500 font-semibold text-lg">Medium</p>
            <p className="text-gray-400">{questionsTrack.medium.solved} / {questionsTrack.medium.total}</p>
            <div className="bg-yellow-200 h-2 mt-1 rounded-md">
            <div
                className="bg-yellow-500 h-full rounded-md"
                style={{ width: `${calculatePercentage(questionsTrack.medium.solved, questionsTrack.medium.total)}%` }}
            ></div>
            </div>
        </div>
        <div className="m-4">
            <p className="text-red-500 font-semibold text-lg">Hard</p>
            <p className="text-gray-400">{questionsTrack.hard.solved} / {questionsTrack.hard.total}</p>
            <div className="bg-red-200 h-2 mt-1 rounded-md">
            <div
                className="bg-red-500 h-full rounded-md"
                style={{ width: `${calculatePercentage(questionsTrack.hard.solved, questionsTrack.hard.total)}%` }}
            ></div>
            </div>
        </div>
    </div>
  )
}

export default DifficultyProgressBar