export const PostIcons = () => {
  const icons = {
    edit: "icons/post-icons/edit.png",
    delete: "icons/post-icons/delete.png",
    reply: "icons/post-icons/reply.png",
    comment: "icons/post-icons/comment.png",
    like: "icons/post-icons/like.png",
  };

  return (
    <div className="flex items-center gap-4">
      <button>
        <img src={icons.edit} alt="edit" />
      </button>
      <button>
        <img src={icons.delete} alt="delete" />
      </button>
      <button>
        <img src={icons.reply} alt="reply" />
      </button>
      <button>
        <img src={icons.comment} alt="comment" />
      </button>
      <button>
        <img src={icons.like} alt="like" />
      </button>
    </div>
  );
};
