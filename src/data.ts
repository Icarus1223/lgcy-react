export const postData=[
    {
        "image": "https://source.unsplash.com/user/c_v_r",
        "name": "John Doe",
        "title": "Sample Title",
        "description": "This is a sample description.",
        "comments": [
          {
            "user": "Alice",
            "comment": "Great image!"
          },
          {
            "user": "Bob",
            "comment": "I love the title!"
          },
          {
            "user": "Eve",
            "comment": "Nice description."
          }
        ]
      },
      {
        "image": "https://www.gstatic.com/webp/gallery3/1.sm.png",
        "name": "Johnny",
        "title": "Sample Title",
        "description": "This is a sample description.",
        "comments": [
          {
            "user": "Alice",
            "comment": "Great image!"
          },
          {
            "user": "Bob",
            "comment": "I love the title!"
          },
          {
            "user": "Eve",
            "comment": "Nice description."
          }
        ]
      },{
        "image": "https://www.gstatic.com/webp/gallery3/1.sm.png",
        "name": "Ram",
        "title": "Sample Title",
        "description": "This is a sample description.",
        "comments": [
          {
            "user": "Alice",
            "comment": "Great image!"
          },
          {
            "user": "Bob",
            "comment": "I love the title!"
          },
          {
            "user": "Eve",
            "comment": "Nice description."
          }
        ]
      }
]

export const notificationData = [
    {
      "title": "New Message",
      "user": {
        "name": "John Doe",
        "image": "https://picsum.photos/id/237/200/300"
      },
      "notificationImage": "https://picsum.photos/seed/picsum/200/300"
    },
    {
      "title": "New Like",
      "user": {
        "name": "Jane Smith",
        "image": "https://picsum.photos/seed/picsum/200/300"
      },
      "notificationImage": "https://picsum.photos/200/300?grayscale"
    },
    {
        "title": "New Like",
        "user": {
          "name": "Jane Smith",
          "image": "https://picsum.photos/200/300/?blur"
        },
        "notificationImage": "https://picsum.photos/200/300.jpg"
      },
      {
        "title": "New Like",
        "user": {
          "name": "Jane Smith",
          "image": "https://picsum.photos/200/300/?blur=2"
        },
        "notificationImage": "https://picsum.photos/200/300.jpg"
      }
  ];

 export const profileData = [
    {
      id: 1,
      name: 'John Doe',
      userImage: 'https://picsum.photos/seed/picsum/200/300',
      title: 'My Gallery',
      images: [
        {
          id: 1,
          imageTitle: 'Image 1',
          imageUrl: 'https://picsum.photos/id/237/200/300',
          place: 'Place 1',
          date: '2023-07-06',
          description: 'Description 1',
          username: 'Katie Morrison',
          likes: 10,
        },
        {
          id: 2,
          imageTitle: 'Image 2',
          imageUrl: 'https://picsum.photos/200/300/?blur=2',
          place: 'Place 2',
          date: '2023-07-07',
          description: 'Description 2',
          username: 'Katie Morrison',
          likes: 15,
        },
        {
          id: 3,
          imageTitle: 'Image 3',
          imageUrl: 'https://picsum.photos/200/300?grayscale',
          place: 'Place 3',
          date: '2023-07-08',
          description: 'Description 3',
          username: 'Katie Morrison',
          likes: 20,
        },
      ],
    },
  ];

  export const imageDetailsData = [
    {
      id: 1,
      imageTitle: 'Image 1',
      imageUrl: 'https://picsum.photos/id/237/200/300',
      place: 'Place 1',
      date: '2023-07-06',
      description: 'Description 1',
      username: 'Katie Morrison',
      likes: 10,
      comments: [
        {
          id: 1,
          username: 'John',
          text: 'This is comment 1.',
        },
        {
          id: 2,
          username: 'Jane',
          text: 'This is comment 2.',
        },
      ],
    },
    {
      id: 2,
      imageTitle: 'Image 2',
      imageUrl: 'https://picsum.photos/200/300/?blur=2',
      place: 'Place 2',
      date: '2023-07-07',
      description: 'Description 2',
      username: 'Katie Morrison',
      likes: 15,
      comments: [
        {
          id: 1,
          username: 'Alex',
          text: 'This is comment 1.',
        },
        {
          id: 2,
          username: 'Emily',
          text: 'This is comment 2.',
        },
      ],
    },
    {
      id: 3,
      imageTitle: 'Image 3',
      imageUrl: 'https://picsum.photos/200/300?grayscale',
      place: 'Place 3',
      date: '2023-07-08',
      description: 'Description 3',
      username: 'Katie Morrison',
      likes: 20,
      comments: [
        {
          id: 1,
          username: 'Mike',
          text: 'This is comment 1.',
        },
        {
          id: 2,
          username: 'Sarah',
          text: 'This is comment 2.',
        },
      ],
    },
  ];