import React from "react";

interface ContentCardProps {
  children?: React.ReactNode;
  title?: string;
  body?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ children, title, body }) => {
  return (
    <div className="outline p-5 m-4 mt-5 rounded">
      <h2 className="font-bold text-center">{title}</h2>
      <p>{body}</p>
      {children}
    </div>
  );
};

export default ContentCard;
