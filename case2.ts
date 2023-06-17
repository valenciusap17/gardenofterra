type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};
const commentsData: IComment[] = [
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

function calculateCommentAmount(commentsData: IComment[]): number {
  const lengthComment: number = commentsData.length;
  let result = 0;
  result += lengthComment;
  for (let i = 0; i < lengthComment; i++) {
    if (commentsData[i].replies) {
      result += calculateCommentAmount(commentsData[i].replies ?? []);
    }
  }
  return result;
}

console.log(calculateCommentAmount(commentsData));
