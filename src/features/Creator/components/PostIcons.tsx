import { twMerge } from "tailwind-merge";

import { icons } from "../constants";
import type { IconsProps } from "../types";

const Icons = ({ children, isActive }: IconsProps) => {
  return (
    <button className={twMerge(isActive && "bg-black")}>{children}</button>
  );
};

export const PostIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <Icons>
        <img src={icons.edit} alt="edit" />
      </Icons>
      <Icons>
        <img src={icons.delete} alt="delete" />
      </Icons>
      <Icons>
        <img src={icons.reply} alt="reply" />
      </Icons>
      <Icons>
        <img src={icons.comment} alt="comments" />
      </Icons>
      <Icons>
        <img src={icons.like} alt="likes" />
      </Icons>
    </div>
  );
};
