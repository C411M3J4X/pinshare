export const categories = [
  {
    name: 'cars',
    image: 'https://i.pinimg.com/564x/ad/ea/a1/adeaa1d253aa4b4f103f88aec77bb0eb.jpg',
  },
  {
    name: 'fitness',
    image: 'https://i.pinimg.com/564x/ad/df/f6/addff69a665af9bc7791fe73b930cd9b.jpg',
  },
  {
    name: 'wallpaper',
    image: 'https://i.pinimg.com/564x/6c/c4/80/6cc480fc48e5acfe0e045238805790aa.jpg',
  },
  {
    name: 'websites',
    image: 'https://i.pinimg.com/564x/8e/25/b4/8e25b4dfdc3dd92148caeeb42ade9217.jpg',
  },
  {
    name: 'photo',
    image: 'https://i.pinimg.com/736x/49/7a/4e/497a4e35011ee9316f40e3f7204b9c47.jpg',
  },
  {
    name: 'lifestyle',
    image: 'https://i.pinimg.com/236x/7b/01/41/7b01411c38fe7d77fbf228e445da927f.jpg',
  },
  {
    name: 'watch',
    image: 'https://i.pinimg.com/564x/95/8a/04/958a048dcb6fa25800ae04393074ea53.jpg',
  },
  {
    name: 'food',
    image: 'https://i.pinimg.com/564x/3d/43/b5/3d43b5816213b46616e178174f2c2dbb.jpg',
  },
  {
    name: 'nature',
    image: 'https://i.pinimg.com/564x/47/f5/1c/47f51c4612e3cdb38794dbd455b94102.jpg',
  },
  {
    name: 'art',
    image: 'https://i.pinimg.com/564x/27/bb/07/27bb071f2c0ef2cafbede409c97b8728.jpg',
  }, {
    name: 'travel',
    image: 'https://i.pinimg.com/564x/ef/51/53/ef51539297ddac48b825fbd614273bf8.jpg',
  },
  {
    name: 'quotes',
    image: 'https://i.pinimg.com/236x/46/7c/17/467c17277badb00b638f8ec4da89a358.jpg',
  },
  {
    name: 'others',
    image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        username
        ,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          username
          ,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title,
    about,
    category,
    destination,
    postedBy->{
      _id,
      username
      ,
      image
    },
   save[]{
      postedBy->{
        _id,
        username
        ,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        username
        ,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      username
      ,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        username
        ,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              username
              ,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                username
                ,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      username,
      image
    },
    save[]{
      postedBy->{
        _id,
        username,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      username,
      image
    },
    save[]{
      postedBy->{
        _id,
        username,
        image
      },
    },
  }`;
  return query;
};
