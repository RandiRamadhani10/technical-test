const comments = [
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

let jumlah = 0;

const hitungComment = () => {
  jumlah += comments.length;
  comments.map((data) => {
    if (data.replies) {
      jumlah += data.replies.length;
      data.replies.map((dat) => {
        jumlah += dat.replies.length;
      });
    }
  });
};

hitungComment();
console.log(jumlah);
