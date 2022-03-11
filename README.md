### Description of the project

This project contains of two parts, a server side and a client side. With this app you can create and purchase a photo book with images and descriptions. This part is the server side, which is handling the users, pictures and the purchased books.

#### User Stories
Below user stories are made to be able to handle creation of user and get user validated when user try to log in on the homepage. The user should be able to upload picture in the database, change and read their own pictures, and finally delete their own pictures from the data base. The user should be able buy a photo book based on their own pictures. Finally, when book is bought then admin of the site should be able to delete the book when it is printed.

- Creation of auth routes (create, read)
- Creation of user routes (read)
- Creation of book routes (create, read, delete)
- Creation of picture routes (create, read, update, delete)
- Creation of User.model
- Creation of Picture.model
- Creation of Book.model

#### Technoligies Used
- Java Script
- Node Express
- Bcrypt
- Axios
- MongoDB Atlas
- Heroku
- Mongoose
- Cloudinary

#### Models
##### Picture Model
```js
{
  title: String,
  description: String,
  imageUrl: String,
  purchased: { type: String, default: 'no' },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  isSelected: { type: Boolean, default: false },
  numberInBook: {type: Number, default: 0}
}
```

##### Book Model
```js
{
  picture: [{ type: Schema.Types.ObjectId, ref: "Picture" }],
  price: Number,
  theme: String
}
```

##### User Model
```js
{
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  postCode: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true }
}
```

#### Routes

##### Picture routes

| HTTP verb | URL                        | Request body | Action                                                                              |
| --------- | -------------------------- | ------------ | ------------------------------------------------------------------------------------|
| POST      | `/api/upload`              | JSON         | Receive image, sends it to Cloudinary via the fileUploader and returns the image URL|
| POST      | `/api/pictures`            | JSON         | Creates a new picture with userID                                                   |
| GET       | `/api/pictures`            | (empty)      | Retrieves pictures by userID                                                        |
| GET       | `/api/pictures/:pictureId` | (empty)      | Retrieves a specific picture by id                                                  |
| PUT       | `/api/pictures/:pictureId` | JSON         | Updates a specific picture by id                                                    |
| DELETE    | `/api/pictures/:pictureId` | (empty)      | Deletes a specific picture by id                                                    |

##### Book routes

| HTTP verb | URL                        | Request body | Action                        |
| --------- | -------------------------- | ------------ | ----------------------------- |
| POST      | `/api/book`                | JSON         | Create a new book             |
| GET       | `/api/book`                | (empty)      | Retrieves all books           |
| DELETE    | `/api/book/:bookId`        | (empty)      | Deletes a specific book by id |

##### User routes

| HTTP verb | URL                  | Request body | Action                     |
| --------- | -------------------- | ------------ | -------------------------- |
| GET       | `/api/user/:userId`  | (empty)      | Get user by id             |

##### Auth routes
| HTTP verb | URL                        | Request body | Action                                         |
| --------- | -------------------------- | ------------ | ---------------------------------------------- |
| POST      | `/auth/signup`             | JSON         | Creates a new user in the database             |
| POST      | `/auth/login`              | JSON         | Verifies email and password and returns a JWT  |
| GET       | `/auth/verify`             | (empty)      | Used to verify JWT stored on the client        |

<hr>

#### Project Link
Below link is the final app:
- https://photo-book2.netlify.app/pictures

#### Future Work
- Next step on the server side will be to handle the payment when buying a photo book

#### Team member
This project is done by me - Vibeke G Jørgensen


