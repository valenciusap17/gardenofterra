type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};
const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

function calculateCommentAmount(comments: IComment[]): number {
  const lengthComment: number = comments.length;
  let result = 0;
  result += lengthComment;
  for (let i = 0; i < lengthComment; i++) {
    if (comments[i].replies) {
      result += calculateCommentAmount(comments[i].replies ?? []);
    }
  }
  return result;
}

console.log("Total komentar: " + calculateCommentAmount(comments) + " komentar");
