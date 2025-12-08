import React from "react";

interface TopicCardProps {
  title: string;
  subtitle: string;
  body: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, subtitle, body }) => {
  return (
    <div className="flex flex-col justify-center font-mono font-bold text-center m-10">
      <h2 className="text-2xl">{title}</h2>
      <h3 className="text-l m-5">{subtitle}</h3>
      <p className="">{body}</p>
    </div>
  );
};

export default TopicCard;

