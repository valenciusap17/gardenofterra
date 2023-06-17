var commentsData = [
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
function calculateCommentAmount(commentsData) {
    var _a;
    var lengthComment = commentsData.length;
    var result = 0;
    result += lengthComment;
    for (var i = 0; i < lengthComment; i++) {
        if (commentsData[i].replies) {
            result += calculateCommentAmount((_a = commentsData[i].replies) !== null && _a !== void 0 ? _a : []);
        }
    }
    return result;
}
console.log(calculateCommentAmount(commentsData));
