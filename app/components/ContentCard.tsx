import React from 'react'
import '../globals.css'; 

interface ContentCardProps {
    children: React.ReactNode;
  }

const ContentCard: React.FC<ContentCardProps> = ({ children }) => {
  return (
    <div className="outline p-5 m-4 mt-5 rounded">
      {children}
    </div>
  )
}

export default ContentCard
