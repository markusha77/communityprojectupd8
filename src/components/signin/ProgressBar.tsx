import React from 'react'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep) / (totalSteps - 1)) * 100

  return (
    <div className="w-full h-2 bg-gray-200">
      <div 
        className="h-full bg-indigo-600 transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
