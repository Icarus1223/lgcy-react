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

  export const exploreData = [
    {
      "image": "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "title": "Title 1",
      "description": "Description 1"
    },
    {
      "image": "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "title": "Title 2",
      "description": "Description 2"
    },
    {
      "image": "https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.webp?b=1&s=170667a&w=0&k=20&c=udzg1fifSWZqXvkBJyEAPe2iFGiEi9NxasBCpBAdogo=",
      "title": "Title 3",
      "description": "Description 3"
    },
    {
      "image": "https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "title": "Title 4",
      "description": "Description 4"
    },
    {
      "image": "https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.webp?b=1&s=170667a&w=0&k=20&c=udzg1fifSWZqXvkBJyEAPe2iFGiEi9NxasBCpBAdogo=",
      "title": "Title 5",
      "description": "Description 5"
    },
    {
      "image": "https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.webp?b=1&s=170667a&w=0&k=20&c=udzg1fifSWZqXvkBJyEAPe2iFGiEi9NxasBCpBAdogo=",
      "title": "Title 6",
      "description": "Description 6"
    }
  ];