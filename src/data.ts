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
      userImage: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
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
          relatedImages: [
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
        {
          id: 2,
          imageTitle: 'Image 2',
          imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
          place: 'Place 2',
          date: '2023-07-07',
          description: 'Description 2',
          username: 'Katie Morrison',
          likes: 15,
          relatedImages: [
            {
              id: 6,
              imageTitle: 'Related Image 3',
              imageUrl: 'https://picsum.photos/id/240/200/300',
              place: 'Place 6',
              date: '2023-07-11',
              description: 'Description 6',
              username: 'Katie Morrison',
              likes: 5,
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
            {
              id: 7,
              imageTitle: 'Related Image 4',
              imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
              place: 'Place 7',
              date: '2023-07-12',
              description: 'Description 7',
              username: 'Katie Morrison',
              likes: 9,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
        {
          id: 3,
          imageTitle: 'Image 2',
          imageUrl: 'https://picsum.photos/200/300/?blur=2',
          place: 'Place 2',
          date: '2023-07-07',
          description: 'Description 2',
          username: 'Katie Morrison',
          likes: 15,
          relatedImages: [
            {
              id: 6,
              imageTitle: 'Related Image 3',
              imageUrl: 'https://picsum.photos/id/240/200/300',
              place: 'Place 6',
              date: '2023-07-11',
              description: 'Description 6',
              username: 'Katie Morrison',
              likes: 5,
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
            {
              id: 7,
              imageTitle: 'Related Image 4',
              imageUrl: 'https://picsum.photos/id/241/200/300',
              place: 'Place 7',
              date: '2023-07-12',
              description: 'Description 7',
              username: 'Katie Morrison',
              likes: 9,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Akshay',
      userImage: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
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
          relatedImages: [
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          relatedImages: [
            {
              id: 6,
              imageTitle: 'Related Image 3',
              imageUrl: 'https://picsum.photos/id/240/200/300',
              place: 'Place 6',
              date: '2023-07-11',
              description: 'Description 6',
              username: 'Katie Morrison',
              likes: 5,
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
            {
              id: 7,
              imageTitle: 'Related Image 4',
              imageUrl: 'https://picsum.photos/id/241/200/300',
              place: 'Place 7',
              date: '2023-07-12',
              description: 'Description 7',
              username: 'Katie Morrison',
              likes: 9,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
        {
          id: 3,
          imageTitle: 'Image 2',
          imageUrl: 'https://picsum.photos/200/300/?blur=2',
          place: 'Place 2',
          date: '2023-07-07',
          description: 'Description 2',
          username: 'Katie Morrison',
          likes: 15,
          relatedImages: [
            {
              id: 6,
              imageTitle: 'Related Image 3',
              imageUrl: 'https://picsum.photos/id/240/200/300',
              place: 'Place 6',
              date: '2023-07-11',
              description: 'Description 6',
              username: 'Katie Morrison',
              likes: 5,
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
            {
              id: 7,
              imageTitle: 'Related Image 4',
              imageUrl: 'https://picsum.photos/id/241/200/300',
              place: 'Place 7',
              date: '2023-07-12',
              description: 'Description 7',
              username: 'Katie Morrison',
              likes: 9,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'shivam',
      userImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
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
          relatedImages: [
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          relatedImages: [
            {
              id: 6,
              imageTitle: 'Related Image 3',
              imageUrl: 'https://picsum.photos/id/240/200/300',
              place: 'Place 6',
              date: '2023-07-11',
              description: 'Description 6',
              username: 'Katie Morrison',
              likes: 5,
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
            {
              id: 7,
              imageTitle: 'Related Image 4',
              imageUrl: 'https://picsum.photos/id/241/200/300',
              place: 'Place 7',
              date: '2023-07-12',
              description: 'Description 7',
              username: 'Katie Morrison',
              likes: 9,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
        {
          id: 3,
          imageTitle: 'Image 2',
          imageUrl: 'https://picsum.photos/200/300/?blur=2',
          place: 'Place 2',
          date: '2023-07-07',
          description: 'Description 2',
          username: 'Katie Morrison',
          likes: 15,
          relatedImages: [
            {
              id: 6,
              imageTitle: 'Related Image 3',
              imageUrl: 'https://picsum.photos/id/240/200/300',
              place: 'Place 6',
              date: '2023-07-11',
              description: 'Description 6',
              username: 'Katie Morrison',
              likes: 5,
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
            {
              id: 7,
              imageTitle: 'Related Image 4',
              imageUrl: 'https://picsum.photos/id/241/200/300',
              place: 'Place 7',
              date: '2023-07-12',
              description: 'Description 7',
              username: 'Katie Morrison',
              likes: 9,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Vikas',
      userImage: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
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
          relatedImages: [
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://plus.unsplash.com/premium_photo-1682787494853-63e4dc03285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          relatedImages: [
            {
              id: 6,
              imageTitle: 'Related Image 3',
              imageUrl: 'https://picsum.photos/id/240/200/300',
              place: 'Place 6',
              date: '2023-07-11',
              description: 'Description 6',
              username: 'Katie Morrison',
              likes: 5,
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
            {
              id: 7,
              imageTitle: 'Related Image 4',
              imageUrl: 'https://picsum.photos/id/241/200/300',
              place: 'Place 7',
              date: '2023-07-12',
              description: 'Description 7',
              username: 'Katie Morrison',
              likes: 9,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
        {
          id: 3,
          imageTitle: 'Image 2',
          imageUrl: 'https://picsum.photos/200/300/?blur=2',
          place: 'Place 2',
          date: '2023-07-07',
          description: 'Description 2',
          username: 'Katie Morrison',
          likes: 15,
          relatedImages: [
            {
              id: 6,
              imageTitle: 'Related Image 3',
              imageUrl: 'https://picsum.photos/id/240/200/300',
              place: 'Place 6',
              date: '2023-07-11',
              description: 'Description 6',
              username: 'Katie Morrison',
              likes: 5,
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
            {
              id: 7,
              imageTitle: 'Related Image 4',
              imageUrl: 'https://picsum.photos/id/241/200/300',
              place: 'Place 7',
              date: '2023-07-12',
              description: 'Description 7',
              username: 'Katie Morrison',
              likes: 9,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
            {
              id: 4,
              imageTitle: 'Related Image 1',
              imageUrl: 'https://picsum.photos/id/238/200/300',
              place: 'Place 4',
              date: '2023-07-09',
              description: 'Description 4',
              username: 'Katie Morrison',
              likes: 12,
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
            {
              id: 5,
              imageTitle: 'Related Image 2',
              imageUrl: 'https://picsum.photos/id/239/200/300',
              place: 'Place 5',
              date: '2023-07-10',
              description: 'Description 5',
              username: 'Katie Morrison',
              likes: 8,
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
          ],
        },
      ],
    },
  ];

  export const imageDetailsData = [
    {
      id: 1,
      imageTitle: 'My Adventure',
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
      imageTitle: 'Party',
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
      imageTitle: 'Club',
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

  export const friendsData=[
      {
        "image": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "title": "Friend 1"
      },
      {
        "image": "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        "title": "Friend 2"
      },
      {
        "image": "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        "title": "Friend 3"
      },
      {
        "image": "https://plus.unsplash.com/premium_photo-1682787494853-63e4dc03285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "title": "Friend 4"
      },
      {
        "image": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "title": "Friend 5"
      }
    ]
  